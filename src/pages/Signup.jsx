import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Image1 from '../assets/Image1.jpg'

const Signup = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={5} style={{ padding: '0' }}>
          <img src={Image1} style={{ width: '100%', height: '100vh' }} alt="women holding hands" />
        </Col>
        <Col lg={7} className="d-flex flex-column align-items-center  " style={{ margin: '0px' }}>
          <div style={{ marginTop: '10%' }}>
            <h2>Create Account</h2>
            <p>Begin your journey with us today</p>
          </div>
          <Form style={{ width: '60%' }}>
            <Form.Group controlId="fullname" className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Fullname" size="lg"/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" size="lg"/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" size="lg" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Check type="checkbox" label="I accept the terms and conditions" />
            </Form.Group>

            <Button variant="primary" type="submit" className="mb-3" size="lg" style={{ width: '100%', backgroundColor: 'rgba(100, 42, 182, 1)'  }}>
              Sign Up
            </Button>
            <p  style={{ textAlign: 'center' }}>OR REGISTER WITH</p>
            <p  style={{ textAlign: 'center' }}>Already have an account? <a href="/login">Click Here</a></p>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Signup