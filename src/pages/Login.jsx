import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Image1 from '../assets/Image1.jpg'

const login = () => {
  return (
    <Container>
      <Row>
        <Col lg={6}>
          <img src={Image1} style={{ width: '100%' }} alt="women holding hands" />
        </Col>
        <Col lg={6}>
          <h2>Welcome Back</h2>
          <p>Sign in to continue your progress</p>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <a href="">Forgot Password?</a>
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign in
            </Button>
            <p>OR LOGIN WITH</p>
            <p>Don't have an account? <a href="/signup">Register here</a></p>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default login