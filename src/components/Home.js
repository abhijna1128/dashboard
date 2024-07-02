import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="mt-4">
      <h1>Welcome to the Tourism Dashboard</h1>
      <p className="lead">Explore and manage tourism data efficiently.</p>
      <Row className="mt-4">
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Dashboard</Card.Title>
              <Card.Text>
                Manage bookings, view statistics, and more.
              </Card.Text>
              <Link to="/dashboard" className="btn btn-primary">
                Go to Dashboard
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Login</Card.Title>
              <Card.Text>
                Already have an account? Log in here.
              </Card.Text>
              <Link to="/login" className="btn btn-outline-primary">
                Login
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Register</Card.Title>
              <Card.Text>
                New user? Register for access.
              </Card.Text>
              <Link to="/register" className="btn btn-outline-success">
                Register
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
