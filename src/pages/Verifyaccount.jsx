import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Verifyaccount = () => {
    return (
        <div>
            <h2>Let us know it's you</h2>
            <p>Please enter the 6-digit verification code that was sent to example@gmail.com</p>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Enter 6 digits code</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Continue
            </Button>
        </div>
    )
}

export default Verifyaccount