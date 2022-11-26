import React from 'react'
import { colors } from '../service/theme';
import styled from 'styled-components';
import { Credentials } from '../types/botSettings';

type Props = {
  credentials: Credentials | null,
  setCredentials: React.Dispatch<React.SetStateAction<Credentials>>
}

const CredentialsForm = (props: Props) => {
  return (
    <Container>
        credenciais
        {props.credentials.login}
    </Container>
  )
}

export default CredentialsForm;

const Container = styled.div`
    background-color: ${colors.primary_dark};
`