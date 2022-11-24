import React, { useState } from 'react'
import { colors } from '../../service/theme';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import InputText from './components/InputText';
import { loginSchema } from '../../service/yupSchemas';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ErrorMessage from '../../components/ErrorMessage';
import useLogin from '../../hooks/useLogin';
import Button from './components/Button';

type Props = {}

const Login = (props: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const loginAction = useLogin()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = async(
    dataForm: any, 
    e: any
  ) => {
    setErrorMessage(null)
    setIsLoading(true)
    const data = await loginAction(dataForm.token)
    setIsLoading(false)

    if(data.error) {
      setErrorMessage(data.error)
      return
    }
    console.log(data)
  }

  return (
    <Container>
      <Logo src={logo} />
      <Content onSubmit={handleSubmit(onSubmit)}>
        <ErrorMessage message={errors.token?.message.toString()} />
        <ErrorMessage message={errorMessage} />
        <InputText
          placeholder={'Digite sua chave de acesso aqui...'}
          registerForm={register('token')}
        />
        <Button
          title='Entrar'
          isLoading={isLoading}
        />
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
const Content = styled.form`
  flex: 1;
  width: 100%;
  max-width: 60rem;
  display: flex;
  row-gap: 1rem;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  -webkit-app-region: no-drag;
`