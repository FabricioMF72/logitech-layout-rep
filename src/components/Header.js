import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
const Header = () => {
    return ( 
        <Navbar collapseOnSelect expand="lg" className="header-c">
            <Navbar.Brand href="#home">
                <Image className="header-logo" src="./imgs/LOGO.png" fluid />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto navbar-items">
                    <Nav.Link className="navbar-item" href="#features"> <h1 className="navbar-text">Support the team</h1> </Nav.Link>
                    <Nav.Link className="navbar-item" href="#pricing"><h1 className="navbar-text">Custom</h1></Nav.Link>
                    <Nav.Link className="navbar-item" href="#features"><h1 className="navbar-text">Support the team</h1></Nav.Link>
                    <Nav.Link className="navbar-item" href="#pricing"><h1 className="navbar-text">More</h1></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
