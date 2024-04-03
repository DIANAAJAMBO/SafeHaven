import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Reportcases = () => {
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <h3 style={{ textAlign: 'center', marginBottom: '5%' }}>Report Abuse</h3>
                    <Form>
                        <Row className="mb-3">
                            <Col>
                                <Form.Group controlId="formEmail" className="mb-3">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email address" />
                                </Form.Group>

                                <Form.Group controlId="formAge" className="mb-3">
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control type="number" placeholder="Enter your age" />
                                </Form.Group>

                                <Form.Group controlId="formAddress" className="mb-3">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your address" />
                                </Form.Group>
                                <Form.Group controlId="formDescription" className="mb-3" >
                                    <Form.Label>Describe the abuse in detail</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Enter a detailed description of the abuse" />
                                </Form.Group>
                            </Col>

                            <Col style={{}}>
                                <Form.Group controlId="formRelationship" className="mb-3">
                                    <Form.Label>Relationship with abuser</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your relationship with the abuser" />
                                </Form.Group>

                                <Form.Group controlId="formAbuseType" className="mb-3">
                                    <Form.Label>Type of abuse</Form.Label>
                                    <Form.Control as="select">
                                        <option>Emotional</option>
                                        <option>Physical</option>
                                        <option>Sexual</option>
                                        <option>Financial</option>
                                        <option>Other</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId="formAnonymous" className="mb-3">
                                    <Form.Label>Remain anonymous</Form.Label>
                                    <div>
                                        <Form.Check
                                            inline
                                            type="radio"
                                            label="Yes"
                                            name="anonymous"
                                            id="anonymous-yes"
                                        />
                                        <Form.Check
                                            inline
                                            type="radio"
                                            label="No"
                                            name="anonymous"
                                            id="anonymous-no"
                                        />
                                    </div>
                                </Form.Group>
                                <Form.Group controlId="formEvidence "className="mb-3">
                                    <Form.Label>Upload evidence</Form.Label>
                                    <Form.Control type="file" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant="primary" type="submit" >
                            Submit Report
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>

    )
}

export default Reportcases