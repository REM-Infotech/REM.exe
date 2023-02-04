from selenium import webdriver
from time import sleep
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options  
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from printlog import print_log as prt
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import pathlib, sys, subprocess, shutil, openpyxl, threading, os
from selenium.webdriver.support.ui import Select
class ESAJCrawler:

    def __init__(self, credentials, input_file, loginmethod = 'cpf'):

        chrome_options = Options()
        path_websigner = os.path.join(pathlib.Path(__file__).parent.resolve(), 'Web-Signer.crx')
        chrome_options.add_extension(path_websigner)
        driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)
        wait = WebDriverWait(driver, 10)
        login, password = credentials.split('>!>')
        self.credentials = {
            'login': login,
            'password': password,
        }
        self.input_file = input_file
        self.output_dir_path = pathlib.Path(input_file).parent.resolve()
        self.current_dir = pathlib.Path(__file__).parent.resolve()
        self.output_planilha_copia = None
        self.loginmethod = loginmethod
        
 
        try:
            get_login_esaj = threading.Thread(target=self.login_esaj, args=(driver, wait))
            get_login_esaj.start()
            #self.get_login_and_password(driver)
        except:
            prt(type='error', message='Erro ao recuperar dados de login e senha')

    def login_esaj(self, driver, wait):

        if self.loginmethod == "certificado":
            
            driver.get("https://consultasaj.tjam.jus.br/sajcas/login#aba-certificado")
            logincert = wait.until(EC.presence_of_all_elements_located((By.XPATH, '//*[@id="certificados"]')))
            sleep(3)

            for cert in logincert:
                loginopt = cert.find_elements(By.TAG_NAME, "option")
                
                for option in loginopt:
                        if self.credentials['login'] in option.text.lower():
                            try:
                                sencert = option.get_attribute("value")
                                select = Select(driver.find_element(By.CSS_SELECTOR, 'select[id="certificados"]'))
                                select.select_by_value(sencert)
                                entrar = driver.find_element(By.XPATH, '//*[@id="submitCertificado"]')
                                entrar.click()
                                prt(type="log", message="confirme o websigner", row=1)
                                sleep(10)
                                self.websigner_confirmed = 1
                                prt(type='log', message='Login efetuado com sucesso', row=1)
                                sleep(2)
                            except Exception as e:
                                print(e)

                            try:
                                self.get_input_process(driver, wait=wait)
                            except:
                                prt(type='error', message='Erro ao recuperar processos do input', row=1)

        elif self.loginmethod == "cpf":
            driver.get("https://consultasaj.tjam.jus.br/sajcas/login")
            sleep(3)

            userlogin = driver.find_element(By. CSS_SELECTOR, '#usernameForm')
            userlogin.click()
            userlogin.send_keys(self.credentials['login'])

            userpass = driver.find_element(By. CSS_SELECTOR, '#passwordForm')
            userpass.click()
            userpass.send_keys(self.credentials['password'])
            entrar = driver.find_element(By.CSS_SELECTOR, '#pbEntrar')
            entrar.click()
            sleep(2)

            try:
                self.get_input_process(driver, wait=wait)
            except:
                prt(type='error', message='Erro ao recuperar processos do input')

    def get_processo(self, driver, petition_data, wait, row):

        if petition_data[1] == '1' or petition_data[1] == 1:
            driver.get("https://consultasaj.tjam.jus.br/cpopg/open.do")
            sleep(2)

            consultar = driver.find_element(By.ID,'botaoConsultarProcessos')

        elif petition_data[1] == '2' or petition_data[1] == 2:
            driver.get("https://consultasaj.tjam.jus.br/cposgcr/open.do")
            sleep(2)

            consultar = driver.find_element(By.ID,'pbConsultar')
            
        else:
            prt(type='error', message='Erro ao obter grau do processo', row=row)
            self.append_error_on_output(petition_data=petition_data[0], error='Erro ao obter grau do processo')
            return 

        npu = driver.find_element(By.ID, 'radioNumeroAntigo')
        npu.click()

        input_proc_1grau = driver.find_element(By.ID, 'nuProcessoAntigoFormatado')

        input_proc_1grau.send_keys(petition_data[0])

        consultar.click()

        try:
            self.get_process_informations(driver, petition_data, row=row, wait=wait)
        except:

            self.myprint('Erro ao buscar informações do processo {}'.format(petition_data[0]), 'red')
   
    def get_process_informations(self, driver, petition_data, row, wait):

        
        more_details = driver.find_element(By.XPATH, '//a[@href="#maisDetalhes"]')
        more_details.click()


        if petition_data[1] == '1' or petition_data[1] == 1:

            competencia = driver.find_element(By.ID, 'foroProcesso').text
            juizproc = driver.find_element(By.ID, 'juizProcesso').text
            vara = driver.find_element(By.ID, 'varaProcesso').text
            dist = driver.find_element(By.ID, 'dataHoraDistribuicaoProcesso').text

            table_partes = driver.find_element(By.ID, 'tablePartesPrincipais')

            polo_ativo = table_partes.find_elements(By.TAG_NAME, 'tr')[0].find_elements(By.TAG_NAME, 'td')[1].text.split('\n')[0]
            cpf_polo_ativo = 'Não consta'
            try:
                adv_polo_ativo = table_partes.find_elements(By.TAG_NAME, 'tr')[0].find_elements(By.TAG_NAME, 'td')[1].text.split(':')[1].replace('Advogada','').replace('Advogado','')
            except:
                adv_polo_ativo = 'Não consta'

            polo_passivo = table_partes.find_elements(By.TAG_NAME, 'tr')[1].find_elements(By.TAG_NAME, 'td')[1].text.split('\n')[0]
            cpf_polo_passivo = 'Não consta'

            try:
                adv_polo_passivo = table_partes.find_elements(By.TAG_NAME, 'tr')[1].find_elements(By.TAG_NAME, 'td')[1].text.split(':')[1].replace('Advogada','').replace('Advogado','')
            except:
                adv_polo_passivo = 'Não consta'

            valor = driver.find_element(By.ID, 'valorAcaoProcesso').text

            processo_data = [petition_data[0], competencia, juizproc, vara, dist, polo_ativo, cpf_polo_ativo,adv_polo_ativo, polo_passivo, cpf_polo_passivo,adv_polo_passivo, valor]
            try:
                self.append_process_on_output(processo_data, row=row)
            except :
                prt(type='error', message='Erro ao adicionar processo {} na planilha'.format(petition_data[0]), row=row)
            
        elif petition_data[1] == '2' or petition_data[1] == 2:

            classe = wait.until(EC.presence_of_element_located(((By.XPATH, '//*[@id="classeProcesso"]/span')))).text
            seção = wait.until(EC.presence_of_element_located(((By.XPATH, '//*[@id="secaoProcesso"]/span')))).text
            julgador = wait.until(EC.presence_of_element_located(((By.XPATH, '//*[@id="orgaoJulgadorProcesso"]')))).text
            relator = wait.until(EC.presence_of_element_located(((By.XPATH, '//*[@id="relatorProcesso"]')))).text

            table_partes = driver.find_element(By.ID, 'tablePartesPrincipais')
            polo_ativo = table_partes.find_elements(By.TAG_NAME, 'tr')[0].find_elements(By.TAG_NAME, 'td')[1].text.split('\n')[0]
            cpf_polo_ativo = 'Não consta'
            try:
                adv_polo_ativo = table_partes.find_elements(By.TAG_NAME, 'tr')[0].find_elements(By.TAG_NAME, 'td')[1].text.split(':')[1].replace('Advogada','').replace('Advogado','')
            except:
                adv_polo_ativo = 'Não consta'

            polo_passivo = table_partes.find_elements(By.TAG_NAME, 'tr')[1].find_elements(By.TAG_NAME, 'td')[1].text.split('\n')[0]
            cpf_polo_passivo = 'Não consta'

            try:
                adv_polo_passivo = table_partes.find_elements(By.TAG_NAME, 'tr')[1].find_elements(By.TAG_NAME, 'td')[1].text.split(':')[1].replace('Advogada','').replace('Advogado','')
            except:
                adv_polo_passivo = 'Não consta'

            processo_data = [petition_data[0], seção, julgador, relator, polo_ativo, cpf_polo_ativo,adv_polo_ativo, polo_passivo, cpf_polo_passivo,adv_polo_passivo]

            try:
                self.append_process_on_output2(processo_data, row=row)
            except:
                prt(type='error', message='Erro ao adicionar processo {} na planilha'.format(petition_data[0]), row=row)
                                  
    def append_process_on_output(self, processo_data, petition_data, row):

            if petition_data[1] == '1' or petition_data[1] == 1:
                output_filename = '{dir_path}/pesquisa_processual_esaj.xlsx'.format(dir_path=self.output_dir_path)
                wb = openpyxl.load_workbook(filename=output_filename)
                sheet = wb['Sheet1']
                sheet.append(processo_data)
                wb.save(output_filename)
                prt(type='log', message='Processo {} adicionado com sucesso'.format(processo_data[0]), row=row)

            elif petition_data[1] == '2' or petition_data[1] == 2:
                output_filename = '{dir_path}/pesquisa_processual_esaj.xlsx'.format(dir_path=self.output_dir_path)
                wb = openpyxl.load_workbook(filename=output_filename)
                sheet = wb['Sheet2']
                sheet.append(processo_data)
                wb.save(output_filename)
                prt(type='log', message='Processo {} adicionado com sucesso'.format(processo_data[0]), row=row)
    
    def get_input_process(self, driver, wait):

        output_planilha_base = os.path.join(self.current_dir, 'pesquisa_processual_esaj.xlsx')
        self.output_planilha_copia = os.path.join(self.output_dir_path, 'pesquisa_processual_esaj_mov.xlsx')

        shutil.copyfile(output_planilha_base, self.output_planilha_copia)

        output_filename = self.output_planilha_copia
        wrkbk_output = openpyxl.load_workbook(filename=output_filename)
        sheet_output = wrkbk_output.active
        sheet_output.delete_rows(2, sheet_output.max_row+1)
        wrkbk_output.save(output_filename)

        input_filename = self.input_file
        wrkbk_input = openpyxl.load_workbook(filename=input_filename)
        sheet_input = wrkbk_input.active
        
        try:
            for i in range(2, sheet_input.max_row+1):
                cell_obj = sheet_input.cell(row=i, column=1)
                if cell_obj.value is not None and cell_obj.value != '':
                    numero = cell_obj.value.replace(' ','')
                    try:
                        grau = sheet_input.cell(row=i, column=2).value.replace(' ','').replace('º','')
                    except:
                        prt(type='error', message='Grau do processo {numero} preenchido errado. O formato deve ser "1º" ou "2º"'.format(numero=numero),row=1)
                        return 

                    petition_data = [numero, grau]
                    
                    try:
                        self.get_processo(driver, petition_data=petition_data, wait=wait, row=i-1)
                    except:
                        prt(type='error', message='Erro ao consultar processo {}'.format(numero), row = 0)

                if i == sheet_input.max_row:
                    prt(type='log', message='Fim dos processos')
                    try:
                        if sys.platform == 'linux':
                            os.system('xdg-open "%s"' % self.output_dir_path)
                            subprocess.call(["xdg-open", self.output_planilha_copia])
                        else:
                            os.system(f'start {self.output_dir_path}')
                            os.startfile(self.output_planilha_copia)
                    except Exception as e:
                        prt(type='error', message=e)
        except:
            prt(type='error', message='Erro ao recuperar processos do input')

ESAJCrawler(
    credentials=sys.argv[1],
    input_file=sys.argv[2], 
)





