import React from 'react'
import '../styles/FavoriteProperties.css'
import { Link } from 'react-router-dom'

function FavoriteProperties() {
  return (
<div className="property-item d-flex">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRbcrj53mGyk-u4JwrIb6z1RBAeCpxR78gfQ&s" alt="Property" className="property-img" />
              <div className="property-details d-flex flex-column justify-content-between">
                <div>
                  <h3>The Stables</h3>
                  <h1>$9540.99</h1>
                  <p>Terry Lane, Golden CO 80403</p>
                  <p>230.5 m² <span className="mx-2">2 🛏️</span> <span>2 🛁</span></p>
                </div>
                 </div>
              <Link to={'/properties/details'}><button className="btn btn-outline-primary align-self-end">View Details</button></Link>
            </div>
          )
}

export default FavoriteProperties