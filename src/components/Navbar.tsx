import React, { useState } from 'react'
import styled, { css } from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { colors } from '../service/theme';
import { 
    closeWindow, 
    minimizeWindow, 
    maximizeWindow, 
    isMaximized
} from '../service/electron-remote';
import useIsMaximized from '../hooks/useIsMaximized';
import { useLocation, useNavigate } from 'react-router-dom';

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
    const maximized = useIsMaximized()
    const location = useLocation()
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

  return (
    <Container location={location.pathname}>
        <Nav>
            <ButtonBack>
                {location.pathname != '/' &&
                <Button onClick={goBack}>
                    <ArrowBackIcon />
                </Button>}
            </ButtonBack>
            <ButtonsContainer>
                <IconButton
                    type='minimize'
                    onClick={minimizeWindow}
                />
                <IconButton
                    type='maximize'
                    onClick={() => {
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
    height: ${props => props.location == '/' ? '90.4%' : '100%'};
    padding-bottom: ${props => props.location == '/' ? '0' : '1rem'};
   /* height: 90.4%; */
`
const Content = styled.div`
   height: 100%;
   -webkit-app-region: no-drag;
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
const ButtonBack = styled.div`
    & button {
        padding: .25rem .5rem .25rem .5rem;
        border-radius: 0 0 .25rem 0;
    }
    & button svg {
        width: 1.75rem;
    }
`