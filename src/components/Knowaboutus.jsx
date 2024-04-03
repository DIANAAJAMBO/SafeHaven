import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap';
import Meeting1 from '../assets/meeting1.png'

const Knowaboutus = () => {
    return (
        <Container style={{ marginTop: '5%' }}>
            <Row>
                <Col>
                    <Row className="">
                        <div style={{ display: 'flex' }}>
                            <hr style={{ width: '20%', marginLeft: '10px' }} />
                            <p style={{ marginLeft: '15px' }}><b>KNOW ABOUT US</b></p>
                        </div>
                    </Row>
                    <Row>
                        <h3>We provide support for anyone going through any form of abuses</h3>
                    </Row>
                    <Row>
                        <p style={{ fontSize: '.9rem' }}>Our mission is to offer a safe haven for those who have experienced such trauma, <br />fostering a nurturing environment where survivors can heal and rebuild their lives. <br /> We strive to empower survivors to reclaim their dignity, voice, and agency.</p>
                        <p style={{ fontSize: '.9rem' }}>Our team of trained professionals and volunteers work tirelessly to ensure that survivors receive the <br />care, respect, and justice they deserve. <br />Together, we stand as a beacon of hope, solidarity, and compassion, <br />advocating for a world free from violence and oppression.</p>
                    </Row>
                    <Button style={{ backgroundColor: 'rgba(244, 97, 136, 1)', color: 'white' }}>Learn More</Button>
                </Col>
                <Col style={{ marginLeft: '10%' }}>
                    <img src={Meeting1} style={{ width: '90%', height: '50vh', borderRadius:'8px' }} alt="women meeting " />
                </Col>
            </Row>
        </Container>

    )
}

export default Knowaboutus