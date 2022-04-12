import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import login from '../../../images/cars/tesla_car4.png';
import { NavLink } from 'react-router-dom';


const Register = () => {
    const [loginData,setLoginData]= useState([])

    const handleOnChange=(e)=>{
        const field = e.target.name;
        const value= e.target.value
        const newLoginData= {...loginData}
        newLoginData[field]=value;
        setLoginData(newLoginData)
        console.log(field,value)
    }

    const handleLoginSubmit =(e)=>{
        if(loginData.password!==loginData.password2){
            alert('Your Password Not Matched!')
        }
        e.preventDefault()
        alert('Registration Confirm ?')
    }
    return (
        <Container>
        <Grid container sx={{ mt: 8 }}  spacing={2}>
            <Grid item  sx={12} md={6}>
            <Typography variant="h3"  gutterBottom component="div">
                Register
            </Typography>
            <form onSubmit={handleLoginSubmit}>
            <TextField 
             sx={{width:"75%",m:1}}
            id="standard-basic" 
            label="Your Name"
            type="text"
            name="name"
            onChange={handleOnChange}  
            variant="standard" 
            /> 
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
            <TextField 
             sx={{width:"75%",m:1}}
            id="standard-basic" 
            label="Retype Password"
            type="password"
            name="passoword2"
            onChange={handleOnChange}  
            variant="standard" 
            /> 
            <Button sx={{width:"50%",m:1}} variant='contained' color="warning">Submit</Button>
            <NavLink to='/login' style={{textDecoration:"none"}}>
                    <Button variant='text'>
                    Already  Registered ? Please Login
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

export default Register;