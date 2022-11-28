import React from 'react';
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
    heads: any[];
    rows: any[];
    emptyMessage: string;
}

const GenericTable = (props: Props) => {
  return (
    <TableContainer component={Paper}
      sx={{
        backgroundColor: 'transparent',
      }}
    >
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {props.heads.map((row, index) => 
                <StyledTableCell key={index}>
                    {row.label}
                </StyledTableCell>
            )}

          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.length ? props.rows.map((row, index) => (
            <StyledTableRow key={index}>
                {row.cells.map((cell: any) => 
                    <StyledTableCell key={cell.label}>
                        {cell.label}
                    </StyledTableCell>    
                )}
            </StyledTableRow>
          )) :
          <StyledTableRow>
              <StyledTableCell>
                {props.emptyMessage}
              </StyledTableCell>
                {props.heads.map((_, index) => {
                    if(index == 0) return
                    
                    return (
                        <StyledTableCell key={index} />
                    )
                })}
          </StyledTableRow>
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default GenericTable;