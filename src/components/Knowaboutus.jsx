import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap';
import Meeting1 from '../assets/meeting1.png'

const Knowaboutus = () => {
    return (
        <Container className="knowsection">
            <Row>
                <Col>
                    <Row >
                        <div className="knowdivider">
                            <hr />
                            <p><b>KNOW ABOUT US</b></p>
                        </div>
                    </Row>
                    <Row className="knowdivider1">
                        <h5 style={{color:'black'}} ><b>We provide support for anyone going through any form of abuses</b></h5>
                    </Row>
                    <Row className="knowcontent">
                        <p>Our mission is to offer a safe haven for those who have experienced such trauma, fostering a nurturing environment where survivors can heal and rebuild their lives. <br /> We strive to empower survivors to reclaim their dignity, voice, and agency.</p>
                        <p>Our team of trained professionals and volunteers work tirelessly to ensure that survivors receive the care, respect, and justice they deserve. <br />Together, we stand as a beacon of hope, solidarity, and compassion, <br />advocating for a world free from violence and oppression.</p>
                    </Row>
                    <Button className="knowbutton">Learn More</Button>
                </Col>
                <Col className="knowimage">
                    <img src={Meeting1} alt="knowwomen meeting" />
                </Col>
            </Row>
        </Container>
    )
}


export default Knowaboutus