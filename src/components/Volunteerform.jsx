import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


const Volunteerform = ({ showModal, handleCloseModal }) => {

    return (
        <>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Join as a volunteer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your first name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your last name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <div className="m-auto">
                        <Button onClick={handleCloseModal} style={{ backgroundColor: 'rgba(244, 97, 136, 1)', color:'white'}}>
                            JOIN
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Volunteerform;