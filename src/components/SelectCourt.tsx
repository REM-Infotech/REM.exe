import { FormControl, FormHelperText, InputLabel, NativeSelect } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { TCourtData } from '../types/botSettings'

type Props = {
    courtData: TCourtData,
    setCourtData: React.Dispatch<React.SetStateAction<TCourtData>>,
    courtsList: string[]
}

const SelectCourt = (props: Props) => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const [name, id] = e.target.value.split(' || ') 
        const courtData: TCourtData = {
            name: name,
            id: id
        }
        props.setCourtData(courtData)
        console.log(courtData)
    }

    useEffect(() => {
        if(props.courtData) {
            setErrorMessage(null)

            return
        }

        setErrorMessage('Escolha uma vara válida')
    },[props.courtData])

  return (
    <FormControl 
        fullWidth
        error={Boolean(errorMessage)}
    >
        <InputLabel 
            variant="standard" 
            htmlFor="court-data"
        >
        Vara
        </InputLabel>
        <NativeSelect
            inputProps={{
                name: 'courtData',
                id: 'court-data',
            }}
            onChange={onChange}
            defaultValue={props.courtData? `${props.courtData.name} || ${props.courtData.id}` : 0}
        >
            <option value={0} disabled>Escolha uma vara...</option>
            {props.courtsList.map(court => 
                <option 
                    value={court}
                    key={court.split(' || ')[1]}
                >
                    {court.split(' || ')[0]}
                </option>
            )}
        </NativeSelect>
        <FormHelperText>{errorMessage}</FormHelperText>
    </FormControl>
  )
}

export default SelectCourt