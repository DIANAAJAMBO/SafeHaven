import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap';
import Image1 from '../assets/Image1.jpg'
import Woman from '../assets/woman.png'


const Whatwedo = () => {
    return (
        <Container className="whatwedosection" fluid>
            <Row className="mt-5" style={{ padding: '3% 0' }}>
                <Col className='wwdcontent p-3' md={6} >
                    <Row>
                        <div className="wwddivider">
                            <hr />
                            <p><b>WHAT WE DO</b></p>
                        </div>
                        <h5><b>Some services we provide to Abused victims</b></h5>
                    </Row>
                    <Row>
                        <p><b>Counselling:</b>we offer one-on-one sessions to abuse victims to help them process their experiences, understand their emotions, and develop coping strategies.</p>
                    </Row>
                    <Row>
                        <p><b>Legal Advocacy:</b>We help victims ito identify their rights, discuss legal options available to them, and provide guidance on how to navigate the legal system.</p>
                    </Row>
                    <Row className="mt-3">
                        <p><b>Medical Support:</b>We collaborate with healthcare professionals and other support services to provide comprehensive care.</p>
                    </Row>
                    <Row className="mt-2">
                        <p><b>Creating safe spaces:</b>We create safe and confidential environments where abuse victims can come together to share their experiences, emotions, and challenges without fear of judgment or retaliation.</p>
                    </Row>
                </Col>
                <Col className='wwdimage p-3' md={6} >
                    <div style={{}}>
                        <img src={Woman} alt="Hand" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Whatwedo