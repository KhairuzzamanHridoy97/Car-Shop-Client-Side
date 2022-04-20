import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import {Link} from "react-router-dom";
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import './Purchase.css';


// purchase page making
const Purchase = () => {
    const { productId } = useParams({});
    const [product, setProduct] = useState({});

    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        fetch('https://limitless-scrubland-11621.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                const orderProduct = data.find(singleOrder => singleOrder._id == productId)
                setProduct(orderProduct);
                // reset(orderPackage);
            })
    }, [productId]);

    const onSubmit = data => {
        data.email = user?.email;
        // data.status = 'Pending';
        fetch('https://limitless-scrubland-11621.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (data) {
                    alert('Ordered successfully');
                    reset();
                }
            });
        console.log(data);
    }
    return (
        <>
           <Navigation></Navigation>
        <Container>

            <div className="review-section">
                <div className="row">
                    <div class="card col-lg-6 col-sm-12 item-part">
                        <img src={product.img} class="details-image" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title display-6 heading-text text-danger">{product.title}</h5>
                            <p class="card-text ">{product.description}</p>
                            <h3 class="card-text text-danger">{product.price} $</h3>
                        </div>
                    </div>

                    {/* Form Start here */}
                    <div className="col-lg-6 col-sm-12 mb-5">
                        <h1 className="mt-5 text-center text-danger">Provide Your Information for Purchase</h1>
                        <div className="login-box w-75 m-auto">
                            <div className="package-box border border d-flex justify-content-center align-items-center p-5">
                                <div className="login-form">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input defaultValue={product?.title}
                                            {...register("title", { required: true })}
                                            placeholder="Products Name"
                                            className="p-2 m-2 w-100"
                                        />
                                        <br />
                                        <input defaultValue={user?.displayName}
                                            {...register("name", { required: true })}
                                            placeholder="Name"
                                            className="p-2 m-2 w-100"
                                        />
                                        <br />
                                        <input defaultValue={user?.email}
                                            {...register("email", { required: true })}
                                            placeholder="Email"
                                            className="p-2 m-2 w-100"
                                        />
                                        <br />
                                        <input defaultValue={product?.price}
                                            {...register("price", { required: true })}
                                            placeholder="Price"
                                            className="p-2 m-2 w-100"
                                        />
                                        <br/>
                                        <input
                                            {...register("date")}
                                            placeholder="Date"
                                            type="date"
                                            className="p-2 m-2 w-100"
                                        />
                                        <br />
                                        <input
                                            {...register("address", { required: true })}
                                            placeholder="Address"
                                            className="p-2 m-2 w-100"
                                        />
                                        <br />
                                        <input
                                            {...register("phone", { required: true })}
                                            placeholder="Phone Number"
                                            className="p-2 m-2 w-100"
                                        />
                                        <br />

                                        {errors.exampleRequired && <span>This field is required</span>}

                                        <input type="submit" value="Purchase" className="btn btn-outline-success w-75" />
                                        <br /> <br />
                                        <Link to='/dashboard'>
                                        <button className="btn btn-outline-danger">Check Your Dashboard</button>
                                        </Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
           <Footer></Footer>
        </>
    );
};

export default Purchase;