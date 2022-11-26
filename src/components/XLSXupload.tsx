import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import styled from "styled-components";

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
            {!props.file && <p className="file-legend">
                Clique para <span>selecionar</span> ou <span>arraste</span> a planilha até aqui
            </p>}
            {props.file && <p className="file-name">{props.file?.name}</p>}
        </Drop>
    )
}

const XLSXupload = (props: Props) => {
  const fileTypes = ["JPG", "PNG", "GIF"];
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
    />
  );
}

export default XLSXupload;

const Drop = styled.div``
