import { Box, Button } from '@mui/material';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const {user,logOut} = useAuth();
    return (
        <>
              <Navbar bg="dark" variant="dark" sticky='top' collapseOnSelect expand="lg">
                    <Container>
                    <Navbar.Brand as={Link} to='/home'>Car Shop</Navbar.Brand>
                   
                    <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/cars">Cars</Nav.Link>
                        {
                    user?.email? 
                    <Box>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }}  to='/dashboard'> 
                    <Button color="inherit" >Dashboard</Button>
                </NavLink>

                    <Button onClick={logOut} color='primary' style={{my:1}}  >LOGOUT</Button>
                    </Box>
                    :
                    <NavLink style={{ textDecoration: 'none', color: 'white' }}  to='/login'> 
                    <Button color="inherit">Login</Button>
                </NavLink>
           }
                        </Navbar.Collapse>                                      
                    </Container>
                </Navbar>
        </>
    );
};

export default Navigation;
