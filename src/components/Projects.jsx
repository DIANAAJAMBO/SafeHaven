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

                    <Row className='mt-4'>
                        <Col >
                            <div style={{
                                backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${Handgate})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '250px', width: '80%', padding: '10%',borderRadius: '8px'
                            }}>
                                <h5 style={{ color: 'white' }}><b>Mission Smile <br />A visit to the Refugee</b></h5>
                                <Button style={{ marginTop: '20%', backgroundColor: 'rgba(244, 97, 136, 1)', color: 'white' }}>Learn More</Button>
                            </div>
                        </Col>
                        <Col>
                            <div style={{ backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${Boyhelp})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '250px', width: '80%', padding: '10%', borderRadius: '8px' }}>
                                <h5 style={{ color: 'white' }}><b>Monthly public<br /> awareness</b></h5>
                                <Button style={{ marginTop: '20%', backgroundColor: 'rgba(244, 97, 136, 1)', color: 'white' }}>Learn More</Button>
                            </div></Col>
                        <Col>
                            <div style={{ backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${Depressed})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '250px', width: '80%', padding: '10%', borderRadius: '8px' }}>
                                <h5 style={{ color: 'white' }}><b>Seminars and Open  <br />Discussion</b></h5>
                                <Button style={{ marginTop: '20%', backgroundColor: 'rgba(244, 97, 136, 1)', color: 'white' }}>Learn More</Button>
                            </div></Col>
                    </Row>
                </Col>

            </Row>
        </Container>

    )
}


export default Projects