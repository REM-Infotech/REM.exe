import React from 'react'
import { colors } from '../service/theme';
import styled from 'styled-components';
import { Paper } from '@mui/material';

type Props = {
    title: string,
    children: React.ReactNode
}

const WidgetStyled = (props: Props) => {
  return (
    <Container>
        <Title>{props.title}</Title>
        <Content>
            {props.children}
        </Content>
    </Container>
  )
}

export default WidgetStyled;

const Container = styled.div`
`
const Title = styled.div`
    background-color: ${colors.primary_dark};
    color: ${colors.secondary};
    padding: 1rem;
    border-radius: .25rem .25rem 0 0;
    text-align: center;
`
const Content = styled.div`
  background-color: white;
  padding: 1rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  border-radius: 0 0 .25rem .25rem;
  margin: 0;
`