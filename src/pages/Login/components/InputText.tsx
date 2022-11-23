import React from 'react'
import styled from 'styled-components';

type Props = {}

const InputText = (props: Props) => {
  return (
    <TextField
        placeholder='Digite sua chave de acesso aqui...'
    ></TextField>
  )
}

export default InputText;

const TextField = styled.input`
    width: 100%;
    padding: 1rem;
    border-radius: .5rem;
    outline: none;
    border: none;
    font-size: 1.5rem;
`

