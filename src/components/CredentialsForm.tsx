import React, { useState, useContext } from 'react'
import { colors } from '../service/theme';
import styled from 'styled-components';
import { Credentials } from '../types/botSettings';
import { 
  TextField, 
} from '@mui/material';
import { BotSettingsContext } from '../context/botSettings';
import InputPassword from './InputPassword';

type Props = {
}

const CredentialsForm = (props: Props) => {
  const { credentials, setCredentials } = useContext(BotSettingsContext)
  const [showPassword, setShowPassword] =  useState<boolean>(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let newCredentials: Credentials = {...credentials}
    newCredentials[e.target.name] = e.target.value;
    
    setCredentials(newCredentials)
  }

  return (
    <Container>
        <Title>Credenciais</Title>
        <Form>
          <TextField 
            label="Login" 
            variant="standard"
            value={credentials.login}
            onChange={onChange}
            name='login'
          />
          <InputPassword
            label='Senha'
            value={credentials.password}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            onChange={onChange}
          />
        </Form>
    </Container>
  )
}

export default CredentialsForm;

const Container = styled.div`
  font-size: 14px;
`
const Title = styled.div`
    background-color: ${colors.primary_dark};
    padding: 1rem;
    border-radius: .25rem .25rem 0 0;
    text-align: center;
`
const Form = styled.form`
  background-color: white;
  padding: 1rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  border-radius: 0 0 .25rem .25rem;
`