export type Credentials = {
    login: string,
    password: string
}

export type ProcessRow = {
    npu: string;
    status: string
}
export type ErrorLog = {
    npu?: string | null,
    message: string | null
}
export interface BotSettingsContextType {
    credentials: Credentials | null;
    setCredentials: React.Dispatch<React.SetStateAction<Credentials>>;
    file: File | null;
    setFile: React.Dispatch<React.SetStateAction<File>>;
    rows: ProcessRow[];
    setRows: React.Dispatch<React.SetStateAction<ProcessRow[]>>;
    errorsLog: ErrorLog[];
    setErrorsLog: React.Dispatch<React.SetStateAction<ErrorLog[]>>;
}