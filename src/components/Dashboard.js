import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import beachImage from '../assets/beach.jpg'; // Import image related to tourism

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'bg-dark text-white' : 'bg-light text-dark'} style={{ minHeight: '100vh' }}>
      <Container fluid className="py-4">
        <Row className="mb-4">
          <Col>
            <Button onClick={toggleDarkMode} variant={darkMode ? 'light' : 'dark'}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </Button>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Img variant="top" src={beachImage} alt="Beach" style={{ height: '300px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>Bookings</Card.Title>
                <Card.Text>
                  Display booking information and manage reservations.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Img variant="top" src={beachImage} alt="Beach" style={{ height: '300px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>Popular Attractions</Card.Title>
                <Card.Text>
                  Discover popular tourist attractions and manage recommendations.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;

