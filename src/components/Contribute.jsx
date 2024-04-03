import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap';
import Hands from '../assets/hands.png'

const Contribute = () => {
    return (
        <Container style={{ marginTop: '5%', backgroundColor: 'white', width:'70%',backgroundSize: 'cover', backgroundPosition: 'center', height:'',padding:'5%',  backgroundImage: `url(${Hands})`, borderRadius:'20px' }}>
            <Row>
                <Col className="d-flex justify-content-center">
                    <div className="text-center" style={{marginTop:'5%'}} >
                        <h3 style={{color:'rgba(24, 24, 24, 1)'}}>You can contribute or volunteer in our organisation to provide support for abused victims by offering your time, skills and  compassion</h3>
                        <Button style={{backgroundColor: 'rgba(244, 97, 136, 1)', marginTop:'30px'}}>Join as a volunteer</Button>
                        <Button style={{backgroundColor:'#FFFF', color:'black', marginLeft:'20px', marginTop:'30px'}}>Donate</Button>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export default Contribute