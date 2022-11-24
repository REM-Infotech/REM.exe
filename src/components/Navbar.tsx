import React, { useState } from 'react'
import styled, { css } from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { colors } from '../service/theme';
import { 
    closeWindow, 
    minimizeWindow, 
    maximizeWindow, 
    isMaximized
} from '../service/electron-remote';

type Props = {
    children: JSX.Element
}

interface IconProps {
    type: string;
    onClick: () => void;
    isMaximized?: boolean;
}

const IconButton = (props: IconProps) => {
    return (
        <Button 
            typeStyle={props.type}
            onClick={props.onClick}
        >
            {props.type == 'close' && <CloseIcon />}
            {props.type == 'maximize'? props.isMaximized ?<OpenInFullIcon /> : <CloseFullscreenIcon /> : null}
            {props.type == 'minimize' && <MinimizeIcon />}
        </Button>
    )
}

const Navbar = (props: Props) => {
    const [maximized, setMaximized] = useState<boolean>(false);
  return (
    <Container>
        <Nav>
            <p></p>
            <ButtonsContainer>
                <IconButton
                    type='minimize'
                    onClick={minimizeWindow}
                />
                <IconButton
                    type='maximize'
                    onClick={() => {
                        setMaximized(maximized? false : true);
                        maximizeWindow();
                    }}
                    isMaximized={maximized}
                />
                <IconButton
                    type='close'
                    onClick={closeWindow}
                />
            </ButtonsContainer>
        </Nav>
        <Content>
            {props.children}
        </Content>
    </Container>
  )
}

export default Navbar;

const Container = styled.div`
   height: 90%;
`
const Content = styled.div`
   height: 100%;
`
const Nav = styled.div`flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    & p {
        flex: 1;
        text-align: center;
        margin: 0;
        padding: .5rem;
    }
`
const Button = styled.button((props) => css`
    background-color: ${props.typeStyle == 'close'? 'red' : 'transparent'};
    border: 1px solid transparent;
    cursor: pointer;
    -webkit-app-region: no-drag;
    transition: .3s;
    padding: 0 1rem 0 1rem;
    border-radius:
        ${props.typeStyle == 'close' && '0 0 0 .25rem'}
        ${props.typeStyle != 'close' && '0 0 .25rem .25rem'}
    ;

    &:hover{
        background-color: white;
    }
    &:hover svg{
        fill: ${props.typeStyle == 'close'? 'red' : colors.primary};
    }
    & svg {
        fill: ${colors.secondary};
        width: 1.25rem;
    }
`)

const ButtonsContainer = styled.div``