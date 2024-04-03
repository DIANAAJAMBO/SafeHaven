import React from 'react'
import BackgroundImage from '../assets/holdinghands.png'
import { Container } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Container fluid>
      <div style={{ backgroundImage: `url(${BackgroundImage})`,  height: '60vh', marginTop: '30px', padding:'10% '}}>
      <h2 style={{ textAlign:'center', color: '#FFFFFF'}}> Welcome to Safe Haven where we empower surviors to reclaim their <br/> dignity, voice and agency</h2>
      <h4 style={{ textAlign:'center', color: '#FFFFFF', paddingTop:'10%'}}>More than 230 cases resolved</h4>
    </div>
    </Container>
    
  )
}

export default Welcome;