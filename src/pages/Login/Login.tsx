import React from 'react'
import { colors } from '../../service/theme';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import InputText from './components/InputText';

type Props = {}

const Login = (props: Props) => {
  return (
    <Container>
      <Logo src={logo} />
      <Content>
        <InputText />
        <Button>Entrar</Button>
      </Content>
    </Container>
  )
}

export default Login;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  flex: 1;
  height: 100%;
`
const Logo = styled.img`
  width: 40rem;
`
const Content = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  row-gap: 1rem;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  -webkit-app-region: no-drag;
`
const Button = styled.button`
  height: 60px;
  border-radius: .5rem;
  background-color: ${colors.primary};
  color: white;
  outline: none;
  border: 1px solid ${colors.primary};
  font-size: 1.25rem;
  cursor: pointer;
  transition: .3s;

  &:hover {
    background-color: ${colors.secondary};
    color: ${colors.primary};
  }
`