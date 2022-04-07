import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Car = ({ourCar}) => {
    //destruc. 
    const {id,title,price,description,img} = ourCar;
    return (
        <div className='g-4'>
            <Card>
                <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title>{title}</Card.Title>
                        <Card.Text>
                           {description}
                        </Card.Text>
                        <Card.Text>
                           <p className='text-danger'>{price}</p>
                        </Card.Text>
                        
                        <button className='btn btn-primary'>Purchase</button>
                  
                </Card.Body>
             </Card>
        </div>
    );
};

export default Car;