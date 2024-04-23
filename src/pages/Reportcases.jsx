import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const Reportcases = () => {

    const [formData, setFormData] = useState({
        email: '',
        incident_address: '',
        abuse_type: '',
        abuse_details: '',
        age: '',
        relationship: '',
        anonymous_YN: '',
        evidence: null,
    });

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
            const response = await axios.post('https://safeheaven-lnt5.onrender.com/user_report', formData);
            console.log(response.data);
            // Reset form data
            setFormData({
                email: '',
                incident_address: '',
                abuse_type: '',
                abuse_details: '',
                age: '',
                relationship: '',
                anonymous_YN: '',
                evidence: null,
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <h3 style={{ textAlign: 'center', marginBottom: '5%' }}>Report Abuse</h3>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col>
                                <Form.Group controlId="formEmail" className="mb-3">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control 
                                    type="email" 
                                    placeholder="Enter your email address"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange} 
                                    />
                                </Form.Group>

                                <Form.Group controlId="formAddress" className="mb-3">
                                    <Form.Label>Address of Incidence</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    placeholder="Enter your address"
                                    name="incident_address"
                                    value={formData.incident_address}
                                    onChange={handleChange} />
                                </Form.Group>
                                <Form.Group controlId="formAbuseType" className="mb-3">
                                    <Form.Label>Type of abuse</Form.Label>
                                    <Form.Control 
                                    as="select"
                                    name="abuse_type"
                                    value={formData.abuse_type}
                                    onChange={handleChange}
                                    >
                                        <option value="Emotional">Emotional</option>
                                        <option value="Physical">Physical</option>
                                        <option value="Sexual">Sexual</option>
                                        <option value="Domestic">Domestic</option>
                                        <option value="Other">Other</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formDescription" className="mb-3" >
                                    <Form.Label>Describe the abuse in detail</Form.Label>
                                    <Form.Control 
                                    as="textarea"  
                                    placeholder="Enter a detailed description of the abuse" 
                                    name="abuse_details"
                                    value={formData.abuse_details}
                                    onChange={handleChange}/>
                                </Form.Group>
                            </Col>

                            <Col style={{}}>
                                <Form.Group controlId="formAge" className="mb-3">
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control 
                                    type="number" 
                                    placeholder="Enter your age"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange} />
                                </Form.Group>
                                <Form.Group controlId="formRelationship" className="mb-3">
                                    <Form.Label>Relationship with abuser</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    placeholder="Enter your relationship with the abuser"
                                    name="relationship"
                                    value={formData.relationship}
                                    onChange={handleChange} />
                                </Form.Group>
                                <Form.Group controlId="formAnonymous" className="mt-4">
                                    <Form.Label>Would you like to remain anonymous to your abuser?</Form.Label>
                                    <div>
                                        <Form.Check
                                            inline
                                            type="radio"
                                            label="Yes"
                                            name="anonymous_YN"
                                            value="Yes"
                                            id="anonymous-yes"
                                            onChange={handleChange}
                                        />
                                        <Form.Check
                                            inline
                                            type="radio"
                                            label="No"
                                            name="anonymous_YN"
                                            value="No"
                                            id="anonymous-no"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </Form.Group>
                                <Form.Group controlId="formEvidence " className="mt-4">
                                    <Form.Label>Upload evidence</Form.Label>
                                    <Form.Control 
                                    type="file"
                                    name="evidence"
                                    onChange={(e) => setFormData(prevState => ({ ...prevState, evidence: e.target.files[0] }))} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button  type="submit" style={{ marginLeft: '40%', backgroundColor: 'rgba(244, 97, 136, 1)' }}>
                            Submit Report
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>

    )
}

export default Reportcases