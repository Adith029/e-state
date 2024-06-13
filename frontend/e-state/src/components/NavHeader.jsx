import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import '../styles/NavHeader.css'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';


function NavHeader() {
  return (
    <Navbar className='navbar'>
        <Container className='elements'>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto nav-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Properties</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <Button className='circle-button'><CiSearch /></Button>
         <Link to={'/login'}><Button variant='primary' className='getstarted'>Get Started</Button></Link>
          </Nav>
          
        </Container>
      </Navbar>
  )
}

export default NavHeader