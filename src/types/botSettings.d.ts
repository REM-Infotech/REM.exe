export type Credentials = {
    login: string,
    password: string,
    [key: string]: string
}

export type ProcessRow = {
    npu: string;
    status: string
}
type TErrorCell = {
    label: string,
}
export type ErrorLog = {
    cells: TErrorCell[]
}
export interface BotSettingsContextType {
    credentials: Credentials | null;
    setCredentials: React.Dispatch<React.SetStateAction<Credentials>>;
    file: File | null;
    setFile: React.Dispatch<React.SetStateAction<File>>;
    folder: string | null;
    setFolder: React.Dispatch<React.SetStateAction<string | null>>;
    rows: ProcessRow[];
    setRows: React.Dispatch<React.SetStateAction<ProcessRow[]>>;
    errorsLog: ErrorLog[];
    setErrorsLog: React.Dispatch<React.SetStateAction<ErrorLog[]>>;
}