import React, { useEffect, useState } from 'react';
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
            <h3>Purchase  Your Car</h3>
            {
                ourCars.map(
                    ourCar=> <Car
                    ourCar={ourCar}
                    >

                    </Car>
                )
            }
        </div>
    );
};

export default Cars;