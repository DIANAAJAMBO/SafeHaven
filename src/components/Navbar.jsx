import React from 'react'
import {Nav, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Nav variant="pills" defaultActiveKey="/home" style={{marginTop:''}}>
            <Nav.Item>
                <Nav.Link href="/" className="nav-link" >Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/aboutus" className="nav-link">About Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/services" className="nav-link" >Services</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/contactus" className="nav-link">Contact Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Button variant="primary" href="/report" style={{ marginRight: '10px' }}>Report Cases</Button>
            </Nav.Item>
        </Nav>
    );
}

export default Navbar