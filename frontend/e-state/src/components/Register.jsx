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
         
        <div class="register-buttons">
  <button type="button" className="login-button" onclick="setUserType('agent')"><b>Agent</b></button>
 <Link to={'/registerasseller'}><button type="button" className="register-button" onclick="setUserType('buyer')"><b>Buyer</b></button></Link> 
</div>
<input type="hidden" id="user-type" name="user-type" value=""/>
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