import React from 'react';
import '../styles/BodyPart.css';
import image from '../Assets/todd-kent-178j8tJrNlc-unsplash 1.png';
import { Button } from 'react-bootstrap';
import { CiSearch } from 'react-icons/ci';

function BodyPart() {
  return (
    <div style={{ backgroundColor: '#F4F9FF', minHeight: '780px' }}>
      <div className="discoverDiv">
        <p className="discover">Discover A Place <br /> You'll Love To Live</p>
      </div>
      <div className="discoverPara">
        Discover Your Dream Home in the Heart of the City. <br /> This elegant residence offers unparalleled luxury and comfort. <br />
        Perfectly located for convenient access to urban amenities and serene parks.
        <br /> <br />
        <Button variant="primary" className="makeInquiry">Make An Enquiry</Button>
      </div>
      <div className="house1">
        <img src={image} alt="House" />
      </div>
      <div className="search">
        <select name="dropdown1" id="dropdown1" className="searchInput">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <select name="dropdown2" id="dropdown2" className="searchInput">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <select name="dropdown3" id="dropdown3" className="searchInput">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <Button className="searchButton"><CiSearch size={25} /> Search</Button>
      </div>
    </div>
  );
}

export default BodyPart;
