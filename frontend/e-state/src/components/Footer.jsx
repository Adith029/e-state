import React from 'react'
import '../styles/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer-container">
      <div className="newsletter">
        <h2 className="newsletter-title">Join Our Newsletter Now</h2>
        <p className="newsletter-subtitle">Register now to get updates on promotions...</p>
        <div className="newsletter-input">
        <Link to={'/contact'}>  <button>SUBSCRIBE</button> </Link>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-section footer-branding">
          <h3 className="footer-logo">Houzing</h3>
          <p className="footer-description">
            Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.
          </p>
          <div className="footer-social">
            <a href="#"><img src="path/to/facebook-icon.png" alt="Facebook" /></a>
            <a href="#"><img src="path/to/instagram-icon.png" alt="Instagram" /></a>
            <a href="#"><img src="path/to/linkedin-icon.png" alt="LinkedIn" /></a>
            <a href="#"><img src="path/to/twitter-icon.png" alt="Twitter" /></a>
          </div>
        </div>

        <div className="footer-section footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </div>

        <div className="footer-section footer-services">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Wish List</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Submit a Request</a></li>
            <li><a href="#">Appointment</a></li>
            <li><a href="#">Promotional Offers</a></li>
          </ul>
        </div>

        <div className="footer-section footer-contact">
          <h4>Contact</h4>
          <p>124 Brooklyn, New York</p>
          <p>United States</p>
          <p>+11 2 3456 7890</p>
          <p>info@houzing.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Copyright Medih 2022 All Right Reserved.</p>
        <p>
          <a href="#">Terms Of Use</a> | <a href="#">Privacy Policy</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer