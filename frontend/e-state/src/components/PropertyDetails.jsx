import React, { useState } from 'react'
import '../styles/PropertyDetails.css'
import { IoBedOutline } from "react-icons/io5";
import { BsHouseDoorFill } from "react-icons/bs";
import { FaBath, FaCar } from 'react-icons/fa';
import { BiArea } from 'react-icons/bi';
import { BsCalendar } from 'react-icons/bs';
function PropertyDetails() {
    const [selectedImage, setSelectedImage] = useState('');

    const images = [
      'https://i.pinimg.com/564x/68/11/d7/6811d78a09bc44d07921d076b58d8307.jpg',
      'https://i.pinimg.com/564x/c0/a0/b7/c0a0b797545e170c9407f1e829f62a0f.jpg',
      'https://i.pinimg.com/564x/b5/07/d9/b507d9bcb3c2897fc39430e116b23c4b.jpg',
      'https://i.pinimg.com/564x/52/ca/42/52ca42865b18c6082b61a0b85929e849.jpg'
    ];

  return (
    <div className="container-fluid new-property-card">
    <div className="row">
        <div className="col-md-8">
        <img 
            src={selectedImage || "https://i.pinimg.com/736x/00/72/f4/0072f4a11405f54fa5ff7f36beef31e0.jpg"} 
            alt="Property" 
            className="img-fluid new-property-main-img" 
          />
          <div className="new-property-thumbnails">
            {images.map((src, index) => (
              <img 
                key={index} 
                src={src} 
                alt={`Thumbnail ${index + 1}`} 
                className="img-thumbnail new-property-thumb" 
                onClick={() => setSelectedImage(src)} 
              />
            ))}
          </div>
        </div>
        <div className="col-md-4 new-property-pro-details">
            <h1>$32,000 / Year <span style={{backgroundColor:'orange',color:'white', fontSize:'16px'}}>For Rent</span></h1>
            <h3>Doane Street, Fremont CA 94538</h3>
            <hr />
            <div className="row overview-d">
                <div className="col-6">
                    <h3><IoBedOutline /> Bedroom: 4</h3>
                </div>
                <div className="col-6">
                    <h3><BsHouseDoorFill /> Type: Home</h3>
                </div>
                <div className="col-6">
                    <h3><FaBath className="text-danger"/> Bath: 3</h3>
                </div>
                <div className="col-6">
                    <h3><FaCar /> Parking: Yes</h3>
                </div>
                <div className="col-6">
                    <h3><BiArea /> Sqft: 2200</h3>
                </div>
                <div className="col-6">
                    <h3><BsCalendar /> Build Year: 2020</h3>
                </div>
            </div>
            <div style={{display:'block',marginTop:'55px'}}>
            <div>
            <button className='add-favorites'>Add To Favorites</button>
            </div>
            <div>
            <button className='add-favorites'>Contact Seller</button>
            </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default PropertyDetails