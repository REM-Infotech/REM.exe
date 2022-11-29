import React, { useState, useEffect, useContext } from 'react';
import XLSXupload from '../../../../components/XLSXupload';
import styled from 'styled-components';
import ProcessTable from '../../../../components/ProcessTable';
import { Button } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { ProcessRow, readXLSX } from '../../../../service/readXLSX';
import { ErrorLog } from '../../../../types/process';
import CredentialsForm from '../../../../components/CredentialsForm';
import { BotSettingsContext } from '../../../../context/botSettings';
import { BotSettingsContextType } from '../../../../types/botSettings';
import FolderSelect from '../../../../components/FolderSelect';
import SelectType from './SelectType';

type Props = {}

const ProcessTab = (props: Props) => {
  const { 
    credentials, 
    setCredentials,
    file,
    setFile,
    folder,
    setFolder,
    typeEncerramento,
    setTypeEncerramento,
    rows,
    setRows,
    errorsLog,
    setErrorsLog 
  } = useContext(BotSettingsContext) as BotSettingsContextType;

  const fetchData = async(file: File) => {
    const data = await readXLSX(file)

    return data
  }
  useEffect(() => {
    if(!file) return

    fetchData(file)
    .then(res => {
      setRows(res.map((row, index) => {
        if(index == 0) return
        return {
          npu: row[0].toString(),
          status: 'Aguardando...'
        }
      }).filter(row => row))
    })
    .catch(e => console.log(e))
  }, [file])
  

  return (
    <Container>
        <LeftContainer>
          <XLSXupload
            file={file}
            setFile={setFile}
          />
          <SelectType
            data={typeEncerramento}
            setData={setTypeEncerramento}
          />
          <CredentialsForm />
          <ButtonContainer>
            <Button 
              variant='contained'
              startIcon={<PowerSettingsNewIcon />}
            >
              Ligar robô
            </Button>
          </ButtonContainer>
        </LeftContainer>
        <TableContainer>
            <ProcessTable rows={rows} />
        </TableContainer>
    </Container>
  )
}

export default ProcessTab;

const Container = styled.div`
  display: flex;
  column-gap: 1rem;
`
const TableContainer = styled.div`
  flex: 1;
`
const LeftContainer = styled.div`
  width: 17rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`
const ButtonContainer = styled.div`
  position: fixed;
  bottom: 1rem;
  width: inherit;

  & button {
    width: 100%;
    height: 2.5rem;
  }
`