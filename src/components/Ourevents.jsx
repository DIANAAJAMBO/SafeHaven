import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Ourevents = () => {
    return (
        <Container style={{ marginTop: '5%' }}>
            <Row>
                <Row className="">
                    <div style={{ display: 'flex' }}>
                        <p style={{ marginLeft: '5px', fontSize: '20px' }}><b>Our Events</b></p>
                        <hr style={{ width: '80%', marginLeft: '10px', height: '1.5px', backgroundColor: 'black' }} />
                    </div>
                    <p style={{ fontSize: '20px' }}><b>Join us in our mission to empower and uplift abused victims on their journey towards healing and recovery</b></p>
                </Row>
                <Row >
                    <Col className="p-5" style={{ width: '60%', height: '200px', backgroundColor: '#A73554', borderRadius: '20px' }}>
                        <Row>
                            <Col md={2} style={{ color: 'white' }}>
                                <p style={{ fontWeight: '' }}><b>13</b></p>
                                <p style={{ fontSize: '' }}><b>APR</b></p>
                            </Col>
                            <Col md={8}>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ marginLeft: '5px', fontSize: '20px', color: 'white' }}><b>NEXT EVENTS</b></p>
                                    <hr style={{ width: '20%', marginLeft: '10px', height: '1.5px', backgroundColor: 'black' }} />
                                </div>
                                <h5 style={{ color: 'white' }}>A day our with abused Victims</h5>
                            </Col>
                            <Col md={2}>
                                <div style={{ width: '70px', height: '70px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                                    <FontAwesomeIcon icon={faArrowRight} style={{ color: 'black', fontSize: '24px' }} />
                                </div>
                            </Col>
                        </Row>

                    </Col>
                    <Col className="p-5" style={{ width: '60%', height: '200px', backgroundColor: '#A73554', borderRadius: '20px', marginLeft:'20px' }}>
                        <Row>
                            <Col md={2} style={{ color: 'white' }}>
                                <p style={{ fontWeight: '' }}><b>25</b></p>
                                <p style={{ fontSize: '' }}><b>APR</b></p>
                            </Col>
                            <Col md={8}>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ marginLeft: '5px', fontSize: '20px', color: 'white' }}><b>NEXT EVENTS</b></p>
                                    <hr style={{ width: '20%', marginLeft: '10px', height: '1.5px', backgroundColor: 'black' }} />
                                </div>
                                <h5 style={{ color: 'white' }}>Seminar: Empowering victims on their journey towards healing and recovery</h5>
                            </Col>
                            <Col md={2}>
                                <div style={{ width: '70px', height: '70px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                                    <FontAwesomeIcon icon={faArrowRight} style={{ color: 'black', fontSize: '24px' }} />
                                </div>
                            </Col>
                        </Row>

                    </Col>

                </Row>
            </Row>
        </Container>
    )
}

export default Ourevents