//Import necessary components from react-bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link, NavLink } from 'react-router-dom';

//AppNavbar component
export default function AppNavbar(){
    return(
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Zuitt</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="ml-auto">
                    <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/courses" exact>Courses</Nav.Link>
                    <Nav.Link as={NavLink} to="/login" exact>Login</Nav.Link>
                    <Nav.Link as={NavLink} to="/register" exact>Register</Nav.Link>
                </Nav>
            </Navbar.Collapse>      
        </Navbar>
    )
}