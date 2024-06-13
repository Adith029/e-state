import React from 'react'
import image1 from '../Assets/Your Images Here.png'
import '../styles/BodyPart2.css'
import { PiBuildingApartmentThin } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
import { VscWorkspaceTrusted } from "react-icons/vsc";

function BodyPart2() {
  return (
    <div>
        <img src={image1} alt="" className='bodypart2image' />
        <div className='aboutUs'>
            <p style={{textAlign:'left',color:'#007bff'}}>ABOUT US</p>
            <h2 style={{textAlign:'left',fontWeight:'700',fontSize:'48px'}}>We're on a Mission to Change <br />
                View of RealEstate Field.</h2>
                <p style={{textAlign:'left',marginTop:'20px',marginBottom:'30px',color:'#7C8893'}}>We're transforming the real estate industry with seamless, transparent, and innovative solutions. <br /> Experience unparalleled service and cutting-edge technology as you find your dream home with us.</p>
                <div className='modernHouse'>
      <div className='apartmentCard'>
        <PiBuildingApartmentThin color='#007bff' size={50} />
        <p><b>Modern Apartments</b></p>
        <p className='cardDescription'>Discover Trendy Apartments with <br />Cutting-Edge Designs!</p>
      </div>
      <div className='apartmentCard'>
        <VscWorkspaceTrusted color='#007bff' size={50} />
        <p><b>Trusted Agents</b></p>
        <p className='cardDescription'>Connect with Trusted Real-Estate <br /> Agents and Brokers!</p>
      </div>
    </div>
    <p style={{textAlign:'left',marginTop:'20px',marginBottom:'30px',color:'#007bff'}}><FaArrowRightLong color='007bff'/> Learn more</p>

        </div>
        
    </div>
  )
}

export default BodyPart2