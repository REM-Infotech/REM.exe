import { Alert, AlertTitle } from '@mui/material'
import React from 'react'

type Props = {
    message: string,
}

const ErrorMessage = (props: Props) => {
    if(!props.message) return 

  return (
    <Alert 
        variant="filled"
        severity="error"
    >
        {/* <AlertTitle>Erro</AlertTitle> */}
        {props.message}
    </Alert>
  )
}

export default ErrorMessage