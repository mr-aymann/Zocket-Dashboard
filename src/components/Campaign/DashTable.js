import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Switch from '@mui/material/Switch';
import axios from 'axios';

const columns = [
  {field: '_id', headerName: 'ID', width: 70 },
  {field:"img",headerName:"Image",width:100,renderCell: (params) => ( 
    <img src={params.value} height="40" width="40" alt=""/>)},
  {field:"product",headerName:"Product",width:150},
  {field:"createdAt",headerName:"DateStart",width:150},
  {field:"campaingEnd",headerName:"DateEnd",width:150},
  {field:"budget",headerName:"Budget",width:150},
  { field: 'Location', headerName: 'Location', width: 130 },
  {field:"platform",headerName:"Platform",width:150},
  {field:"status",headerName:"Status",width:150},
  
 
];


const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];




  




function DashTable(datas) {

const [data, setData] = useState([]);

useEffect(  () => {
    async function fetchData() {
    await axios.get("http://localhost:5000/api/campainList")
      .then((res) => {
         setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      }
      )
  }
  fetchData();
  
}, []);
console.log(datas);
  return (

      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
         rows={data}
         getRowId={(row) => row._id}
         columns={columns}
         pageSize={5}   
         rowsPerPageOptions={[5]}
         checkboxSelection
       />
       
 
  </div>
  )
}

export default DashTable