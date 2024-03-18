import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Forgotpassword = () => {
    return (
        <div>
            <h2>Forgot Password?</h2>
            <p>Input the email address that is linked to your account to recover password</p>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="password" placeholder="Enter email" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Continue
            </Button>
        </div>
    )
}

export default Forgotpassword