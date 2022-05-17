import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';



const Navigationbar = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand>Nonprofit's College Internships Board</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                <Nav.Link as={Link} to='/add'>Add Internship</Nav.Link>
                <Nav.Link as={Link} to='/staff'>Career Success Staff</Nav.Link>
                <Nav.Link as={Link} to='/filter'>Filter By Staff</Nav.Link>
            </Nav>
        </Navbar>
    );
}


export default Navigationbar;