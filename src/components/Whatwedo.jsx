import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap';
import Image1 from '../assets/Image1.jpg'

const Whatwedo = () => {
    return (
        <Container fluid style={{ marginTop: '5%', backgroundColor:'rgba(244,97,136,0.2)' }}>
            <Row>
                <Col>
                    <Row className="">
                        <Col>
                            <hr style={{ width: '50%' }} />
                        </Col>
                        <Col>
                            <p style={{ marginLeft: '5px' }}>WHAT WE DO</p>
                        </Col>
                    </Row>
                    <Row>
                        <h3>Some Services we provide to Abused Victims</h3>
                    </Row>
                    <Row>
                        <p>Counselling:we offer one-on-one sessions to abuse victims to help them process their experiences, understand their emotions, and develop coping strategies.</p>
                        <p>Legal Advocacy: We help victims ito identify their rights, discuss legal options available to them, and provide guidance on how to navigate the legal system.</p>
                        <p>Medical Support: We collaborate with healthcare professionals and other support services to provide comprehensive care.</p>
                        <p>Creating Safe Spaces: We create safe and confidential environments where abuse victims can come together to share their experiences, emotions, and challenges without fear of judgment or retaliation.</p>
                        
                    </Row>
                </Col>
                <Col>
                    <img src={Image1} style={{ width: '50%', height: '70%' }} alt="women holding hands" />
                </Col>
            </Row>
        </Container>

    )
}

export default Whatwedo