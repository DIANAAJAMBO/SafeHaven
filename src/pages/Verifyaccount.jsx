// import React from 'react'
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// const Verifyaccount = () => {
//     const navigate = useNavigate(); // Hook for navigation
//     const [verificationCode, setVerificationCode] = useState('');

//     const handleChange = (e) => {
//         setVerificationCode(e.target.value);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//           const response = await axios.post('https://safeheaven-lnt5.onrender.com/verifyVerificationCode', { otp: verificationCode });
//           if (response.data.success) {
//             // OTP verification successful
//             navigate('/login'); 
//           } else {
//             setError('Invalid OTP. Please try again.');
//           }
//         } catch (error) {
//           setError('An error occurred. Please try again later.');
//         }
//     };
      
//     return (
//         <Container className="d-flex justify-content-center align-items-center">
//             <Row>
//                 <Col style={{ paddingTop: '20%' }}>
//                     <h2 style={{ textAlign: 'center' }}>Let us know it's you</h2>
//                     <p style={{ textAlign: 'center' }}>Please enter the 6-digit verification code that was sent to example@gmail.com</p>
//                     <Form style={{ width: '100%' }}>
//                         <Form.Group controlId="formBasicPassword">
//                             <Form.Label>Enter 6 digits code</Form.Label>
//                             <Form.Control type="password" placeholder="Password" size="lg" className="mb-3" />
//                         </Form.Group>
//                         <Button  type="submit" size="lg"style={{ width: '100%', backgroundColor: 'rgba(100, 42, 182, 1)' }}>
//                             Continue
//                         </Button>
//                     </Form>
//                 </Col>
//             </Row>
//         </Container>
//     )
// }

// export default Verifyaccount