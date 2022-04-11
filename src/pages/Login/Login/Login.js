import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const Login = () => {

    const [loginData,setNewLoginData]= useState([])

    const handleOnChange=(e)=>{
        const field = e.target.name;
        const value= e.target.value
        const newLoginData= {...loginData}
        newLoginData[field]=value;
        console.log(field,value)
    }

    const handleLoginSubmit =(e)=>{
        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item  sx={12} md={6}>
                <Typography variant="h3" sx={{mt:5}} gutterBottom component="div">
                    Login
                </Typography>
                <form onSubmit={handleLoginSubmit}>
                <TextField 
                sx={{width:"75%",m:1}}
                id="standard-basic" 
                label="Email"
                type="email"
                name="email"
                onChange={handleOnChange} 
                variant="standard" 
                />
                <TextField 
                 sx={{width:"75%",m:1}}
                id="standard-basic" 
                label="Password"
                type="password"
                name="passoword"
                onChange={handleOnChange}  
                variant="standard" 
                /> 
                <Button sx={{width:"50%",m:1}} variant='contained' color="success">Login</Button>
  
                </form> 
                </Grid>
                <Grid item sx={12} md={6}>

                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;