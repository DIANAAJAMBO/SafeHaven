import React from 'react'
import { Row, Col, Container, Button, Form, InputGroup } from 'react-bootstrap';
import logo from '../assets/safehavenlogo.png'
const Footer = () => {
    return (
        <Container fluid style={{ marginTop: '5%', backgroundColor: '#642AB6', padding: '6%' }}>
            <Row>
                <Col>
                    <img src={logo} alt="Logo" width="150" height="60"/>
                </Col>
                <Col>
                    <div style={{ margin: '1% 5%' }}>
                        <h6 style={{ color: 'white', fontSize: '17px' }}><b>Home</b></h6>
                        <ul style={{ listStyleType: 'none', paddingLeft: '0px', marginLeft: '0px', color: '#D4D4D4' }} >
                            <li>About us</li>
                            <li>Team</li>
                            <li>What we do</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </Col>
                <Col>
                    <div style={{ margin: '1% 5%' }}>
                        <h6 style={{ color: 'white', fontSize: '17px' }}><b>More</b></h6>
                        <ul style={{ listStyleType: 'none', paddingLeft: '0px', marginLeft: '0px', color: '#D4D4D4' }} >
                            <li>Projects</li>
                            <li>Events</li>
                            <li>Donate</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </Col>
                <Col>
                    <div style={{ margin: '1% 5%' }}>
                        <h6 style={{ color: 'white', fontSize: '17px' }}><b>Connect</b></h6>
                        <ul style={{ listStyleType: 'none', paddingLeft: '0px', marginLeft: '0px', color: '#D4D4D4' }} >
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>Linkedin</li>
                        </ul>
                    </div>
                </Col>
                <Col>
                    <h2 style={{ color: 'white' }}>Subscribe to  get latest updates</h2>
                    <InputGroup className="mb-3" >
                        <Form.Control
                            placeholder="Your email"
                            aria-label="Your email"
                            aria-describedby="basic-addon2"
                            style={{ backgroundColor: 'inherit' }}
                        />
                        <Button id="button-addon2" style={{ backgroundColor: 'white', color: '#642AB6' }}>
                            Subscribe
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer