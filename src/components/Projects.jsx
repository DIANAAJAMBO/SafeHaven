import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap';
import BackgroundImage from '../assets/holdinghands.png'
import Boyhelp from '../assets/boyhelp.png'
import Depressed from '../assets/depressed.png'
import Handgate from '../assets/handgate.png'

const Projects = () => {
    return (
        <Container style={{ marginTop: '5%' }}>
            <Row>
                <Col >
                    <Row className="">
                        <div style={{ display: 'flex' }}>
                            <hr style={{ width: '5%', marginLeft: '10px' }} />
                            <p style={{ marginLeft: '15px' }}><b>PROJECTS WE HAVE DONE</b></p>
                        </div>
                        <h5><b>We are creating a place where<br />victims can find sanctuary, solace,<br /> and solidarity as they embark on their <br /> journey of healing power</b></h5>
                    </Row>

                    <Row>
                        <Col >
                            <div style={{
                                backgroundImage: `url(${Handgate})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px', width: '80%', padding: '10%',borderRadius: '8px'
                            }}>
                                <h5 style={{ color: 'white' }}>Mission Smile <br />A visit to the Refugee</h5>
                                <Button style={{ marginTop: '20%', backgroundColor: 'rgba(244, 97, 136, 1)', color: 'white' }}>Learn More</Button>
                            </div>
                        </Col>
                        <Col>
                            <div style={{ backgroundImage: `url(${Boyhelp})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px', width: '80%', padding: '10%', borderRadius: '8px' }}>
                                <h5 style={{ color: 'white' }}>Mission Smile <br />A visit to the Refugee</h5>
                                <Button style={{ marginTop: '20%', backgroundColor: 'rgba(244, 97, 136, 1)', color: 'white' }}>Learn More</Button>
                            </div></Col>
                        <Col>
                            <div style={{ backgroundImage: `url(${Depressed})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px', width: '80%', padding: '10%', borderRadius: '8px' }}>
                                <h5 style={{ color: 'white' }}>Mission Smile <br />A visit to the Refugee</h5>
                                <Button style={{ marginTop: '20%', backgroundColor: 'rgba(244, 97, 136, 1)', color: 'white' }}>Learn More</Button>
                            </div></Col>
                    </Row>
                </Col>

            </Row>
        </Container>

    )
}


export default Projects