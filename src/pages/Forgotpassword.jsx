import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Forgotpassword = () => {
    return (
        
        <Container className="d-flex justify-content-center align-items-center">
            <Row>
                <Col style={{ paddingTop: '20%' }}>
                    <h2 style={{ textAlign: 'center' }}>Forgot password?</h2>
                    <p style={{ textAlign: 'center' }}>Input the email address that is linked to your account to recover password</p>
                    <Form style={{ width: '100%' }}>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="password" placeholder="Enter Email" size="lg" className="mb-3" />
                        </Form.Group>
                        <Button variant="primary" type="submit" size="lg"style={{ width: '100%' }}>
                            Continue
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Forgotpassword