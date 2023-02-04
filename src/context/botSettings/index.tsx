import React, { createContext, useState } from 'react';
import { 
    BotSettingsContextType, 
    Credentials, 
    ErrorLog, 
    ProcessRow, 
    TCourtData
} from './botSettings';
import {PythonShell, PythonShellError} from 'python-shell';

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
    const [isRunning, setIsRunning] = useState<boolean>(false)

    const handlePyPrint = (
        message: any
    ) => {
            if(message.indexOf(']>')==-1) {
                // console.log(message)
                return
            }
            const [logData, logMessage] = message.split(']>')
            const [type, row, hour] = logData.replace('<[','').split(',')

            if(type=='error') {
                setErrorsLog(errors => [...errors, { cells: [logMessage, hour] }])
                return
            } 
            if(row=='0' || row==0) return 

            setRows(oldRows => {
                const currentRow = Number(row) - 1;
                const newRows = [...oldRows]

                newRows[currentRow] = {
                    ...newRows[currentRow],
                    status: logMessage
                }
                console.log(newRows[currentRow].npu, logMessage, currentRow)

                return [...newRows]
            })
    }

    const handlePyEnd = (
        err: PythonShellError,
        code: number,
        signal: string
    ) => {
        if (err) {
            throw err;
        }

        console.log('The exit code was: ' + code);
        console.log('The exit signal was: ' + signal);
        console.log('finished');
        setIsRunning(false)
    }

    const execBot = async() => {
        if(!file) {
            alert('Adicione a planilha')
            return
        }
        
        const credentialsFormated = `${credentials.login}>!>${credentials.password}`
        const options = {
            pythonOptions: ['-u'], // get print results in real-time
            scriptPath: 'src/scripts/',
            args: [credentialsFormated, file.path, 'value3']
        };

        let pyshell = new PythonShell('crawler_esaj_capa.py', options);
    
        setErrorsLog([])
        setIsRunning(true)
        pyshell.on('message', handlePyPrint);
        pyshell.end(handlePyEnd);
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
                execBot,
                isRunning
            }}
        >
            {children}
        </BotSettingsContext.Provider>
    );
}
 
export default BotSettingsProvider;