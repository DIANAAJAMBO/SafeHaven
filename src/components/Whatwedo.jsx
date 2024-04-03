import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap';
import Image1 from '../assets/Image1.jpg'
import Woman from '../assets/woman.png'

const Whatwedo = () => {
    return (
        <Container fluid style={{ marginTop: '5%', backgroundColor: 'rgba(244, 97, 136, 0.2)' }}>
            <Row className="mt-5" style={{  padding: '3% 0' }}>
                <Col className='p-3' md={6} style={{ marginLeft: '10%', width: '25%' }}>
                    <Row className="">
                        <div style={{ display: 'flex' }}>
                            <hr style={{ width: '20%', marginLeft: '10px' }} />
                            <p style={{ marginLeft: '15px' }}><b>WHAT WE DO</b></p>
                        </div>
                        <h5><b>Some services we provide to Abused victims</b></h5>
                    </Row>
                    <Row>
                        <p style={{ fontSize: '.9rem' }}><b>Counselling:</b>we offer one-on-one sessions to abuse victims to help them process their experiences, understand their emotions, and develop coping strategies.</p>
                    </Row>
                    <Row>
                        <p style={{ fontSize: '.9rem' }}><b>Legal Advocacy:</b>We help victims ito identify their rights, discuss legal options available to them, and provide guidance on how to navigate the legal system.</p>
                    </Row>
                    <Row className="mt-3">
                        <p style={{ fontSize: '.9rem' }}><b>Medical Support:</b>We collaborate with healthcare professionals and other support services to provide comprehensive care.</p>
                    </Row>
                    <Row className="mt-2">
                        <p style={{ fontSize: '.9rem' }}><b>Creating safe spaces:</b>We create safe and confidential environments where abuse victims can come together to share their experiences, emotions, and challenges without fear of judgment or retaliation.</p>
                    </Row>
                </Col>
                <Col className='p-3' md={6} style={{ marginLeft: '10%' }}>
                    <div style={{}}>
                        <img src={Woman} alt="Hand" style={{ height: '60vh', width: '80%', borderRadius: '8px' }} />
                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export default Whatwedo