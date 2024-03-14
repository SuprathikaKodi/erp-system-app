import * as React from 'react';
import './Orders.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(name,orderid,date,status) {
  return {name,orderid,date,status };
}

const rows = [
    createData('Sarah'  ,'OROD001',' March 10, 2024','Pending' ),
    createData('John'   ,'OROD002',' March 13, 2024','Approved'),
    createData('Emily'  ,'OROD003',' March 15, 2024','Approved'),
    createData('Michael','OROD004',' March 11, 2024','Delivered'),
    createData('Olivia' ,'OROD005',' March 7, 2024' ,'Pending' ),
];

const makeStyle = (status) => {
    if (status === 'Approved') {
        return {
            background: 'rgb(145 254 159 / 47%)',
            color: 'green',
        };
    } else if (status === 'Pending') {
        return {
            background: '#ffadad8f',
            color: 'red',
        };
    } else {
        return {
            background: '#59bfff',
            color: 'white',
        };
    }
};


export default function BasicTable() {
  return (
    <>
    <h1>Orders  <button>Add</button></h1>
    <div className="Table">

    <TableContainer component={Paper}
    style={{boxshadow: '0px 13px 20px 0px #80808029'} }
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customer Name</TableCell>
            <TableCell align="left">Order ID</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Status</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.orderid}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">
                <span className="status" style={makeStyle(row.status)}>{row.status}</span>
              </TableCell>
              
              <TableCell align="left" >
        <button>Details</button>
        <button >Delete</button>
      </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
  );
}