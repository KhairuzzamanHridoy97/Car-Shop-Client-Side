import { ClassNames } from '@emotion/react';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ourCar}) => {
    const {id,title,img,description,price}= ourCar ; 
    return (
        < >
        <div className='g-3'>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        <p className='text-danger'>Price: {price} </p>
                    </Card.Text>
                    <Link to={`/cars/${id}`}>
                        <button className='btn btn-primary'>Purchase</button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
        </>
    );
};

export default Product;