import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Car from '../Car/Car';

const Cars = () => {
    const [ourCars,setOurCars] = useState([])
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>setOurCars(data))
    },[])
    return (
        <div>
            <Navigation></Navigation>
            <div className='mt-5'>

            <h3 className='display-5 text-success'>Purchase  Your Car</h3>
            <Container>
                <Row xs={1} md={3}>
                    {
                        ourCars.map(
                            ourCar=> <Car
                            ourCar={ourCar}
                            key={ourCar.id}
                            >
                            </Car>
                        )
                    }
                </Row>
            </Container>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Cars;