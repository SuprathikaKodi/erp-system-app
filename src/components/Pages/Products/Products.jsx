import * as React from 'react';
import './Products.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name,productid,category,price, stock) {
  return {name,productid,category,price, stock };
}

const rows = [
  createData('WidgetX'      ,'PROD001','Electronics'       ,'₹7499.25' ,5),
  createData('Blender'      ,'PROD002','Kitchen Appliances', '₹3749.62',4),
  createData('YogaMat'      ,'PROD003','Sports & Fitness'  ,'₹2249.75' ,3),
  createData('PowerBank'    ,'PROD004','Electronics'       ,'₹2999.62' ,5),
  createData('Running Shoes','PROD005','Footwear'          ,'₹5999.25' ,3),
];

export default function BasicTable() {
  return (
    <>
    <h1>Products  <button>Add</button></h1>
    
    <div className="Table">

    <TableContainer component={Paper}
    style={{boxshadow: '0px 13px 20px 0px #80808029'} }
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Product ID</TableCell>
            <TableCell align="left">Category</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Stock</TableCell>
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
              <TableCell align="left">{row.productid}</TableCell>
              <TableCell align="left">{row.category}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left">{row.stock}</TableCell>
              <TableCell align="left">
        <button>Edit</button>
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
