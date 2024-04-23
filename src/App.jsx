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
import Layout from './pages/Layout.jsx'
import Reportcases from './pages/Reportcases.jsx';
import Errorpage from './pages/Errorpage.jsx';
import Adminlogin from './pages/Adminlogin.jsx'
import Dashboard from './pages/Dashboard.jsx';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Overview from './pages/Overview.jsx';
import Cases from './pages/Cases.jsx';
import Contacts from './pages/Contacts.jsx';
import Usermanagement from './pages/Usermanagement.jsx';


function App() {


  return (
    <>
      <Router>
        <Routes>
          {/* Routes with layout (navbar and footer) */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/aboutus" element={<Layout><Aboutus /></Layout>} />
          <Route path="/contactus" element={<Layout><Contactus /></Layout>} />
          <Route path="/services" element={<Layout><Services /></Layout>} />
          <Route path="/reportcases" element={<Layout><Reportcases /></Layout>} />
          {/* Routes without layout (no navbar and footer) */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verifyaccount" element={<Verifyaccount />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/adminlogin" element={<Adminlogin />} />
          <Route path="*" element={<Layout><Errorpage /></Layout>} />
          <Route path="/dashboard" element={<Dashboard />} >
            <Route index element={<Overview />} />
            <Route path="cases" element={<Cases />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="usermanagement" element={<Usermanagement/>} />
          </Route>

        </Routes>
      </Router>

    </>
  )
}

export default App