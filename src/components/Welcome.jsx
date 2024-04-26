import React from 'react'
import BackgroundImage from '../assets/holdinghands.png'
import { Container } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Container fluid style={{padding:'0'}}>
      <div className="welcomebackground">
        <h2 className="welcometitle">Welcome to Safe Haven where we empower survivors to <br/>reclaim their dignity, voice, and agency</h2>
        <h4 className="welcomesubtitle">More than 230 cases resolved</h4>
      </div>
    </Container>

  )
}

export default Welcome;