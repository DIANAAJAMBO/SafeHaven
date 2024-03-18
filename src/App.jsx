import { useState } from 'react'
import './App.css'
import Login from './pages/Login.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup.jsx'
import Verifyaccount from './pages/Verifyaccount.jsx';
import Forgotpassword from './pages/Forgotpassword.jsx';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verifyaccount" element={<Verifyaccount />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
