import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Contact from './contact';

function MyNavbar() {
    return (
        <Navbar bg="dark" data-bs-theme="dark" sticky="top">
            <Container>
                <Nav className='me-auto'>
                    <Nav.Link href="#home-link" className='nav-link'>Home</Nav.Link>
                    <Nav.Link href="#projects-link" className='nav-link'>My Work</Nav.Link>
                    <Nav.Link href="#about-link" className='nav-link'>About Me</Nav.Link>
                    <Nav.Link href='https://github.com/ebushman02'  className='nav-link'  target="_blank"> My GitHub</Nav.Link>

                </Nav>
                
            </Container>
        </Navbar>
    );
}

export default MyNavbar;
