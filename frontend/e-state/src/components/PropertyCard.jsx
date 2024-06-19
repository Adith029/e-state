import React from 'react'
import '../styles/PropertyCard.css'

function PropertyCard() {
  return (
    <div className="seller-property-item d-flex">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRbcrj53mGyk-u4JwrIb6z1RBAeCpxR78gfQ&s" alt="Property" className="seller-property-img" />
    <div className="seller-property-details d-flex flex-column justify-content-between">
      <div>
        <h3>The Stables</h3>
        <h1>$9540.99</h1>
        <p>Terry Lane, Golden CO 80403</p>
        <p>230.5 m² <span className="mx-2">2 🛏️</span> <span>2 🛁</span></p>
      </div>
    </div>
    <button className="btn btn-outline align-self-end">Delete</button>
    <button className="btn btn-outline align-self-end btn2">Edit</button>
  </div>
  )
}

export default PropertyCard