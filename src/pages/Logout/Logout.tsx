import { Backdrop, CircularProgress } from '@mui/material';
import React, { useEffect } from 'react'
import useLogout from '../../hooks/useLogout';
import styled from 'styled-components';

type Props = {}

const Logout = (props: Props) => {
  const logout = useLogout();

  useEffect(() => {
    logout()
  },[])

  return (
    <Container>
        <Backdrop
          sx={{ 
            color: '#fff',
            display: 'flex',
            flexDirection: 'column'
          }}
          open
        >
          <Title>Fazendo logout...</Title>
          <CircularProgress color="inherit" />
        </Backdrop>
    </Container>
  )
}

export default Logout;

const Container = styled.div``
const Title = styled.div`
  font-size: 2rem;
`