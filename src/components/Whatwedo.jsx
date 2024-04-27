import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap';
import Woman from '../assets/woman.png'
import { RiPsychotherapyLine } from "react-icons/ri";
import { GoLaw } from "react-icons/go";
import { CiMedicalClipboard } from "react-icons/ci";
import { SlSupport } from "react-icons/sl";


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
                        <div style={{ display: 'flex' }}>
                            <RiPsychotherapyLine style={{ margin: '' }} size={35} />
                            <p><b>Counselling:</b>we offer one-on-one sessions to abuse victims to help them process their experiences, understand their emotions, and develop coping strategies.</p>
                        </div>
                    </Row>
                    <Row>
                        <div style={{ display: 'flex' }}>
                            <GoLaw size={35} />
                            <p><b>Legal Advocacy:</b>We help victims ito identify their rights, discuss legal options available to them, and provide guidance on how to navigate the legal system.</p>
                        </div>
                    </Row>
                    <Row className="">
                        <div style={{ display: 'flex' }}>
                            <CiMedicalClipboard size={25} />
                            <p><b>Medical Support:</b>We collaborate with healthcare professionals and other support services to provide comprehensive care.</p>
                        </div>
                    </Row>
                    <Row className="">
                        <div style={{ display: 'flex' }}>
                            <SlSupport size={35} />
                            <p><b>Creating safe spaces:</b>We create safe and confidential environments where abuse victims can come together to share their experiences, emotions, and challenges without fear of judgment or retaliation.</p>
                        </div>
                    </Row>
                </Col>
                <Col className='wwdimage p-4' md={6} >
                    <div style={{}}>
                        <img src={Woman} alt="Hand" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Whatwedo