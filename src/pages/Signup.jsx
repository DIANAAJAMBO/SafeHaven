import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import  Woman from '../assets/womanworried.png'
import axios from 'axios';


const Signup = () => {

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    user_password: '',
    verify_code: '',
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://safeheaven-lnt5.onrender.com/signup', formData);
      if (response.status === 200) {
        setOtpSent(true);
      } else {
        setError('Failed to register. Please try again.');

      }
    } catch (error) {
      setError('Failed to register. Please try again.');
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://safeheaven-lnt5.onrender.com/verifyVerificationCode', { verify_code: formData.verify_code });
      if (response.status === 200) {

        navigate('/login');
      } else {
        setError('Invalid OTP. Please try again.');
      }
    } catch (error) {
      setError('Invalid OTP. Please try again.');
    }
  };

  if (otpSent) {
    return (
      <Container className=" verify d-flex justify-content-center align-items-center">
        <Row>
          <Col style={{ paddingTop: '20%' }}>
            <h2 style={{ textAlign: 'center' }}>Let us know it's you</h2>
            <p style={{ textAlign: 'center' }}>Please enter the 6-digit verification code that was sent to example@gmail.com</p>
            <Form style={{ width: '100%' }} onSubmit={handleVerifyOtp}>
              <Form.Group controlId="otp">
                <Form.Label>Enter 6 digits code</Form.Label>
                <Form.Control type="number" placeholder="Enter OTP" size="lg" className="mb-3" value={formData.verify_code} onChange={(e) => setFormData(prevState => ({ ...prevState, verify_code: e.target.value }))} />
              </Form.Group>
              <Button type="submit" size="lg" style={{ width: '100%', backgroundColor: 'rgba(100, 42, 182, 1)' }}>
                Verify OTP
              </Button>
            </Form>
          </Col>
        </Row>
        {error && <div className="alert alert-danger">{error}</div>}
      </Container>
    );
  }

  return (
    <Container fluid>
      <Row>
        <Col lg={6} style={{ padding: '0' }}>
          <img src={Woman} style={{ width: '100%', height: '100vh' }} alt="woman" className='signuppic' />
        </Col>
        <Col lg={6} sm={12} className=" signupform1 d-flex flex-column align-items-center  " style={{ margin: '0px' }}>
          <div className="form-header">
            <h2><b>Create Account</b></h2>
            <p>Begin your journey with us today</p>
          </div>
          <Form style={{ width: '60%' }} onSubmit={handleSubmit} className='signupform'>
            <Form.Group controlId="first_name" className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First name"
                size="md"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="last_name" className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last name"
                size="md" name="last_name"
                value={formData.last_name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="signupEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                size="md"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="signupPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" size="md" name="user_password" value={formData.user_password} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="signupterms&conditions" className="mb-3">
              <Form.Check type="checkbox" label="I accept the terms and conditions" />
            </Form.Group>

            <Button type="submit" className="mb-3" size="lg" style={{ width: '100%', backgroundColor: 'rgba(100, 42, 182, 1)' }}>
              Sign Up
            </Button>
            {/* <p  style={{ textAlign: 'center' }}>OR REGISTER WITH</p> */}
            <p style={{ textAlign: 'center' }}>Already signed up? <a href="/login">Click Here</a></p>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Signup