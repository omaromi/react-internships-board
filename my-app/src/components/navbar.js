import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';

const Navigationbar = ({handleStaffClick}) => {
    return ( 
        <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Nonprofit's College Internships Board</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Add Internship</Nav.Link>
            <Nav.Link as='button' className= 'btn btn-outline-primary' onClick={handleStaffClick}>Career Success Staff</Nav.Link>
            <Nav.Link href="#pricing">Some Other Function</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    );
}
 
export default Navigationbar;