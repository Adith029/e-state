import React, { useState } from 'react'
import '../styles/UserDashboard.css'
import { MdDashboard } from "react-icons/md";
import { BsFillHouseFill } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { Button } from 'react-bootstrap';
import { IoIosLogOut } from "react-icons/io";

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
        <li className="sidebar-elements">
  <a
    className={`sidebar-link ${activeLink === 'Dashboard' ? 'active' : ''}`}
    href="#"
    onClick={() => handleSetActiveLink('Dashboard')}
  >
    <MdDashboard /> Dashboard
  </a>
</li>
            <li className=" sidebar-elements">
              <a
                className={`sidebar-link ${activeLink === 'Discover' ? 'active' : ''}`}
                href="#"
                onClick={() => handleSetActiveLink('Discover')}
              >
                <BsFillHouseFill /> Discover
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
                className={`sidebar-link ${activeLink === 'Notifications' ? 'active' : ''}`}
                href="#"
                onClick={() => handleSetActiveLink('Notifications')}
              >
                <IoIosNotificationsOutline /> Notifications <span className="badge badge-primary">5</span>
              </a>
            </li>
            <li className=" sidebar-elements">
              <a
                className={`sidebar-link ${activeLink === 'Settings' ? 'active' : ''}`}
                href="#"
                onClick={() => handleSetActiveLink('Settings')}
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
        <div className="header d-flex justify-content-center align-items-center">
          <h1>249 Results</h1>
        </div>
        <div className="filters d-flex justify-content-center align-items-center">
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
        <div className="property-list">
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
                 <button className="btn btn-outline-primary align-self-end">View Details</button>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserDashboard