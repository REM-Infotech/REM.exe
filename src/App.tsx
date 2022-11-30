import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NoAuthRoutes from './routes/NoAuthRoutes';
import { createTheme, CssBaseline, Theme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import useAuthStore from './context/authStore';
import UserRoutes from './routes/UserRoutes';
import useCreateTheme from './hooks/useCreateTheme';

type Props = {}

const App = (props: Props) => {
  const { user } = useAuthStore(state => ({ user: state.user }))
  const themeOptions = useCreateTheme();
  const themeDefault: Theme = createTheme(themeOptions);

  return (
    <Container>
      <ThemeProvider theme={themeDefault}>
        <MemoryRouter initialEntries={['/']}>
          <CssBaseline />
          <Navbar>
            <>
              {!user && <NoAuthRoutes />}
              {user && <UserRoutes />}
            </>
          </Navbar>
          <Footer />
        </MemoryRouter>
      </ThemeProvider>
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