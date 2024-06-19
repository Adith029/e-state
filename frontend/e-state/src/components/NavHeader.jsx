import React from 'react'
import {  Container, Nav, Navbar } from 'react-bootstrap'
import '../styles/NavHeader.css'
import { Link } from 'react-router-dom';
import logo from '../Assets/3b9fcb095bfe879d76592786b10c7972-removebg-preview.jpg'


function NavHeader() {
  return (
    <Navbar className='navbar'>
      <Container className='elements'>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Nav className="me-auto nav-center">
          <Link to='/' className="nav-link">Home</Link>
          <Link to='/properties' className="nav-link">Properties</Link>
          <Link to='/about' className="nav-link">About</Link>
          <Link to='/contact' className="nav-link">Contact</Link>
        </Nav>
        <Link to='/login' className='nav-link getstarted'>Login</Link>
        <div className="profile-container">
          <img src="path/to/your/profile-image.jpg" alt="Profile" className="profile-image" />
        </div>
      </Container>
    </Navbar>
  )
}

export default NavHeader