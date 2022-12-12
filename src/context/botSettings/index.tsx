import React, { createContext, useState } from 'react';
import { 
    BotSettingsContextType, 
    Credentials, 
    ErrorLog, 
    ProcessRow, 
    TCourtData
} from './botSettings';
import {PythonShell} from 'python-shell';

export const BotSettingsContext = createContext<BotSettingsContextType | null>(null);

interface BotSettingsProviderProps {
    children: React.ReactNode
}
 
const BotSettingsProvider: React.FC<BotSettingsProviderProps> = ({ children }) => {
    const [credentials, setCredentials] = useState<Credentials | null>({ 
        login: '', 
        password: '' 
    })
    const [file, setFile] = useState<File | null>(null);
    const [folder, setFolder] = useState<FileList | null>(null);
    const [parteName, setParteName] = useState<string | null>(null);
    const [courtData, setCourtData] = useState<TCourtData | null>(null)
    const [typeEncerramento, setTypeEncerramento] = useState<string | null>(null);
    const [rows, setRows] = useState<ProcessRow[]>([]);
    const [errorsLog, setErrorsLog] = useState<ErrorLog[]>([])

    const execBot = async() => {
        if(!file) {
            alert('Adicione a planilha')

            return
        } 

        const credentialsFormated = `${credentials.login}>!>${credentials.password}`
        setErrorsLog([])

        let options = {
            pythonOptions: ['-u'], // get print results in real-time
            scriptPath: 'src/scripts/',
            args: [credentialsFormated, file.path, 'value3']
        };
        let pyshell = new PythonShell('crawler_esaj_movimentacao.py', options);
    
    
        pyshell.on('message', function (message) {
            if(message.indexOf(']>')==-1) {
                console.log(message)
                return
            }
            const [messageData, messageLog] = message.split(']>')
            const [type, row, hour] = messageData.replace('<[','').split(',')

            console.log(messageLog, hour)

            if(type=='error') {
                setErrorsLog(errors => [...errors, { cells: [messageLog, hour] }])
            }
        });
    
        // end the input stream and allow the process to exit
        pyshell.end(function (err,code,signal) {
            if (err) {
                throw err;
            }
            console.log('The exit code was: ' + code);
            console.log('The exit signal was: ' + signal);
            console.log('finished');
        });
    }

    return ( 
        <BotSettingsContext.Provider 
            value={{
                credentials,
                setCredentials,
                file,
                setFile,
                folder,
                setFolder,
                parteName,
                setParteName,
                courtData,
                setCourtData,
                typeEncerramento,
                setTypeEncerramento,
                rows,
                setRows,
                errorsLog,
                setErrorsLog,
                execBot
            }}
        >
            {children}
        </BotSettingsContext.Provider>
    );
}
 
export default BotSettingsProvider;