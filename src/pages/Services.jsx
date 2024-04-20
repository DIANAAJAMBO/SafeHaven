import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap';
import Holdinghands from '../assets/holdinghands.png'

const Services = () => {
  return (
    <Container className="d-flex flex-column justify-content-center mt-5" >
      <Row className="mt-5">
        <Row className="mt-5">
          <Col className='' md={6} style={{ marginLeft: '', width: '' }}>
            <Row >
              <div style={{ display: 'flex' }}>
                <hr style={{ width: '20%', marginLeft: '10px' }} />
                <p style={{ marginLeft: '15px' }}><b>KNOW ABOUT US</b></p>
              </div>
              <h5><b>We provide support for anyone going through any form of abuses</b></h5>
            </Row>
            <Row>
              <p style={{ fontSize: '.9rem' }}>Our mission is to offer a safe haven for those who have experienced such trauma, fostering a nurturing environment where survivors can heal and rebuild their lives. We strive to empower survivors to reclaim their dignity, voice, and agency.</p>
            </Row>
            <Row className="mt-3">
              <p style={{ fontSize: '.9rem' }}>Our team of trained professionals and volunteers work tirelessly to ensure that survivors receive the care, respect, and justice they deserve. Together, we stand as a beacon of hope, solidarity, and compassion, advocating for a world free from violence and oppression.</p>
            </Row>
          </Col>
          <Col className='' md={6} style={{}}>
            <div style={{}}>
              <img src={Holdinghands} alt="Hand" style={{ height: '300px', width: '100%', borderRadius: '8px' }} />
            </div>
          </Col>
        </Row>
        <Row className="mt-5" style={{ backgroundColor: 'rgba(244, 97, 136, 0.2)' }}>
          <Col className='' md={6} style={{ marginLeft: '', width: '' }}>
            <Row >
              <div style={{ display: 'flex' }}>
                <hr style={{ width: '20%', marginLeft: '10px' }} />
                <p style={{ marginLeft: '15px' }}><b>WHAT WE DO</b></p>
              </div>
              <h5><b>Some services we provide to Abused victims</b></h5>
            </Row>
            <Row>
              <p style={{ fontSize: '.9rem' }}><b>Counselling:</b>we offer one-on-one sessions to abuse victims to help them process their experiences, understand their emotions, and develop coping strategies.</p>
            </Row>
            <Row className="mt-3">
              <p style={{ fontSize: '.9rem' }}><b>Medical Support:</b>We collaborate with healthcare professionals and other support services to provide comprehensive care.</p>
            </Row>
            <Row className="mt-3">
              <p style={{ fontSize: '.9rem' }}><b>Peer Support</b>We offer survivors the opportunity to connect with others who have gone through similar experience scollaborate with healthcare professionals and other support services to provide comprehensive care.</p>
            </Row>
          </Col>
          <Col className='' md={6} style={{marginTop:'5%'}}>
            <Row>
              <p style={{ fontSize: '.9rem' }}><b>Legal Advocacy:</b>We help victims ito identify their rights, discuss legal options available to them, and provide guidance on how to navigate the legal system.</p>
            </Row>
            <Row className="mt-2">
              <p style={{ fontSize: '.9rem' }}><b>Creating safe spaces:</b>We create safe and confidential environments where abuse victims can come together to share their experiences, emotions, and challenges without fear of judgment or retaliation.</p>
            </Row>
            <Row className="mt-3">
              <p style={{ fontSize: '.9rem' }}><b>Psyco education</b>Support groups may include psychoeducational components where participants learn about the dynamics of abuse, trauma responses, coping skills, self-care techniques, and available resources.</p>
            </Row>
          </Col>
        </Row>


      </Row>
    </Container>

  )
}

export default Services