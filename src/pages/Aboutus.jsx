import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap';
import Children from '../assets/children.jpeg'
import Hand from '../assets/hand.jpeg'
import Twowomen from '../assets/twowomen.jpeg'
import Meeting from '../assets/meeting.jpeg'

const Aboutus = () => {
  return (
    <Container fluid className="d-flex flex-column justify-content-center mt-3" >
      <Row>
        <Row className="">
          <Col className='p-0' md={7} >
            <div>
              <img src={Children} alt="Children" style={{ height: '50vh', width: '100%' }} />
            </div>
          </Col>
          <Col className='p-0' md={5}>
            <div>
              <img src={Hand} alt="Hand" style={{ height: '50vh', width: '100%' }} />
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className='p-3' md={6} style={{ marginLeft: '10%', width: '25%' }}>
            <Row>
              <h4>Who are we?</h4>
              <p style={{ fontSize: '.9rem' }}> Welcome to Safe Haven, a beacon of hope and healing for those who have endured the torment of abuse. At Safe Haven, we stand firm in our commitment to empower survivors, foster resilience, and advocate for a world free from all forms of exploitation and violence.</p>
            </Row>
            <Row className="mt-5">
              <h4>Our Mission</h4>
              <p style={{ fontSize: '.9rem' }}>Our mission is rooted in the belief that every individual deserves to live a life free from fear, trauma, and oppression. We strive to provide comprehensive support and resources to survivors of abuse, empowering them to reclaim their dignity, rebuild their lives, and thrive beyond their past experiences.</p>
            </Row>
          </Col>
          <Col className='p-3' md={6} style={{ marginLeft: '10%' }}>
            <div style={{}}>
              <img src={Twowomen} alt="Hand" style={{ height: '500px', width: '100%', borderRadius: '8px' }} />
            </div>
          </Col>
        </Row>
        <Row className="mt-5" style={{ backgroundColor: 'rgba(244, 97, 136, 0.2)', padding: '3% 0' }}>
          <Col className='p-3' md={6} style={{ marginLeft: '10%', width: '25%' }}>
            <Row>
              <h4>Our Approach</h4>
              <p style={{ fontSize: '.9rem' }}> At SafeHaven, we understand that the journey to healing is unique for each survivor. Therefore, we offer a holistic approach that encompasses emotional support, legal assistance, educational resources, and community outreach. Through our trauma-informed programs and services, we aim to address the complex needs of survivors while fostering a culture of empathy, respect, and understanding.</p>
            </Row>
            <Row className="mt-3">
              <h4 >Impact</h4>
              <p style={{ fontSize: '.9rem' }}> SafeHaven has made a tangible difference in the lives of countless survivors, providing them with the support and resources they need to overcome adversity and thrive. Through our advocacy efforts, we have also contributed to raising awareness, challenging societal norms, and influencing policy changes to prevent abuse and protect vulnerable populations.</p>
            </Row>
          </Col>
          <Col className='p-3' md={6} style={{ marginLeft: '10%' }}>
            <div style={{}}>
              <img src={Meeting} alt="Hand" style={{ height: '500px', width: '100%' }} />
            </div>
          </Col>
        </Row>
        <Row >
          <Col className=''  style={{ marginLeft: '10%', marginTop:'4%'}}>
            <div style={{ border: '2px solid pink', height: '400px', padding:'7%'}}>
            <h4>Our Values</h4>
              <p style={{ fontSize: '.9rem' }}> At SafeHaven, we understand that the journey to healing is unique for each survivor. Therefore, we offer a holistic approach that encompasses emotional support, legal assistance, educational resources, and community outreach. Through our trauma-informed programs and services, we aim to address the complex needs of survivors while fostering a culture of empathy, respect, and understanding.</p> 
            </div>
          </Col>
          <Col style={{ marginTop:'13%'}}>
          <div style={{ border: '2px solid pink', height: '250px', width:'100%', padding:'7%'}}>
            <h4>Our Values</h4>
              <p style={{ fontSize: '.9rem' }}> At SafeHaven, we understand that the journey to healing is unique for each survivor. Therefore, we offer a holistic approach that encompasses emotional support, legal assistance, educational resources, and community outreach. Through our trauma-informed programs and services, we aim to address the complex needs of survivors while fostering a culture of empathy, respect, and understanding.</p> 
            </div>
          </Col>
        </Row>
      </Row>
    </Container>

  )
}

export default Aboutus