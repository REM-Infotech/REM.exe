import React from 'react'
import { leftMenuActives } from '../constants/leftMenuActives';
import styled, { css } from 'styled-components';
import Logo from './Logo';
import { colors } from '../service/theme';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { links } from '../constants/link';
import { useNavigate } from 'react-router-dom';

type Props = {
    children: React.ReactNode,
    active?: string | null
}

type ListItemProps = {
    name: string,
    icon?: React.ReactNode,
    isActive?: boolean,
    link: string,
    id?: string | null,
}

type ListMenuProps = {
    active?: string | null
}

const ListItem = (props: ListItemProps) => {
    const navigate = useNavigate();

    return (
        <LisItemElement
            isActive={props.isActive}
            onClick={() => navigate(props.link)}
            id={props.id}
        >
            {props.icon}
            <span>{props.name}</span>
        </LisItemElement>
    )
}

const ListMenu = (props: ListMenuProps) => {
    return (
        <ListMenuElement>
            <ListItem
                name='Meus robôs'
                isActive={props.active == leftMenuActives.bot}
                icon={<SmartToyOutlinedIcon />}
                link={links.home}
            />
            <ListItem
                name='Configurações'
                isActive={props.active == leftMenuActives.settings}
                icon={<SettingsOutlinedIcon />}
                link={links.settings}
            />
            <ListItem
                name='Sair'
                isActive={props.active == leftMenuActives.logout}
                icon={<LogoutIcon />}
                link={links.logout}
                id='logout'
            />
        </ListMenuElement>
    )
}

const LeftMenu = (props: Props) => {
  return (
    <Container>
        <Menu>
            <Logo />
            <ListMenu active={props.active} />
        </Menu>
        <Content className='scroll_enabled'>
            {props.children}
        </Content>
    </Container>
  )
}

export default LeftMenu;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: flex-start;
    height: 100%;
    column-gap: 1rem;
    padding: 0;
    -webkit-app-region: no-drag;
`
const Menu = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    padding-left: 1rem;
    width: 20vw;
    -webkit-app-region: drag;
    row-gap: 2rem;
`
const Content = styled.div`
    overflow-y: auto;
    overflow-x: hidden;
    width: 80vw;
    padding-right: 1rem;
    padding-top: 1rem;
    padding-bottom: 1.5rem;
`
const ListMenuElement = styled.div`
    width: 100%;
    text-align: center;
    -webkit-app-region: no-drag;
    display: flex;
    flex-direction: column;
    align-content: stretch;
    align-items: stretch;
    justify-content: flex-start;
    row-gap: .25rem;
`
const LisItemElement = styled.div<{isActive: boolean}>((props) => css`
    padding: 0.5rem 0 0.5rem 1rem;
    border-radius: 0.25rem;
    background-color: ${props.isActive? colors.secondary : 'transparent'};
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    column-gap: 0.5rem;
    color: ${props.isActive? colors.primary : colors.secondary};

    &:hover {
        background-color: ${props.isActive? colors.secondary : 'rgba(255,255,255,0.1)'};
    }
`) 