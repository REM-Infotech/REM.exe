import React from 'react';
import styled from 'styled-components';
import ProcessTable from '../../../../components/ProcessTable';

type Props = {}

const ProcessTab = (props: Props) => {
  return (
    <Container>
        <LeftContainer>Fuck u, aye mate</LeftContainer>
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