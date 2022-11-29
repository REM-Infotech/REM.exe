import React, { useRef, useEffect } from 'react'
import styled from 'styled-components';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

type Props = {
    folder: FileList | null;
    setFolder: React.Dispatch<React.SetStateAction<FileList | null>>;
}

type DropZoneProps = {
    folder: FileList | null;
}

const DropZone = (props: DropZoneProps) => {
    return (
        <>
            <DropIcon>
                <FolderOpenIcon />
            </DropIcon>
            <DropLegend>
                {!props.folder && <p className="file-legend">
                    Clique para <span>selecionar</span> a <span>pasta</span> contendo os arquivos a serem anexados
                </p>}
                {props.folder && 
                    <p className="file-name">
                        <span>{props.folder.length} arquivos</span> selecionados
                    </p>
                }
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
        const files = e.target.files
        props.setFolder(files);
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

    & div {
        cursor: pointer;
    }

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