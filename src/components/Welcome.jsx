import React from 'react'
import BackgroundImage from '../assets/holdinghands.png'
import { Container, Row, Col } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Container fluid >
      <Row className="" >
        <Col className='p-0' md={6} >
          <div className="welcomebackground">
            {/* <img src={BackgroundImage} alt="Hand" style={{ height: '60vh', width: '100%' }} /> */}
            <h3 className="welcometitle">We empower survivors to <br />reclaim their dignity,<br /> voice, and agency</h3>
            <h4 className="welcomesubtitle">More than 230 cases resolved</h4>
          </div>
        </Col>
        <Col className='p-0' md={6}>
          <div>
            <img src={BackgroundImage} alt="Hand" style={{ height: '100%', width: '100%' }} />
          </div>
        </Col>
      </Row>
    </Container>

  )
}

export default Welcome;