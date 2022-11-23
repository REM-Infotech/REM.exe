import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import UserRouter from './routes/UserRoutes';
import { colors } from './service/theme';

type Props = {}

const App = (props: Props) => {
  return (
    <Container>
      <Navbar>
        <MemoryRouter initialEntries={['/']}>
          <UserRouter />
        </MemoryRouter>
      </Navbar>
      <Footer />
    </Container>
  )
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  -webkit-app-region: drag;
  user-select: none;
`