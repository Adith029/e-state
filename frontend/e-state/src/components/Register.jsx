import React from 'react'
import '../styles/Register.css'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className="login-container">
    <div className="bg-image"></div>
    <div className="login-modal">
     
      <div className="login-form">
      <h4> <b>Register As </b></h4>
        <div className="register-buttons">
         
        <label>
    <input type="radio" name="user-type" value="agent" className="login-button"/>
    <b>Agent</b> 
  </label>
  <label>
    <input type="radio" name="user-type" value="buyer" className="register-button"/>
   <b>Buyer</b> 
  </label>
        </div>
        <input type="text" placeholder="Name" className="register-input" />
        <input type="email" placeholder="Email" className="register-input" />
        <input type="password" placeholder="Password" className="register-input" />
        <input type="password" placeholder="Confirm Password" className="register-input" />
        <button className="submit-button">Register</button>
        <Link to={'/login'}>    <a href="#" className="forgot-password">Already have an account?</a> </Link> 
      </div>
    </div>
  </div>  )
}

export default Register