import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap';
import BackgroundImage from '../assets/holdinghands.png'

const Projects = () => {
    return (
        <Container fluid style={{ marginTop: '5%' }}>
            <Row>
                <Col>
                    <Row className="">
                        <div style={{ display: 'flex' }}>
                            <hr style={{ width: '10%', marginLeft: '10px' }} />
                            <p style={{ marginLeft: '15px' }}><b>WHAT WE DO</b></p>
                        </div>
                        <h5><b>We are creating a place where victims can find sanctuary, solace</b></h5>
                    </Row>
                    
                    <Row>
                        <Col>
                            <div style={{ backgroundImage: `url(${BackgroundImage})`, height: '381px', width: '415px', padding: '10%' }}>
                                <h5 style={{ color: 'white' }}>Mission Smile <br />A visit to the Refugee</h5>
                                <Button style={{ marginTop: '20%' }}>Learn More</Button>
                            </div>
                        </Col>
                        <Col>
                            <div style={{ backgroundImage: `url(${BackgroundImage})`, height: '381px', width: '415px', padding: '10%' }}>
                                <h5 style={{ color: 'white' }}>Mission Smile <br />A visit to the Refugee</h5>
                                <Button style={{ marginTop: '20%' }}>Learn More</Button>
                            </div></Col>
                        <Col>
                            <div style={{ backgroundImage: `url(${BackgroundImage})`, height: '381px', width: '415px', padding: '10%' }}>
                                <h5 style={{ color: 'white' }}>Mission Smile <br />A visit to the Refugee</h5>
                                <Button style={{ marginTop: '20%' }}>Learn More</Button>
                            </div></Col>
                    </Row>
                </Col>

            </Row>
        </Container>

    )
}


export default Projects