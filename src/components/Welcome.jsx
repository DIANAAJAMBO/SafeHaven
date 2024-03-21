import React from 'react'
import BackgroundImage from '../assets/holdinghands.png'

const Welcome = () => {
  return (
    <div style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '60vh', marginTop: '30px', padding:'10% '}}>
      <h2 style={{ textAlign:'center', color: '#FFFFFF'}}> Welcome to Safe Haven where we empower surviors to reclaim their <br/> dignity, voice and agency</h2>
      <h4 style={{ textAlign:'center', color: '#FFFFFF', paddingTop:'10%'}}>More than 230 cases resolved</h4>
    </div>
  )
}

export default Welcome;