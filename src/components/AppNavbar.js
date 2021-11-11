//Import necessary components from react-bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

//AppNavbar component
export default function AppNavbar(){
    return(
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Zuitt</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Courses</Nav.Link>
            </Nav>            
        </Navbar>
    )
}