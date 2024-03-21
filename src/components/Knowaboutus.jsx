import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap';
import Image1 from '../assets/Image1.jpg'

const Knowaboutus = () => {
    return (
        <Container style={{ marginTop: '5%' }}>
            <Row>
                <Col>
                    <Row className="">
                        <Col>
                            <hr style={{ width: '50%' }} />
                        </Col>
                        <Col>
                            <p style={{ marginLeft: '5px' }}>KNOW ABOUT US</p>
                        </Col>
                    </Row>
                    <Row>
                        <h3>We provide support for anyone going through any form of abuses</h3>
                    </Row>
                    <Row>
                        <p>Our mission is to offer a safe haven for those who have experienced such trauma, <br />fostering a nurturing environment where survivors can heal and rebuild their lives. <br /> We strive to empower survivors to reclaim their dignity, voice, and agency.</p>
                        <p>Our team of trained professionals and volunteers work tirelessly to ensure that survivors receive the <br />care, respect, and justice they deserve. <br />Together, we stand as a beacon of hope, solidarity, and compassion, <br />advocating for a world free from violence and oppression.</p>
                    </Row>
                   
                        <Button variant="primary" href="" style={{ }}>Learn More</Button>
                    

                </Col>
                <Col>
                    <img src={Image1} style={{ width: '50%', height: '70%' }} alt="women holding hands" />
                </Col>
            </Row>
        </Container>

    )
}

export default Knowaboutus