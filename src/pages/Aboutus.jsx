import React, { useState }from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap';
import Children from '../assets/children.jpeg'
import Hand from '../assets/hand.jpeg'
import Twowomen from '../assets/twowomen.jpeg'
import Meeting from '../assets/meeting.jpeg'
import Volunteerform from '../components/Volunteerform';
import Ourevents from '../components/Ourevents'

const Aboutus = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (event) => {
    event.stopPropagation();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  
  return (
    <>
     <Container fluid className="d-flex flex-column justify-content-center mt-3" >
      <Row>
        <Row className="" >
          <Col className='p-0' md={7} >
            <div>
              <img src={Children} alt="Children" style={{ height: '60vh', width: '100%' }} />
            </div>
          </Col>
          <Col className='p-0' md={5}>
            <div>
              <img src={Hand} alt="Hand" style={{ height: '60vh', width: '100%' }} />
            </div>
          </Col>
        </Row>
        <Row className="mt-5 text-black">
          <Col className='p-3' md={6} style={{ marginLeft: '10%', width: '25%' }}>
            <Row>
              <h4><b>Who are we?</b></h4>
              <p style={{ fontSize: '.8rem' }}> Welcome to Safe Haven, a beacon of hope and healing for those who have endured the torment of abuse. At Safe Haven, we stand firm in our commitment to empower survivors, foster resilience, and advocate for a world free from all forms of exploitation and violence.</p>
            </Row>
            <Row className="mt-1">
              <h4><b>Our Mission</b></h4>
              <p style={{ fontSize: '.8rem' }}>Our mission is rooted in the belief that every individual deserves to live a life free from fear, trauma, and oppression. We strive to provide comprehensive support and resources to survivors of abuse, empowering them to reclaim their dignity, rebuild their lives, and thrive beyond their past experiences.</p>
            </Row>
          </Col>
          <Col className='p-3' md={6} style={{ marginLeft: '10%' }}>
            <div style={{}}>
              <img src={Twowomen} alt="Hand" style={{ height: '450px', width: '100%', borderRadius: '8px' }} />
            </div>
          </Col>
        </Row>
        <Row className="mt-5 text-black" style={{ backgroundColor: 'rgba(244, 97, 136, 0.2)', padding: '3% 0' }}>
          <Col className='p-3' md={7} style={{ marginLeft: '10%', width: '30%' }}>
            <Row>
              <h4><b>Our Approach</b></h4>
              <p style={{ fontSize: '.8rem'}}> At SafeHaven, we understand that the journey to healing is unique for each survivor. Therefore, we offer a holistic approach that encompasses emotional support, legal assistance, educational resources, and community outreach. Through our trauma-informed programs and services, we aim to address the complex needs of survivors while fostering a culture of empathy, respect, and understanding.</p>
            </Row>
            <Row className="mt-1">
              <h4><b>Impact</b></h4>
              <p style={{ fontSize: '.8rem' }}> SafeHaven has made a tangible difference in the lives of countless survivors, providing them with the support and resources they need to overcome adversity and thrive. Through our advocacy efforts, we have also contributed to raising awareness, challenging societal norms, and influencing policy changes to prevent abuse and protect vulnerable populations.</p>
            </Row>
          </Col>
          <Col className='p-3' md={5} style={{ marginLeft: '10%' }}>
            <div style={{}}>
              <img src={Meeting} alt="Hand" style={{ height: '450px', width: '100%' }} />
            </div>
          </Col>
        </Row>
        <Row className='mt-5 text-black'>
          <Col md={5} className='p-5' style={{ marginLeft: '', marginTop: '' }}>
            <div style={{ border: '1px solid rgba(244, 97, 136, 1)', height: '400px', padding: '7%' }}>
              <h4><b>Our Values</b></h4>
              <p style={{ fontSize: '.8rem' }}> We approach our work with empathy and compassion, recognizing the inherent dignity and worth of every individual.</p>
              <p style={{ fontSize: '.8rem' }}> We empower survivors to reclaim their agency, voice, and autonomy in their healing journey.</p>
              <p style={{ fontSize: '.8rem' }}> We believe in the power of collaboration and partnership to create meaningful change and support the broader community in ending abuse.</p>
              <p style={{ fontSize: '.8rem' }}> We advocate for systemic change and social justice to create a world where abuse is not tolerated, and all individuals can live with dignity and safety.</p>
            </div>
          </Col>
          <Col md={7} style={{}} className='aboutuscontent'>
            <div style={{
              border: '1px solid rgba(244, 97, 136, 1)',
              height: '260px',
              width: '100%',
              padding: '7%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <h4><b>Get Involved</b></h4>
                <p style={{ fontSize: '.8rem' }}> Join us in our mission to create a world free from abuse. Whether through volunteering, donating, or spreading awareness, your support enables us to continue our vital work and make a lasting impact in the lives of survivors and their communities.</p>
              </div>
              <div style={{ display: 'flex', gap: '20px', marginLeft: 'auto' }}> 
                <Button style={{ backgroundColor: 'rgba(244, 97, 136, 1)', marginTop: '30px' }} onClick={handleShowModal}>Join as a volunteer</Button>
                <Button style={{ backgroundColor: '#FFFF', color: 'black', marginTop: '30px' }}>Donate</Button>
              </div>
            </div>
          </Col>
        </Row>
        
      </Row>
      <Volunteerform showModal={showModal} handleCloseModal={handleCloseModal} />
    </Container>
    <Ourevents/></>
   

  )
}

export default Aboutus