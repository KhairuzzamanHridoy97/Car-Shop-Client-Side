import { Card, CardContent, Grid, Box,Rating, Typography } from '@mui/material';
import React from 'react';
import './ShowReview.css';

const ShowReview = ({showReview}) => {
    const { name, email, review, rating } = showReview;
    return (
        <Grid item xs={4} sm={4} md={4}>        
        <Card sx={{ minWidth: 275 ,boxShadow: 3,border:'2px solid gray'}}  className='review'>
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
            <Typography variant="body2" sx={{ my:1 }} >
                 {email}
            </Typography>
          <Typography variant="body2" sx={{ my:1 }} className="text-danger reviewText" >
             {review}
            </Typography>
        <Typography variant="body2" sx={{ my:1 }}  >
                <Rating name="read-only" value={rating} readOnly />
            </Typography>
        
            
            
        </CardContent>
          </Card>
         </Grid>
    );
};

export default ShowReview;