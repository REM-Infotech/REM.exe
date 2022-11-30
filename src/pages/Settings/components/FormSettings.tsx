import { Button, TextField } from '@mui/material'
import React from 'react'
import WidgetStyled from '../../../components/WidgetStyled'
import styled from 'styled-components'
import useGetSettings from '../../../hooks/useGetSettings'
import useSetSettings from '../../../hooks/useSetSettings'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { settingsSchema } from '../../../service/yupSchemas'

type Props = {}

const FormSettings = (props: Props) => {
    const { fontSize } = useGetSettings()
    const setSettings = useSetSettings();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(settingsSchema),
    });
    const onSubmit = (data: SettingsValues) => {
        setSettings(data)
    }

  return (
    <WidgetStyled
        title='Configurações'
    >
        <Form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                label="Tamanho da fonte"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="standard"
                defaultValue={fontSize}
                {...register('fontSize')}
                helperText={errors.fontSize?.message.toString()}
                error={Boolean(errors.fontSize?.message)}
            />
            <Button 
                variant="contained"
                type='submit'
            >
                Salvar
            </Button>
        </Form>
    </WidgetStyled>
  )
}

export default FormSettings;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`