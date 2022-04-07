import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {id} = useParams()
    return (
        <div>
            <h1>Buy Your Car</h1>
            <h3>This is {id}</h3>
        </div>
    );
};

export default Purchase;