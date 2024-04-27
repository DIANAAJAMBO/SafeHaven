import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Holdinghands from '../assets/holdinghands.png'

const Contactus = () => {
  return (
    <Container fluid className="d-flex flex-column justify-content-center">
      <Row className="mt-5 " style={{ backgroundColor: 'rgba(244, 97, 136, 0.2)', padding: '6%' }}>
        <Col className='' md={6} style={{marginLeft:'' }}>
          <div style={{ display: 'flex' }}>
            <hr style={{ width: '20%', marginLeft: '10px' }} />
            <p style={{ marginLeft: '15px' }}><b>CONTACT US</b></p>
          </div>
          <h5><b>We would love to hear from you</b></h5>
          <p style={{ fontSize: '.9rem' }}>Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details.</p>
        </Col>
        <Col className='' md={6} style={{}}>
          <h5><b>Let's talk!</b></h5>
          <p>+234816304746</p>
          <p>Safehaven@gmail.com</p>
          <h5><b>Headoffice</b></h5>
          <p>4 Broad Avenue, Lagos Nigeria.</p>
        </Col>
      </Row>
      <Row>
        <Form style={{ maxWidth: '70%', margin: '0 auto' }}>
          <Row className="justify-content-center mt-5 ">
            <Col md={6} className="mx-auto">
              <Form.Group controlId="formFirstName" className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your first name" />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email address" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formFullName" className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your last name" />
              </Form.Group>
              <Form.Group controlId="formSubject" className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter the subject of your message" />
              </Form.Group>
            </Col>
          </Row>
          <Row >
            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" style={{ height: '20vh' }} />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit" style={{ marginLeft: '40%', backgroundColor: 'rgba(244, 97, 136, 1)' }}>
            Send Message
          </Button>
        </Form>
      </Row>
    </Container>

  )
}

export default Contactus