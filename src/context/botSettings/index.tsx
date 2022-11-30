import React, { createContext, useState } from 'react';
import { 
    BotSettingsContextType, 
    Credentials, 
    ErrorLog, 
    ProcessRow, 
    TCourtData
} from '../../types/botSettings';

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
                setErrorsLog
            }}
        >
            {children}
        </BotSettingsContext.Provider>
    );
}
 
export default BotSettingsProvider;