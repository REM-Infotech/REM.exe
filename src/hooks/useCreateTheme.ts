import { ThemeOptions } from "@mui/material";
import { colors } from "../service/theme";
import useSettingsStore from "../context/settingsStore";
import { red } from "@mui/material/colors";

const useCreateTheme = () => {
    const { fontSize } = useSettingsStore(state => ({ fontSize: state.fontSize }))
    const theme: ThemeOptions = {
        palette: {
            primary: {
              main: colors.primary,
              dark: colors.primary_dark,
            },
            secondary: {
              main: colors.secondary,
              dark: colors.secondary_dark
            },
            error: {
              main: red.A400,
            },
          },
          typography: {
            fontFamily: [
              '"Roboto"',
              'sans-serif'
            ].join(','),
            fontSize: fontSize
        }
    }

    return theme
}

export default useCreateTheme;