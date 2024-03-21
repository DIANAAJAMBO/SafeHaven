import { useState } from 'react'
import './App.css'
import Login from './pages/Login.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup.jsx'
import Verifyaccount from './pages/Verifyaccount.jsx';
import Forgotpassword from './pages/Forgotpassword.jsx';
import Home from './pages/Home.jsx';
import Aboutus from './pages/Aboutus.jsx';
import Contactus from './pages/Contactus.jsx';
import Services from './pages/Services.jsx';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verifyaccount" element={<Verifyaccount />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/services" element={<Services />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
