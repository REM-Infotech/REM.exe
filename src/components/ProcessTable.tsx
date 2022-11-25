import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  userSelect: 'text',
  '&:nth-of-type(odd)': {
    backgroundColor: 'white',
  },
  '&:nth-of-type(even)': {
    backgroundColor: 'white',
  },
  '&:hover': {
    backgroundColor: theme.palette.grey[200]
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  npu: string,
  status: string,
) {
  return { npu, status };
}

const rows = [
  createData('0600862-10.2022.8.04.6001', 'Aguardando...'),
  createData('0600561-10.2022.8.04.6001', 'Aguardando...'),
  createData('0600061-10.2022.8.04.6001', 'Aguardando...'),
  createData('0600364-10.2022.8.04.6001', 'Aguardando...'),
  createData('0600432-10.2022.8.04.6001', 'Aguardando...'),
  createData('0600433-10.2022.8.04.6001', 'Aguardando...'),
  createData('0600434-10.2022.8.04.6001', 'Aguardando...'),
  createData('0600435-10.2022.8.04.6001', 'Aguardando...'),
  createData('0600436-10.2022.8.04.6001', 'Aguardando...'),
  createData('0600437-10.2022.8.04.6001', 'Aguardando...'),
  createData('0600438-10.2022.8.04.6001', 'Aguardando...'),
  createData('0600439-10.2022.8.04.6001', 'Aguardando...'),
  createData('0600410-10.2022.8.04.6001', 'Aguardando...'),
  createData('0600411-10.2022.8.04.6001', 'Aguardando...'),
  createData('0600412-10.2022.8.04.6001', 'Aguardando...'),
];

const ProcessTable = () => {
  return (
    <TableContainer component={Paper}
      sx={{
        backgroundColor: 'transparent',
      }}
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Processo</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.npu}>
              <StyledTableCell component="th" scope="row">
                {row.npu}
              </StyledTableCell>
              <StyledTableCell align="left">{row.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProcessTable;