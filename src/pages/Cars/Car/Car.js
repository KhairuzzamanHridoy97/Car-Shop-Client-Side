import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './car.css';

const Car = ({ourCar}) => {
    //destruc. 
    const {id,title,price,description,img} = ourCar;
    return (
        <div className='g-4'>
            <Card >
                <Card.Img variant="top" src={img} />
                    <Card.Body className='carCard'>
                    <Card.Title>{title}</Card.Title>
                        <Card.Text>
                           {description}
                        </Card.Text>
                        <Card.Text>
                           <p className='text-danger'>{price}</p>
                        </Card.Text>
                        <Link to={`/purchase/${id}`}>
                             <button className='btn btn-primary'>Purchase</button>
                        </Link>
                  
                </Card.Body>
             </Card>
        </div>
    );
};

export default Car;