import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import ShowReview from '../Review/ShowReview';

const ShowReviews = () => {
    const [reviews,setReviews]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/addReview')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])

    return (
        <div className='my-3'>
            <h2 className="text-danger display-4 my-5">Customer Review</h2>
            <Container>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

            {
                 reviews.map(
                     review=><ShowReview
                     key={review._id}
                     review={review}
                    >

                    </ShowReview>
             )
             }

                    </Grid>
            </Container>
        </div>
    );
};

export default ShowReviews ;