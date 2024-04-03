import React from 'react'
import Welcome from '../components/Welcome'
import Knowaboutus from '../components/Knowaboutus'
import Whatwedo from '../components/Whatwedo'
import Projects from '../components/Projects'
import Accountability from '../components/Accountability'
import Contribute from '../components/Contribute'
import Ourevents from '../components/Ourevents'

const Home = () => {
  return (
    <div>
      <Welcome/>
      <Knowaboutus/>
      <Whatwedo/>
      <Projects/>
      <Accountability/>
      <Contribute/>
      <Ourevents/>
    </div>
  )
}

export default Home