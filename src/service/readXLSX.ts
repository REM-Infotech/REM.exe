import readXlsxFile from "read-excel-file"
import { Row } from "read-excel-file/types";

interface ProcessRow {
    npu: string;
    status: string
}

const readXLSX = async(file: File) => {
    let data: Row[] = []
    await readXlsxFile(file).then((rows) => {
        data = rows;
    })

    return data
}

export { readXLSX, ProcessRow } 