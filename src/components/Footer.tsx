import React from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

type Props = {}

const Footer = (props: Props) => {
  const location = useLocation()

  if(location.pathname != '/') return 
  
  return (
    <Container>
        <p>Desenvolvido por <a href="www.reminfotech.net.br/">REM Infotech</a></p>
    </Container>
  )
}

export default Footer;

const Container = styled.footer`
    background-color: black;
    height: 3rem;
    opacity: .5;
    display: flex;
    justify-content: center;
    align-items: center;

    & a {
        color: white;
        text-decoration: none;
        font-weight: bold;
    }
`