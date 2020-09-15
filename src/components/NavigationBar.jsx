import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function NavigationBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='./HomePage'>Home Page</Nav.Link>
            <Nav.Link href='./AboutPage'>About Page</Nav.Link>
            <Nav.Link href='./ContactPage'>Contact Page</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
