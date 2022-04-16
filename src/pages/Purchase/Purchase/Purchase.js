import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Purchase = () => {
    const {id} = useParams();
    const {user} = useAuth();

    const[product,setProduct]= useState([])

    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])

    return (
        <div>
            <h1>Buy Your Car</h1>
            <h3>This is {id}</h3>
            <h5>Product Name {product.name}</h5>
        </div>
    );
};

export default Purchase;