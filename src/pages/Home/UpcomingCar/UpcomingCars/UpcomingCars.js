import React,{useState} from 'react';
import Divider from '@mui/material/Divider';
import { Box, Container, Grid, Typography } from '@mui/material';
import offer1 from '../../../../images/latestOffer/offer1.jpg'
import offer2 from '../../../../images/latestOffer/offer2.jpg'
import offer3 from '../../../../images/latestOffer/offer3.jpg'
import offer4 from '../../../../images/latestOffer/offer4.jpg'
import offer5 from '../../../../images/latestOffer/offer5.jpg'
import offer6 from '../../../../images/latestOffer/offer6.jpg'
import { Card, Col, Row } from 'react-bootstrap';
import UpComCar from '../UpComCar/UpComCar';


const offers =[
    {
        "name":"Toyota",
        "img":offer1
    },
    {
        "name":"Ferrai",
        "img":offer2
    },
    {
        "name":"Corolla",
        "img":offer3
    },
    {
        "name":"Alion",
        "img":offer4
    },
    {
        "name":"Buggati",
        "img":offer5
    },
    {
        "name":"Mahindra",
        "img":offer6
    },
]

const UpComingCars = () => {

    return (
 
            <Container>
                <Divider />
                <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography variant='h3' sx={{fontWeight:500,my:5,color:'success.main'}} component="div">
                    Our Latest Offers
                </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         {
             offers.map(offer=><UpComCar
             offer={offer}
             key={offer.name}
             >

             </UpComCar>)
         }
        </Grid>
        </Container>
      </Box>
            </Container>
    );
};

export default UpComingCars;