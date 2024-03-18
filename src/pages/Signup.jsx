import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Image1 from '../assets/Image1.jpg'

const Signup = () => {
  return (
    <Container>
      <Row>
        <Col lg={6}>
          <img src={Image1} style={{ width: '100%' }} alt="women holding hands" />
        </Col>
        <Col lg={6}>
          <h2>Create Account</h2>
          <p>Begin your journey with us today</p>
          <Form>
            <Form.Group controlId="fullname">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Fullname" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Check type="checkbox" label="I accept the terms and conditions" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
            <p>OR SIGNUP WITH</p>
            <p>Already have an account? <a href="/login">Click Here</a></p>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Signup