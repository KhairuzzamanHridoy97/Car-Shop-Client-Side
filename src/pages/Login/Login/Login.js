import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/cars/audi2.png';

const Login = () => {

    const [loginData,setLoginData]= useState([])

    const handleOnChange=(e)=>{
        const field = e.target.name;
        const value= e.target.value
        const newLoginData= {...loginData}
        newLoginData[field]=value;
        // setLoginData(newLoginData)
        console.log(field,value)
    }

    const handleLoginSubmit =(e)=>{
        e.preventDefault()
    }
    return (
        
        <Container>
            <Grid container sx={{ mt: 8 }}  spacing={2}>
                <Grid item  sx={12} md={6}>
                <Typography variant="h3"  gutterBottom component="div">
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
                <Button sx={{width:"50%",m:1}} variant='contained' color="success">Login</Button> <br />
                <NavLink to='/register' style={{textDecoration:"none"}}>
                    <Button variant='text'>

                    New User ? Register Here
                    </Button>
                </NavLink>
                </form> 
                </Grid>
                <Grid item sx={12} md={6}>
                    <img src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;