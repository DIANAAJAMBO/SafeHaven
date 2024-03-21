import React from 'react'
import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'
import Knowaboutus from '../components/Knowaboutus'
import Partners from '../components/Partners'
import Whatwedo from '../components/Whatwedo'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Welcome/>
      <Knowaboutus/>
      <Partners/>
      <Whatwedo/>
    </div>
  )
}

export default Home