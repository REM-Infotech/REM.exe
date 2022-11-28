import React, { useRef, useEffect } from 'react'
import styled from 'styled-components';
import UploadFileIcon from '@mui/icons-material/UploadFile';

type Props = {
    folder: string | null;
    setFolder: React.Dispatch<React.SetStateAction<string | null>>;
}

type DropZoneProps = {
    folder: string | null;
}

const DropZone = (props: DropZoneProps) => {
    return (
        <>
            <DropIcon>
                <UploadFileIcon />
            </DropIcon>
            <DropLegend>
                {!props.folder && <p className="file-legend">
                    Clique para <span>selecionar</span> ou <span>arraste</span> a planilha até aqui
                </p>}
                {props.folder && <p className="file-name">{props.folder}</p>}
            </DropLegend>
        </>
    )
}

const FolderSelect = (props: Props) => {
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if(ref.current) {
        ref.current.setAttribute("directory", "");
        ref.current.setAttribute("webkitdirectory", "");
      }
    }, [ref])

    const onChange = (e: any) => {
        const path = e.target.files[0]
        console.log(path)
    }
    

  return (
    <Container>
        <label htmlFor="folder">
            <DropZone folder={props.folder} />
        </label>
        <Input 
            onChange={onChange}
            type="file" 
            name="folder"
            id='folder'
            ref={ref}
        />
    </Container>
  )
}

export default FolderSelect;

const Container = styled.div`
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
const Input = styled.input`
    display: none;
`
const DropIcon = styled.div``
const DropLegend = styled.div``