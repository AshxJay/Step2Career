import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';

function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-color">
      <Container >
        
        <Navbar.Brand href="#home" className="navbar-brand"><img src={require('../img/logo (2).png')} alt="Company Logo" width="80px"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className='nav-link'>Home</Nav.Link>
            <Nav.Link href="#pricing" className='nav-link'>Chatbot</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link variant="primary" className='navbar nav-link' href="#deets">SignUp / Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar

 