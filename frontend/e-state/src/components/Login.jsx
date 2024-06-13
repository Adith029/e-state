import React from 'react'
import '../styles/Login.css'
import bg from '../Assets/Screenshot (264).png'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="login-container">
    <div className="bg-image"></div>
    <div className="login-modal">
      <div className="login-logo">
        
      </div>
      <div className="login-form">
        <div className="login-buttons">
        <Link to={'/login'}>  <button className="login-button">Login</button> </Link> 
       <Link to={'/register'}>  <button className="register-button">Register</button></Link>
        </div>
        <input type="email" placeholder="Email" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <button className="submit-button">LOGIN</button>
        <a href="#" className="forgot-password">Forgot your password?</a>
      </div>
    </div>
  </div>
  )
}

export default Login