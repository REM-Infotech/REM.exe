import React from 'react'
import styled from 'styled-components';

type Props = {
  value?: string,
  setValue?: React.Dispatch<React.SetStateAction<string>>,
  placeholder?: string,
  registerForm?: any,
}

const InputText = (props: Props) => {

  const handleChange = (e: any) => {
    props.setValue(e.target.value)
  }

  return (
    <TextField
        placeholder={props.placeholder}
        {...props.registerForm}
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

