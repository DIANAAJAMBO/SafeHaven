import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Verifyaccount = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center">
            <Row>
                <Col style={{ paddingTop: '20%' }}>
                    <h2 style={{ textAlign: 'center' }}>Let us know it's you</h2>
                    <p style={{ textAlign: 'center' }}>Please enter the 6-digit verification code that was sent to example@gmail.com</p>
                    <Form style={{ width: '100%' }}>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Enter 6 digits code</Form.Label>
                            <Form.Control type="password" placeholder="Password" size="lg" className="mb-3" />
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

export default Verifyaccount