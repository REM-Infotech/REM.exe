import React, { useState, useContext } from 'react'
import { colors } from '../service/theme';
import styled from 'styled-components';
import { Credentials } from '../types/botSettings';
import { 
  TextField, 
  Input, 
  InputAdornment, 
  IconButton,
  FormControl,
  InputLabel
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { BotSettingsContext } from '../context/botSettings';

type Props = {
  credentials: Credentials | null,
  setCredentials: React.Dispatch<React.SetStateAction<Credentials>>
}

const CredentialsForm = (props: Props) => {
  const { credentials, setCredentials } = useContext(BotSettingsContext)
  // TODO: remove props for credentials

  const [data, setData] =  useState<any>({
    login: null,
    password: null,
    showPassword: false
  })

  const handleClickShowPassword = () => {
    setData({
      ...data,
      showPassword: !data.showPassword,
    });
  };
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Container>
        <Title>Credenciais</Title>
        <Form>
          <TextField label="Login" variant="standard" />
          <FormControl variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
            <Input  
              type={data.showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {data.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        
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