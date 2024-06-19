import React, { useState } from 'react'
import '../styles/AddProperties.css'

function AddProperties() {
    const [propertyType, setPropertyType] = useState('');

    const handlePropertyTypeChange = (event) => {
      setPropertyType(event.target.value);
    }
  return (
    <div className="propertyDetails-container">
      <h2 className="propertyDetails-header">Add Property Details</h2>
      <form className="propertyDetails-form">
        <div className="propertyDetails-formGroup">
          <label className="propertyDetails-label" htmlFor="propertyType">Property Type</label>
          <select id="propertyType" className="propertyDetails-input" onChange={handlePropertyTypeChange}>
            <option value="">Select Property Type</option>
            <option value="house">House</option>
            <option value="villa">Villa</option>
            <option value="apartment">Apartment</option>
            <option value="office">Office</option>
            <option value="land">Land</option>
            <option value="shop">Shop</option>
          </select>
        </div>
        {(propertyType === 'house' || propertyType === 'villa' || propertyType === 'apartment') && (
          <>
            <div className="propertyDetails-formGroup">
              <label className="propertyDetails-label" htmlFor="bedrooms">Number of Bedrooms</label>
              <input type="number" id="bedrooms" className="propertyDetails-input" placeholder="Bedrooms" />
            </div>
            <div className="propertyDetails-formGroup">
              <label className="propertyDetails-label" htmlFor="bathrooms">Number of Bathrooms</label>
              <input type="number" id="bathrooms" className="propertyDetails-input" placeholder="Bathrooms" />
            </div>
          </>
        )}
        {propertyType !== 'land' && (
          <div className="propertyDetails-formGroup">
            <label className="propertyDetails-label" htmlFor="parking">Parking</label>
            <input type="text" id="parking" className="propertyDetails-input" placeholder="Parking" />
          </div>
        )}
        <div className="propertyDetails-formGroup">
          <label className="propertyDetails-label" htmlFor="measurements">Measurements</label>
          <input type="text" id="measurements" className="propertyDetails-input" placeholder="Measurements" />
        </div>
        <div className="propertyDetails-formGroup">
          <label className="propertyDetails-label" htmlFor="builtIn">Built In</label>
          <input type="text" id="builtIn" className="propertyDetails-input" placeholder="Built In" />
        </div>
        <div className="propertyDetails-formGroup">
          <label className="propertyDetails-label" htmlFor="address">Address</label>
          <input type="text" id="address" className="propertyDetails-input" placeholder="Address" />
        </div>
        <div className="propertyDetails-formGroup">
          <label className="propertyDetails-label" htmlFor="city">City</label>
          <input type="text" id="city" className="propertyDetails-input" placeholder="City" />
        </div>
        <div className="propertyDetails-formGroup">
          <label className="propertyDetails-label" htmlFor="state">State</label>
          <input type="text" id="state" className="propertyDetails-input" placeholder="State" />
        </div>
        <div className="propertyDetails-formGroup">
          <label className="propertyDetails-label" htmlFor="zip">Zip Code</label>
          <input type="text" id="zip" className="propertyDetails-input" placeholder="Zip Code" />
        </div>
        <div className="propertyDetails-formGroup">
          <label className="propertyDetails-label" htmlFor="price">Price</label>
          <input type="number" id="price" className="propertyDetails-input" placeholder="Price" />
        </div>
        <div className="propertyDetails-formGroup">
          <label className="propertyDetails-label" htmlFor="description">Description</label>
          <textarea id="description" className="propertyDetails-input" placeholder="Description"></textarea>
        </div>
        <div className="propertyDetails-formGroup propertyDetails-formGroup-full">
          <label className="propertyDetails-label" htmlFor="photos">Upload Photos</label>
          <input type="file" id="photos" className="propertyDetails-input" multiple accept="image/*" />
        </div>
        <button type="submit" className="propertyDetails-button">Submit</button>
      </form>
    </div>
    )
}

export default AddProperties