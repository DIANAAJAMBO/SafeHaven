import React from 'react';
import { Nav, Button, Navbar } from 'react-bootstrap';
import '../styles/nav.css';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/safehavenlogo.png'

const NavbarComponent = () => {
    return (
        <Navbar variant="light" bg="white" expand="lg" fixed='top'>
            <Navbar.Brand href="/" style={{ marginLeft: '3%' }}>
                <img
                    src={Logo}
                    width="150"
                    height="60"
                    className="d-inline-block align-top"
                    alt="Logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <div className="d-flex justify-content-center w-100">
                    <Nav className="">
                        <Nav.Item>
                            <NavLink to="/" className="nav-link  me-5" activeClassName="active">Home</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to="/aboutus" className="nav-link  me-5" activeClassName="active">About Us</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to="/services" className="nav-link  me-5" activeClassName="active">Services</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to="/contactus" className="nav-link  me-5" activeClassName="active">Contact Us</NavLink>
                        </Nav.Item>
                    </Nav>
                    <Nav.Item>
                        <Button as={NavLink} to="/reportcases" id='reportbtn' className="report-cases-btn  me-5" activeClassName="active" style={{ marginRight: '10px' }}>Report Cases</Button>
                    </Nav.Item>
                </div>

            </Navbar.Collapse>
        </Navbar>
    );
}


export default NavbarComponent;
