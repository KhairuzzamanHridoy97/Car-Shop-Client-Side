import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { Button } from '@mui/material';


const Navigation = () => {
    const {user,logOut} = useAuth();
    return (
       <>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/home">Car Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/home' >Home</Nav.Link>
                        <Nav.Link as={Link} to='/cars' >Cars</Nav.Link>
                        {
                            user?.email?
                            <Button onClick={logOut} color='primary' style={{my:1}}  >LOGOUT</Button>
                            :
                            <Nav.Link as={Link} to='/login' >Login</Nav.Link>

                        }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
       </>
    );
};

export default Navigation;