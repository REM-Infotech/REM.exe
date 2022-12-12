import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ProcessRow } from '../service/readXLSX';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.dark,
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

interface Props {
  rows: ProcessRow[] 
}

const ProcessTable = (props: Props) => {
  return (
    <TableContainer component={Paper}
      sx={{
        backgroundColor: 'transparent',
      }}
    >
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Processo</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.length ? props.rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.npu}
              </StyledTableCell>
              <StyledTableCell align="left">{row.status}</StyledTableCell>
            </StyledTableRow>
          )) :
          <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Nenhum processo adicionado
              </StyledTableCell>
              <StyledTableCell align="left">
                
              </StyledTableCell>
          </StyledTableRow>
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProcessTable;