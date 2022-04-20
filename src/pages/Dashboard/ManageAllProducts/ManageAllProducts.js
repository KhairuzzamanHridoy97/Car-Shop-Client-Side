import React,{useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const ManageAllProducts = () => {
    const [products,setProducts]= useState([]);

    useEffect(()=>{
        fetch('https://limitless-scrubland-11621.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    // deleteOrder
    const handleDeleteAllOrder = (id) => {
        console.log(id);
        const proceed = window.confirm("Are you sure, you want to delete?");
        if (proceed) {
            fetch(`https://limitless-scrubland-11621.herokuapp.com/products/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully");
                        const remainingOrders = products?.filter(product => product._id !== id);
                        setProducts(remainingOrders);
                    }
                });
            console.log(id);
        }
    };

    return (
        <div>
            <h2 className='text-danger m-2'>Total Products: {products.length}</h2>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Product Price</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.title}
              </TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="right">
                  <img src={product.img} style={{ height: '50px', width: '50px' }} alt="" />
              </TableCell>
              <TableCell align="right">
                  <button onClick={()=>handleDeleteAllOrder(product._id)} className="btn btn-danger">Delete</button>
              </TableCell>             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </div>
    );
};

export default ManageAllProducts;