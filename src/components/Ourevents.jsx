import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap';

const Ourevents = () => {
    return (
        <Container style={{ marginTop: '5%' }}>
            <Row>
                <Col>
                    <Row className="">
                        <div style={{ display: 'flex' }}>
                            <p style={{ marginLeft: '5px' }}><b>Our Events</b></p>
                            <hr style={{ width: '50%', marginLeft: '10px' }} />
                        </div>
                        <p><b>Join us in our mission to empower and uplift abused victims on their journey towards healing and recovery</b></p>
                    </Row>
                    <Row>
                        <Col>
                            <div style={{ width: '60%', height: '200px', backgroundColor: '#A73554', borderRadius: '20px' }} >
                                <h5 style={{ color: 'white', paddingTop: '20%', marginLeft:'6%' }}>A day our with abused Victims</h5>
                            </div>
                        </Col>
                        <Col>
                            <div style={{ width: '60%', height: '200px', backgroundColor: '#A73554', borderRadius: '20px' }} >
                                <h5 style={{ color: 'white', paddingTop: '20%' }}></h5>
                            </div>
                        </Col>
                    </Row>
                </Col>

            </Row>
        </Container>
    )
}

export default Ourevents