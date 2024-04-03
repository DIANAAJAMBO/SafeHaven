import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Image1 from '../assets/Image1.jpg'

const login = () => {
  return (
    <Container fluid>
      <Row >
        <Col lg={5} style={{ padding: '0' }}>
          <img src={Image1} style={{ width: '100%', height: '100vh' }} alt="women holding hands" />
        </Col>
        <Col lg={7} className="d-flex flex-column align-items-center  " style={{ margin: '0px' }} >
          <div style={{ marginTop: '10%' }}>
            <h2>Welcome Back</h2>
            <p>Sign in to continue your progress</p>
          </div>
          <Form style={{ width: '60%' }}>
            <Form.Group controlId="formBasicEmail" className="mb-3" >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" size="lg" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" size="lg" />
            </Form.Group>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Form.Group controlId="formBasicPassword" className="mb-3">
                <Form.Check type="checkbox" label="Remember Me" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <a href="/forgotpassword">Forgot Password?</a>
              </Form.Group>
            </div>

            <Button type="submit" size="lg" style={{ width: '100%', backgroundColor: 'rgba(100, 42, 182, 1)' }} className="mb-3" >
              Sign in
            </Button>
            <p style={{ textAlign: 'center' }}>OR LOGIN </p>
            <p style={{ textAlign: 'center' }}>Don't have an account? <a href="/signup">Register here</a></p>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default login