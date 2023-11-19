import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom'


function Header() {
  const expand = 'md'
  return (
    <>

        <Navbar expand={expand} className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand as={Link} to='/'>Todo App</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to='/' className='btn btn-light'> Home</Nav.Link>
                  <Nav.Link as={Link} to='/' className='btn btn-light'>My todos</Nav.Link>
                  <Nav.Link as={Link} to='/sign-in' className='btn btn-light'>Login</Nav.Link>
                  <Nav.Link as={Link} to='/sign-up' className='btn btn-light'>Register</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default Header;