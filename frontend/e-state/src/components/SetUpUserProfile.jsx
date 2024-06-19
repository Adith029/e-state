import React from 'react'
import '../styles/SetUpUserProfile.css'

function SetUpUserProfile() {
  return (
    <div className="buyerProfile-container">
    <h2 className="buyerProfile-header">Setup Your Profile</h2>
    <form className="buyerProfile-form">
      <div className="buyerProfile-formGroup">
        <label className="buyerProfile-label" htmlFor="name">Name</label>
        <input type="text" id="name" className="buyerProfile-input" placeholder="Name" />
      </div>
      <div className="buyerProfile-formGroup">
        <label className="buyerProfile-label" htmlFor="email">Email</label>
        <input type="email" id="email" className="buyerProfile-input" placeholder="Email" />
      </div>
      <div className="buyerProfile-formGroup">
        <label className="buyerProfile-label" htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" className="buyerProfile-input" placeholder="Phone Number" />
      </div>
      <div className="buyerProfile-formGroup">
        <label className="buyerProfile-label" htmlFor="address">Address</label>
        <input type="text" id="address" className="buyerProfile-input" placeholder="Address" />
      </div>
      <div className="buyerProfile-formGroup">
        <label className="buyerProfile-label" htmlFor="city">City</label>
        <input type="text" id="city" className="buyerProfile-input" placeholder="City" />
      </div>
      <div className="buyerProfile-formGroup">
        <label className="buyerProfile-label" htmlFor="state">State</label>
        <input type="text" id="state" className="buyerProfile-input" placeholder="State" />
      </div>
      <div className="buyerProfile-formGroup">
        <label className="buyerProfile-label" htmlFor="zip">Zip Code</label>
        <input type="text" id="zip" className="buyerProfile-input" placeholder="Zip Code" />
      </div>
      <div className="buyerProfile-formGroup buyerProfile-formGroup-full">
        <label className="buyerProfile-label" htmlFor="photo">Upload Photo</label>
        <input type="file" id="photo" className="buyerProfile-input" />
      </div>
      <button type="submit" className="buyerProfile-button">Submit</button>
    </form>
  </div>
  )
}

export default SetUpUserProfile