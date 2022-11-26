import { red } from '@mui/material/colors';
import { createTheme, Theme } from '@mui/material/styles';

export const colors = {
  primary: '#862a7c',
  primary_light: '#d4afd1',
  primary_dark: '#38144b',
  secondary: '#FFFFFF'
}
const theme: Theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      dark: colors.primary_dark
    },
    secondary: {
      main: colors.secondary,
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: [
      '"Roboto"',
      'sans-serif'
    ].join(',')
  }
});

export default theme;