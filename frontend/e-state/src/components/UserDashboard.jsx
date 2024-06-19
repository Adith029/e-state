import React, { useState } from 'react'
import '../styles/UserDashboard.css'
import { MdDashboard } from "react-icons/md";
import { BsFillHouseFill } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { Button } from 'react-bootstrap';
import { IoIosLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';
import FavoriteProperties from './FavoriteProperties';
import Profile from './Profile';

function UserDashboard() {
    const [activeLink, setActiveLink] = useState('Dashboard');

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-md-2 sidebar bg-light">
        <div className="profile text-center">
          <img src="https://www.ninjaonlinedating.com/blog/wp-content/uploads/2019/08/SmileModifiedKRAK.jpg" alt="Indica Watson" className="rounded-circle profile-img" />
          <h5>Indica Watson</h5>    
        </div>
        <ul className="nav flex-column justify-self-center">
            <li className=" sidebar-elements">
              <a
                className={`sidebar-link ${activeLink === 'favorites' ? 'active' : ''}`}
                href="#"
                onClick={() => handleSetActiveLink('favorites')}
              >
                <BsFillHouseFill /> Favorites
              </a>
            </li>
            <li className=" sidebar-elements">
              <a
                className={`sidebar-link ${activeLink === 'Inbox' ? 'active' : ''}`}
                href="#"
                onClick={() => handleSetActiveLink('Inbox')}
              >
                <FiMessageSquare /> Inbox <span className="badge badge-primary">3</span>
              </a>
            </li>
              <li className=" sidebar-elements">
              <a
                className={`sidebar-link ${activeLink === 'profile' ? 'active' : ''}`}
                href="#"
                onClick={() => handleSetActiveLink('profile')}
              >
                <CiSettings /> Settings
              </a>
            </li>
          
        </ul>
       
        <div className="logout-div">
           <Button className='logout'> Logout  <IoIosLogOut /></Button>
          </div>
      </div>
      <div className="col-md-10 content">
        <div className="property-list">
        {activeLink === 'favorites' && <FavoriteProperties />}
              {activeLink === 'profile' && <Profile />}
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserDashboard