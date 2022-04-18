import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [ourCars,setOurCars] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setOurCars(data))
    })
    return (
        <div>
            <h2 className='my-5 display-4 text-bold fw-bold text-danger'>Our Cars</h2>
            <Container>
            <Row xs={1} md={3} className="g-4">
                {
                    ourCars.slice(0,6).map(
                        ourCar=> <Product 
                        ourCar={ourCar}
                        key={ourCar._id}
                        >

                        </Product>
                    )
                }
            </Row>
            </Container>
        </div>
    );
};

export default Products;