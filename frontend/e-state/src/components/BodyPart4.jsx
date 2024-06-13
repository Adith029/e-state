import React, { useState } from 'react'
import '../styles/BodyPart4.css'
import { Button, Card, Col, Container, Pagination, Row } from 'react-bootstrap';

function BodyPart4() {
    const testimonials = [
        {
          text: "I could probably go into sales for you. I am completely blown away. After using SCD my business skyrocketed! The very best.",
          name: "Grace Hall",
          role: "Customer",
          image: "https://www.souciehorner.com/wp-content/uploads/2017/04/Kitchen3-1536.jpg"
        },
        {
          text: "I received very good care at Clinicity Clinic, and the doctor took the time to explain the medications he was prescribing and why.",
          name: "Connor Walker",
          role: "Customer",
          image: "https://www.souciehorner.com/wp-content/uploads/2017/04/Kitchen3-1536.jpg"
        },
        {
          text: "I have insurance and still go to this clinic. The cost is in line with my copay to do and I don't need to make an appointment.",
          name: "Kira Wood",
          role: "Customer",
          image: "https://www.souciehorner.com/wp-content/uploads/2017/04/Kitchen3-1536.jpg"
        }
      ];
      
      const properties = [
        {
            price: "$300,000",
            location: "California, USA",
            details: "4 beds, 3 baths",
            agent: "William Hue",
            agentRole: "Estate Agents",
            image: "https://th.bing.com/th/id/OIP.iE7mcw3w2aFFDhXP9A1lggHaE8?rs=1&pid=ImgDetMain",
            label: "SINGAPORE"
          },
          {
            price: "$350,000",
            location: "Los Angeles, USA",
            details: "5 beds, 3 baths",
            agent: "Adam Smith",
            agentRole: "Estate Agents",
            image: "https://th.bing.com/th/id/OIP.iE7mcw3w2aFFDhXP9A1lggHaE8?rs=1&pid=ImgDetMain",
            label: "LOS ANGELES"
          },
          {
            price: "$500,000",
            location: "Houston, USA",
            details: "5 beds, 4 baths",
            agent: "Butcher Bos",
            agentRole: "Estate Agents",
            image: "https://th.bing.com/th/id/OIP.iE7mcw3w2aFFDhXP9A1lggHaE8?rs=1&pid=ImgDetMain",
            label: "CALIFORNIA"
          },
          {
            price: "$450,000",
            location: "Miami, USA",
            details: "3 beds, 2 baths",
            agent: "John Doe",
            agentRole: "Estate Agents",
            image: "https://th.bing.com/th/id/OIP.iE7mcw3w2aFFDhXP9A1lggHaE8?rs=1&pid=ImgDetMain",
            label: "MIAMI"
          },
          {
            price: "$600,000",
            location: "New York, USA",
            details: "4 beds, 3 baths",
            agent: "Jane Smith",
            agentRole: "Estate Agents",
            image: "https://th.bing.com/th/id/OIP.iE7mcw3w2aFFDhXP9A1lggHaE8?rs=1&pid=ImgDetMain",
            label: "NEW YORK"
          },
          {
            price: "$750,000",
            location: "San Francisco, USA",
            details: "5 beds, 4 baths",
            agent: "Michael Johnson",
            agentRole: "Estate Agents",
            image: "https://th.bing.com/th/id/OIP.iE7mcw3w2aFFDhXP9A1lggHaE8?rs=1&pid=ImgDetMain",
            label: "SAN FRANCISCO"
          }
        ];


const newsFeeds = [
    {
      title: "New Apartment Nice in the Best Canadian Cities",
      author: "William Seklo",
      category: "Apartment",
      date: "July 10, 2022",
      image: "https://www.souciehorner.com/wp-content/uploads/2017/04/Kitchen3-1536.jpg"
    },
    {
      title: "Diamond Manor Apartment in the New York",
      author: "Michel Seklo",
      category: "Apartment",
      date: "July 13, 2022",
      image: "https://www.souciehorner.com/wp-content/uploads/2017/04/Kitchen3-1536.jpg"
    },
    {
      title: "Unveils the Best Canadian Cities for Biking",
      author: "Adam Smith",
      category: "Apartment",
      date: "July 15, 2022",
      image: "https://www.souciehorner.com/wp-content/uploads/2017/04/Kitchen3-1536.jpg"
    },
    {
      title: "New Apartment Nice in the Best Canadian Cities",
      author: "William Seklo",
      category: "Apartment",
      date: "July 10, 2022",
      image: "https://www.souciehorner.com/wp-content/uploads/2017/04/Kitchen3-1536.jpg"
    },
    {
      title: "Diamond Manor Apartment in the New York",
      author: "Michel Seklo",
      category: "Apartment",
      date: "July 13, 2022",
      image: "https://www.souciehorner.com/wp-content/uploads/2017/04/Kitchen3-1536.jpg"
    },
    {
      title: "Unveils the Best Canadian Cities for Biking",
      author: "Adam Smith",
      category: "Apartment",
      date: "July 15, 2022",
      image: "https://www.souciehorner.com/wp-content/uploads/2017/04/Kitchen3-1536.jpg "
    }
  ];

      const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 3;

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <Container fluid >
    
    <section className="testimonials-section">
      <h2 className="text-center my-4 section-title">What Our Customers Says</h2>
      <Row>
        {testimonials.map((testimonial, index) => (
          <Col md={4} key={index}>
            <Card className="testimonial-card">
              <Card.Body>
                <Card.Text>{testimonial.text}</Card.Text>
                <div className="d-flex align-items-center">
                  <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                  <div className="ms-3">
                    <Card.Title className="mb-0">{testimonial.name}</Card.Title>
                    <Card.Subtitle className="text-muted">{testimonial.role}</Card.Subtitle>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>

    
    <section className="properties-section">
      <h2 className="text-center my-4 section-title">Our Popular Properties</h2>
      <Row>
        {currentProperties.map((property, index) => (
          <Col md={4} key={index}>
            <Card className="property-card">
              <Card.Img variant="top" src={property.image} alt={property.location} />
              <Card.Body>
                <div className="property-label">{property.label}</div>
                <Card.Title>{property.price}</Card.Title>
                <Card.Text>{property.location}</Card.Text>
                <Card.Text>{property.details}</Card.Text>
                <div className="d-flex align-items-center">
                  <div className="ms-3">
                    <Card.Title className="mb-0">{property.agent}</Card.Title>
                    <Card.Subtitle className="text-muted">{property.agentRole}</Card.Subtitle>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Pagination className="justify-content-center mt-4">
        {[...Array(Math.ceil(properties.length / propertiesPerPage)).keys()].map(number => (
          <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => paginate(number + 1)}>
            {number + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </section>

    <section className="news-section">
        <h2 className="text-center my-4 news-section-title">Latest News Feeds</h2>
        <Row>
          {newsFeeds.map((news, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="news-card">
                <Card.Img variant="top" src={news.image} alt={news.title} />
                <Card.Body>
                  <div className="news-card-author-category">
                    <span className="news-card-author">{news.author}</span>
                    <span className="news-card-category">{news.category}</span>
                  </div>
                  <Card.Title className="news-card-title">{news.title}</Card.Title>
                  <div className="news-card-date-readmore">
                    <span className="news-card-date">{news.date}</span>
                    <Button variant="link" className="news-card-readmore">READ MORE</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <Button variant="primary" className="view-all-button">View All</Button>
        </div>
      </section>

  </Container>
  )
}

export default BodyPart4