import React from 'react';
import { Nav, Button, Navbar } from 'react-bootstrap';
import '../styles/nav.css';

const NavbarComponent = () => {
    return (
        <Navbar variant="light" bg="white" expand="lg" fixed='top'>
            <Navbar.Brand href="/">
                <img
                    src="/path/to/your/logo.png" 
                    width="30" 
                    height="30" 
                    className="d-inline-block align-top"
                    alt="Logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <div className="d-flex justify-content-center w-100">
                <Nav className="">
                    <Nav.Item>
                        <Nav.Link href="/" className="nav-link  me-5" activeClassName="active">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/aboutus" className="nav-link  me-5" activeClassName="active">About Us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/services" className="nav-link  me-5" activeClassName="active">Services</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/contactus" className="nav-link  me-5" activeClassName="active">Contact Us</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav.Item>
                    <Button variant="outline-primary" href="/reportcases" className="report-cases-btn  me-5" style={{ marginRight: '10px' }}>Report Cases</Button>
                </Nav.Item>
                </div>
                
            </Navbar.Collapse>
        </Navbar>
    );
}


export default NavbarComponent;
