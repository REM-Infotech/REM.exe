import React from 'react'
import { colors } from '../../../service/theme';
import styled, { css } from 'styled-components';
import { CircularProgress } from '@mui/material';

type Props = {
    title: string,
    isLoading?: boolean
}

const Button = (props: Props) => {
  return (
    <Container
        disabled={props.isLoading}
    >
        {props.isLoading ? <CircularProgress color="secondary" /> : props.title}
    </Container>
  )
}

export default Button;

const Container = styled.button((props) => css`
  height: 60px;
  border-radius: .5rem;
  background-color: ${colors.primary};
  color: white;
  outline: none;
  border: 1px solid ${colors.primary};
  cursor: pointer;
  transition: .3s;
  opacity: ${props.disabled? '.5' : '1'};
  font-size: 1.25rem;

  &:hover {
    background-color: ${props.disabled? colors.primary : colors.secondary};
    color: ${props.disabled? 'white' : colors.primary};
  }
`)