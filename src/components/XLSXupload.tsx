import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import styled from "styled-components";
import UploadFileIcon from '@mui/icons-material/UploadFile';

type Props = {
    file: File | null;
    setFile: React.Dispatch<React.SetStateAction<File | null>>;
}

type DropZoneProps = {
    file: File | null;
}

const DropZone = (props: DropZoneProps) => {
    return (
        <Drop className="drop">
            <DropIcon>
                <UploadFileIcon />
            </DropIcon>
            <DropLegend>
                {!props.file && <p className="file-legend">
                    Clique para <span>selecionar</span> ou <span>arraste</span> a planilha de <span>processos</span> até aqui
                </p>}
                {props.file && <p className="file-name">{props.file?.name}</p>}
            </DropLegend>
        </Drop>
    )
}

const XLSXupload = (props: Props) => {
  const fileTypes = ["XLSX"];
  const handleChange = (file: File) => {
    props.setFile(file);
  };
  return (
    <FileUploader 
        handleChange={handleChange} 
        name="file" 
        types={fileTypes}
        label="Upload ou arraste a planilha até aqui"
        classes="file_drop_area drop_zone"
        hoverTitle="Solte aqui"
        children={<DropZone file={props.file} />}
        dropMessageStyle={{
            border: 'none',
            color: 'white',
            textShadow: '0 0 5px black',
            opacity: .8
        }}
    />
  );
}

export default XLSXupload;

const Drop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: stretch;
    /* background: radial-gradient(rgba(0,0,0,0.3), transparent); */
    background-color: rgba(0,0,0,0.3);
    padding: .25rem;
    border-radius: .25rem;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
    transition: .3s;

    & svg {
        width: 3rem;
        height: auto;
    }

    &:hover {
        background-color: rgba(0,0,0,0.5);
    }

    & span {
        font-weight: bold;
    }
`
const DropIcon = styled.div``
const DropLegend = styled.div``