import React from 'react'
import { 
  Input, 
  InputAdornment, 
  IconButton,
  FormControl,
  InputLabel
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

type Props = {
    label: string,
    value: string,
    showPassword: boolean,
    setShowPassword: React.Dispatch<React.SetStateAction<boolean>>,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const InputPassword = (props: Props) => {

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }
    const handleClickShowPassword = () => {
        props.setShowPassword(!props.showPassword)
    }

  return (
    <FormControl variant="standard">
        <InputLabel htmlFor="standard-adornment-password">{props.label}</InputLabel>
        <Input  
            value={props.value}
            type={props.showPassword ? 'text' : 'password'}
            name='password'
            onChange={props.onChange}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                    >
                    {props.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
            }
        />
    </FormControl>
  )
}

export default InputPassword;