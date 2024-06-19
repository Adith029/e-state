import React from 'react'
import '../styles/SetUpSellerProfile.css'

function SetUpSellerProfile() {
  return (
    <div className="sellerProfile-container">
    <h2 className="sellerProfile-header">Setup Your Profile</h2>
    <form className="sellerProfile-form">
      <div className="sellerProfile-formGroup">
        <label className="sellerProfile-label" htmlFor="name">Name</label>
        <input type="text" id="name" className="sellerProfile-input" placeholder="Name" />
      </div>
      <div className="sellerProfile-formGroup">
        <label className="sellerProfile-label" htmlFor="email">Email</label>
        <input type="email" id="email" className="sellerProfile-input" placeholder="Email" />
      </div>
      <div className="sellerProfile-formGroup">
        <label className="sellerProfile-label" htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" className="sellerProfile-input" placeholder="Phone Number" />
      </div>
      <div className="sellerProfile-formGroup">
        <label className="sellerProfile-label" htmlFor="address">Address</label>
        <input type="text" id="address" className="sellerProfile-input" placeholder="Address" />
      </div>
      <div className="sellerProfile-formGroup">
        <label className="sellerProfile-label" htmlFor="city">City</label>
        <input type="text" id="city" className="sellerProfile-input" placeholder="City" />
      </div>
      <div className="sellerProfile-formGroup">
        <label className="sellerProfile-label" htmlFor="state">State</label>
        <input type="text" id="state" className="sellerProfile-input" placeholder="State" />
      </div>
      <div className="sellerProfile-formGroup">
        <label className="sellerProfile-label" htmlFor="zip">Zip Code</label>
        <input type="text" id="zip" className="sellerProfile-input" placeholder="Zip Code" />
      </div>
      <div className="sellerProfile-formGroup sellerProfile-formGroup-full">
        <label className="sellerProfile-label" htmlFor="photo">Upload Photo</label>
        <input type="file" id="photo" className="sellerProfile-input" />
      </div>
      <button type="submit" className="sellerProfile-button">Submit</button>
    </form>
  </div> 
   )
}

export default SetUpSellerProfile