import React, { useState, useContext } from 'react'
import { colors } from '../service/theme';
import styled from 'styled-components';
import { 
  TextField, 
} from '@mui/material';
import { BotSettingsContext } from '../context/botSettings';
import SelectCourt from './SelectCourt';
import { courtsList } from '../constants/courts';

type Props = {}

const DataParteForm = (props: Props) => {
    const { 
        parteName, 
        setParteName,
        courtData,
        setCourtData
    } = useContext(BotSettingsContext)
    const [showPassword, setShowPassword] =  useState<boolean>(false)

    const onChangeParteName = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setParteName(e.target.value)
    }

  return (
    <Container>
        <Title>Dados da parte</Title>
        <Form>
          <TextField 
            label="Nome da parte" 
            variant="standard"
            value={parteName? parteName : ''}
            onChange={onChangeParteName}
            name='name'
          />
          <SelectCourt
            courtsList={courtsList}
            courtData={courtData}
            setCourtData={setCourtData}
          />
        </Form>
    </Container>
  )
}

export default DataParteForm;

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