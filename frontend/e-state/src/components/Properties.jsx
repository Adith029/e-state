import React, { useState } from 'react';
import '../styles/Properties.css';
import { Link } from 'react-router-dom';

function Properties() {
  return (
    <div className="new-container-fluid">
            <div className="new-header d-flex justify-content-center align-items-center">
                <h1>249 Results</h1>
            </div>
            <div className="new-filters d-flex justify-content-center align-items-center">
                <input type="text" className="form-control" placeholder="Search Here..." />
                <input type="text" className="form-control" placeholder="Price" />
                <select className="form-control">
                    <option>2-4 Beds</option>
                    <option>1-2 Beds</option>
                    <option>4-6 Beds</option>
                    <option>6+ Beds</option>
                </select>
                <select className="form-control">
                    <option>Property Type</option>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Condo</option>
                    <option>Land</option>
                </select>
            </div>
            <div className="new-property-list">
                <div className="new-property-item d-flex">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRbcrj53mGyk-u4JwrIb6z1RBAeCpxR78gfQ&s" alt="Property" className="new-property-img" />
                    <div className="new-property-details d-flex flex-column justify-content-between">
                        <div>
                            <h3>The Stables</h3>
                            <h1>$9540.99</h1>
                            <p>Terry Lane, Golden CO 80403</p>
                            <p>230.5 m² <span className="mx-2">2 🛏️</span> <span>2 🛁</span></p>
                        </div>
                    </div>
               <Link to={'/properties/details'}>     <button className="btn btn-outline-primary align-self-end">View Details</button></Link>
                </div>
            </div>
        </div>
  )
}

export default Properties