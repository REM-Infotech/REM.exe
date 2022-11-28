import React, { useContext } from 'react'
import GenericTable from '../../../components/GenericTable'
import styled from 'styled-components'
import { BotSettingsContext } from '../../../context/botSettings'

type Props = {}

const ErrorTab = (props: Props) => {
    const { errorsLog, setErrorsLog } = useContext(BotSettingsContext);

    const tableHeads = [
        {
            label: 'Mensagem de erro',
        },
        {
            label: 'Horário'
        }
    ]
  return (
    <Container>
        <GenericTable
            heads={tableHeads}
            rows={errorsLog}
            emptyMessage='Nenhum erro encontrado'
        />
    </Container>
  )
}

export default ErrorTab;

const Container = styled.div``