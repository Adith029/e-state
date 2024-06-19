import React from 'react'
import '../styles/SellerList.css'
import { Link } from 'react-router-dom'

function SellerList() {
  return (
    <div className="new-property-seller-list">
    <div className="new-property-seller-item d-flex">
        <img src="https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA?rs=1&pid=ImgDetMain" alt="Property" className="new-property-seller-img" />
        <div className="new-property-seller-details d-flex flex-column justify-content-between">
            <div>
                <h1>Jishnu</h1>
                <p>No of Listings:<b>5</b></p>
            </div>
        </div>
        <div>
   <Link to={'/properties/details'}><button className="btn btn-outline-primary align-self-end">View Details</button></Link>
   <button className="btn btn-outline align-self-end btn2">Remove</button>
   </div>
    </div>
</div>
  )
}

export default SellerList