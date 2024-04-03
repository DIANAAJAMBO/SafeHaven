import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap';
import Hands from '../assets/hands.png'

const Contribute = () => {
    return (
        <Container style={{ marginTop: '5%', backgroundColor: 'white', width:'50%', height:'350px',  backgroundImage: `url(${Hands})`, borderRadius:'20px' }}>
            <Row>
                <Col className="d-flex justify-content-center">
                    <div className="text-center" style={{marginTop:'10%'}} >
                        <h3 style={{color:'#090446'}}>You can contribute or volunteer in our organisation to provide support for abused victims by offering your time, skills and  compassion</h3>
                        <Button style={{backgroundColor:'#F46188', marginTop:'30px'}}>Join as a volunteer</Button>
                        <Button style={{backgroundColor:'#FFFF', color:'black', marginLeft:'20px', marginTop:'30px'}}>Donate</Button>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export default Contribute