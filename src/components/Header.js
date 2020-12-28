import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {
    return ( 
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="header-c">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto navbar-items">
                    <Nav.Link className="navbar-item" href="#features">Support the team</Nav.Link>
                    <Nav.Link className="navbar-item" href="#pricing">Custom</Nav.Link>
                    <Nav.Link className="navbar-item" href="#features">Support the team</Nav.Link>
                    <Nav.Link className="navbar-item" href="#pricing">More</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
