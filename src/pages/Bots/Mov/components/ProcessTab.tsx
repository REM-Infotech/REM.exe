import React, { useState, useEffect } from 'react';
import XLSXupload from '../../../../components/XLSXupload';
import styled from 'styled-components';
import ProcessTable from '../../../../components/ProcessTable';

type Props = {}

const ProcessTab = (props: Props) => {
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    console.log(file)
  }, [file])
  

  return (
    <Container>
        <LeftContainer>
          <XLSXupload
            file={file}
            setFile={setFile}
          />
        </LeftContainer>
        <TableContainer>
            <ProcessTable />
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
  width: 20rem;
`