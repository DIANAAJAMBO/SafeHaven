import React, {useState} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Image1 from '../assets/Image1.jpg'
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../Authentication/auth';

const login = () => {

  const [formData, setFormData] = useState({
    email: '',
    user_password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const success = await loginUser(formData.email, formData.user_password); // Call the login function
      if (success) {
        navigate('/reportcases'); // Redirect to the reportcases tab
      } else {
        // Handle login failure (e.g., show an error message)
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login failure (e.g., show an error message)
    }
  };

  return (
    <Container fluid>
      <Row >
        <Col lg={5} style={{ padding: '0' }}>
          <img src={Image1} style={{  }} alt="women holding hands" className='loginpic'/>
        </Col>
        <Col lg={7} className="loginform1 d-flex flex-column align-items-center  " style={{ margin: '0px' }} >
          <div style={{ marginTop: '10%' }} className='form-header'>
            <h2>Welcome Back</h2>
            <p>Sign in to continue your progress</p>
          </div>
          <Form style={{ }} onSubmit={handleLogin} className='loginform'>
            <Form.Group controlId="login_email" className="mb-3" >
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email"
                placeholder="Enter email"
                size="lg"
                name="email"
                value={formData.email}
                onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="login_password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password"
                placeholder="Password"
                size="lg"
                name="password"
                value={formData.user_password}
                onChange={handleChange} />
            </Form.Group>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Form.Group controlId="remember_me" className="mb-3">
                <Form.Check type="checkbox" label="Remember Me" />
              </Form.Group>
              <Form.Group controlId="forgot_password">
              <Link to="/forgotpassword">Forgot Password?</Link>
              </Form.Group>
            </div>

            <Button type="submit" size="lg" style={{ width: '100%', backgroundColor: 'rgba(100, 42, 182, 1)' }} className="mb-3" >
              Sign in
            </Button>
            {/* <p style={{ textAlign: 'center' }}>OR LOGIN WITH </p> */}
            <p style={{ textAlign: 'center' }}>Don't have an account? <Link to="/signup">Register here</Link></p>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default login