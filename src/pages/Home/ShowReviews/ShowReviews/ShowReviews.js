import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import ShowReview from '../ShowReview/ShowReview';

const ShowReviews = () => {
    const [reviews,setReviews]= useState([]);

    useEffect(()=>{
        fetch('https://limitless-scrubland-11621.herokuapp.com/addReview')
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
                     showReview=><ShowReview
                     key={showReview._id}
                     showReview={showReview}
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