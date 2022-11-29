import { FormControl, FormHelperText, InputLabel, NativeSelect } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { colors } from '../../../../service/theme';
import styled from 'styled-components'

type Props = {
    data: string | null,
    setData: React.Dispatch<React.SetStateAction<string | null>>,
}

const typesEncerramentos = ['Acordo', 'Procedente','Parcialmente Procedente','Improcedente', 'Extinto sem resolução do mérito', 'Extinto por desistência da parte', 'Extinto por ausência da parte']

const SelectType = (props: Props) => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        props.setData(e.target.value)
    }

    useEffect(() => {
        if(props.data) {
            setErrorMessage(null)

            return
        }

        setErrorMessage('Escolha um tipo válido')
    },[props.data])

  return (
    <Container>
        <Title>Tipo de encerramento</Title>
        <Form>
            <FormControl 
                fullWidth
                error={Boolean(errorMessage)}
            >
                {/* <InputLabel 
                    variant="standard" 
                    htmlFor="type"
                >
                    Tipo de encerramento
                </InputLabel> */}
                <NativeSelect
                    inputProps={{
                        name: 'type',
                        id: 'type',
                    }}
                    onChange={onChange}
                    defaultValue={props.data? props.data : 0}
                >
                    <option value={0} disabled>Escolha uma opção...</option>
                    {typesEncerramentos.map(type => 
                        <option 
                            value={type}
                            key={type} 
                        >
                            {type}
                        </option> 
                    )}
                </NativeSelect>
                <FormHelperText>{errorMessage}</FormHelperText>
            </FormControl>
        </Form>
    </Container>
  )
}

export default SelectType;

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
  margin: 0;
`