import React from 'react'
import '../styles/BodyPart3.css'
import { Col, Container, Row } from 'react-bootstrap';
import { PiHouseLineLight } from "react-icons/pi";
import { GiHouse } from "react-icons/gi";
import { LiaBuildingSolid } from "react-icons/lia";
import { BiBuildingHouse } from "react-icons/bi";
import { MdHolidayVillage } from "react-icons/md";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { RiHomeOfficeFill } from "react-icons/ri";
import { GiIsland } from "react-icons/gi";
import { CiShop } from "react-icons/ci";


function BodyPart3() {

    const agentsData = [
        {
          image: 'path/to/image1.jpg',
          experience: '3 Years Experience',
          name: 'David Wing',
          title: 'Eco Builders',
          phone: '+1 234 567 890'
        },
        {
          image: 'path/to/image2.jpg',
          experience: '4 Years Experience',
          name: 'Mike Hue',
          title: 'Architect Design',
          phone: '+1 234 567 890'
        },
        {
          image: 'path/to/image3.jpg',
          experience: '5 Years Experience',
          name: 'Ela Steven',
          title: 'Interior Design',
          phone: '+1 234 567 890'
        },
        {
          image: 'path/to/image4.jpg',
          experience: '2 Years Experience',
          name: 'Bill Butcher',
          title: 'Smart Home',
          phone: '+1 234 567 890'
        }
      ];
      
      const listings = [
        {
          type: 'For Sale',
          address: '19863 S Crescent Heights Blvd',
          city: 'Los Angeles, CA 90077',
          details: '3500 Square Feet, 5 Bedrooms, 6 Bathrooms',
          agent: 'Marla Smith',
          date: '10 days ago',
          price: '$5,304,000',
          image: 'image1.jpg'
        },
        {
          type: 'For Rent',
          address: '302 North Plam Drive',
          city: 'Beverly Hills, CA 90210',
          details: '2200 Square Feet, 3 Bedrooms, 3 Bathrooms',
          agent: 'Adam Smith',
          date: '6 days ago',
          price: '$5,142,000',
          image: 'image2.jpg'
        },
        {
          type: 'For Sale',
          address: '28 Quaker Road, Manhasset',
          city: 'California, MA 90277',
          details: '2500 Square Feet, 4 Bedrooms, 5 Bathrooms',
          agent: 'David Lee',
          date: '9 days ago',
          price: '$4,784,000',
          image: 'image3.jpg'
        },
        {
          type: 'For Sale',
          address: 'Sofi Berryessa 750 King Road',
          city: 'Los Angeles, CA 90277',
          details: '2900 Square Feet, 4 Bedrooms, 4 Bathrooms',
          agent: 'Lisa Liu',
          date: '5 days ago',
          price: '$3,534,000',
          image: 'image4.jpg'
        },
        {
          type: 'For Rent',
          address: '1203 Orren Street, Northeast',
          city: 'Washington, DC 20002',
          details: '1300 Square Feet, 3 Bedrooms, 2 Bathrooms',
          agent: 'Micheal Finn',
          date: '8 days ago',
          price: '$3,142,000',
          image: 'image5.jpg'
        },
        {
          type: 'For Sale',
          address: '28 Ridge Road, Manhasset',
          city: 'Queens, NY 90277',
          details: '3100 Square Feet, 3 Bedrooms, 4 Bathrooms',
          agent: 'David Lee',
          date: '2 days ago',
          price: '$2,384,000',
          image: 'image6.jpg'
        },
      ];
  return (
    <div className="app-container">
    <header className="app-header">
      <h6 className="app-subtitle">OUR SERVICES</h6>
      <h1 className="app-title">Our Main Focus</h1>
    </header>

    <main>
      <section className="main-focus">
        <div className="focus-item">
          <div className="icon"><PiHouseLineLight color='#007bff' size={50} /></div>
          <h3 className="focus-title">Buy a Home</h3>
          <p className="focus-description">
            Over 1 million homes for sale available on the website, we can match you with a house you will want to call home.
          </p>
          <a href="#" className="focus-link">Find A Home →</a>
        </div>
        <div className="focus-item">
          <div className="icon"><GiHouse color='#007bff' size={50} /></div>
          <h3 className="focus-title">Rent a Home</h3>
          <p className="focus-description">
            Over 1 million homes for sale available on the website, we can match you with a house you will want to call home.
          </p>
          <a href="#" className="focus-link">Find A Home →</a>
        </div>
        <div className="focus-item">
          <div className="icon"><LiaBuildingSolid color='#007bff' size={50} /></div>
          <h3 className="focus-title">Sell a Home</h3>
          <p className="focus-description">
            Over 1 million homes for sale available on the website, we can match you with a house you will want to call home.
          </p>
          <a href="#" className="focus-link">Find A Home →</a>
        </div>
      </section>

      <section className="featured-categories">
        <div className="categories-header">
          <h2 className="categories-title">Featured Categories</h2>
          <p className="categories-subtitle">Lorem ipsum dolor sit amet</p>
          <a href="#" className="categories-link">View All Categories →</a>
        </div>
        <div className="categories">
          <div className="category-item">
            <div className="category-icon"><BiBuildingHouse color='#007bff' size={50} /></div>
            <h3 className="category-title">Town House</h3>
            <p className="category-description">2 Properties</p>
          </div>
          <div className="category-item">
            <div className="category-icon"><MdHolidayVillage color='#007bff' size={50} /></div>
            <h3 className="category-title">Modern Villa</h3>
            <p className="category-description">10 Properties</p>
          </div>
          <div className="category-item">
            <div className="category-icon"><PiBuildingApartmentFill color='#007bff' size={50} /></div>
            <h3 className="category-title">Apartment</h3>
            <p className="category-description">3 Properties</p>
          </div>
          <div className="category-item">
            <div className="category-icon"><RiHomeOfficeFill color='#007bff' size={50} /></div>
            <h3 className="category-title">Office</h3>
            <p className="category-description">3 Properties</p>
          </div>
          <div className="category-item">
            <div className="category-icon"><GiIsland color='#007bff' size={50} /></div>
            <h3 className="category-title">Land</h3>
            <p className="category-description">5 Properties</p>
          </div>
          <div className="category-item">
            <div className="category-icon"><CiShop color='#007bff' size={50} /></div>
            <h3 className="category-title">Shop House</h3>
            <p className="category-description">2 Properties</p>
          </div>
        </div>
      </section>
    </main>
    <section className="agents-section">
        <h2>Our Growing Agents</h2>
        <div className="agents-grid">
          {agentsData.map((agent, index) => (
            <div key={index} className="agent-card">
              <img src={agent.image} alt={agent.name} />
              <div className="agent-info">
                <span className="agent-experience">{agent.experience}</span>
                <h3>{agent.name}</h3>
                <p>{agent.title}</p>
                <p>Call: {agent.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="become-agent-section">
        <h2>Become An Agent</h2>
        <p>Agent hen an unknown printer took a galley scramble</p>
        <button className="join-button">Join Now</button>
      </section>

      <section className='property-listing'>
      <Container fluid="md">
        <h6 style={{color:'#007bff', marginTop:'100px'}}> FEATURED LISTING</h6>
      <h1 className="text-center my-4 app-title">We Bring Dream Homes To Reality</h1>
      <Row>
        {listings.map((listing, index) => (
          <Col md={6} lg={4} className="mb-4" key={index}>
            <div className="listing-card-unique">
              <div className="listing-image-unique" style={{ backgroundImage: `url(${listing.image})` }}></div>
              <div className="listing-info-unique">
                {listing.type && (
                  <span className={`listing-type-unique ${listing.type.toLowerCase().replace(' ', '-')}-unique`}>{listing.type}</span>
                )}
                <h2 className="listing-address-unique">{listing.address}</h2>
                <p className="listing-city-unique">{listing.city}</p>
                <p className="listing-details-unique">{listing.details}</p>
                <div className="agent-info-unique">
                  <span>{listing.agent}</span>
                  <span>{listing.date}</span>
                </div>
                <h3 className="listing-price-unique">{listing.price}</h3>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>

      </section>

      
  </div>
  )
}

export default BodyPart3