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
export type TCourtData = {
    name: string,
    id: number | string
}
export interface BotSettingsContextType {
    credentials: Credentials | null;
    setCredentials: React.Dispatch<React.SetStateAction<Credentials>>;
    file: File | null;
    setFile: React.Dispatch<React.SetStateAction<File>>;
    folder: FileList | null;
    setFolder: React.Dispatch<React.SetStateAction<FileList | null>>;
    parteName: string | null;
    setParteName: React.Dispatch<React.SetStateAction<string | null>>;
    courtData: TCourtData | null;
    setCourtData: React.Dispatch<React.SetStateAction<TCourtData | null>>;
    typeEncerramento: string | null;
    setTypeEncerramento: eact.Dispatch<React.SetStateAction<string | null>>;
    rows: ProcessRow[];
    setRows: React.Dispatch<React.SetStateAction<ProcessRow[]>>;
    errorsLog: ErrorLog[];
    setErrorsLog: React.Dispatch<React.SetStateAction<ErrorLog[]>>;
}