import React, { useState } from 'react'
import '../styles/SellerDashboard.css'
import { MdDashboard } from "react-icons/md";
import { BsFillHouseFill } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { Button } from 'react-bootstrap';
import { IoIosLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';
import SetUpSellerProfile from './SetUpSellerProfile';
import PropertyCard from './PropertyCard';

function SellerDashboard() {
  
    const [activeLink, setActiveLink] = useState('myProperties');

    const handleSetActiveLink = (link) => {
      setActiveLink(link);
    };
  
    return (
      <div className="seller-container-fluid">
        <div className="row">
          <div className="col-md-2 seller-sidebar bg-light">
            <div className="seller-profile text-center">
              <img src="https://www.ninjaonlinedating.com/blog/wp-content/uploads/2019/08/SmileModifiedKRAK.jpg" alt="Indica Watson" className="rounded-circle seller-profile-img" />
              <h5>Indica Watson</h5>
            </div>
            <ul className="nav flex-column justify-self-center">
              <li className="seller-sidebar-elements">
                <a
                  className={`seller-sidebar-link ${activeLink === 'myProperties' ? 'active' : ''}`}
                  href="#"
                  onClick={() => handleSetActiveLink('myProperties')}
                >
                  <MdDashboard /> My Properties
                </a>
              </li>
              <li className="seller-sidebar-elements">
                <a
                  className={`seller-sidebar-link ${activeLink === 'Inbox' ? 'active' : ''}`}
                  href="#"
                  onClick={() => handleSetActiveLink('Inbox')}
                >
                  <FiMessageSquare /> Inbox <span className="badge badge-primary">3</span>
                </a>
              </li>
              <li className="seller-sidebar-elements">
                <a
                  className={`seller-sidebar-link ${activeLink === 'Settings' ? 'active' : ''}`}
                  href="#"
                  onClick={() => handleSetActiveLink('Settings')}
                >
                  <CiSettings /> Settings
                </a>
              </li>
            </ul>
  
            <div className="seller-logout-div">
              <Button className='seller-logout'> Logout <IoIosLogOut /></Button>
            </div>
          </div>
          <div className="col-md-10 seller-content">
            <div className='add-properties'>
             <Link to={'/addproperties'}>   <button className='add-properties-btn'>Add Properties</button></Link>
            </div>
            <div className="seller-property-list">
              {/* Repeat seller-property-item for more properties */}
              {activeLink === 'myProperties' && <PropertyCard />}
              {activeLink === 'Settings' && <SetUpSellerProfile />}
            </div>
          </div>
        </div>
      </div>
      )
}

export default SellerDashboard