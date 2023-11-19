import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';

function Header() {
  const expand = 'md';
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleToggleOffcanvas = () => {
    setShowOffcanvas((prevShowOffcanvas) => !prevShowOffcanvas);
  };

  const handleNavItemClick = () => {
    setShowOffcanvas(false); // Close the Offcanvas when a navigation link is clicked
  };

  return (
    <>
      <Navbar expand={expand} className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/" activeClassName="active">
            Todo App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={handleToggleOffcanvas} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            show={showOffcanvas}
            onHide={() => setShowOffcanvas(false)}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={NavLink} to="/" activeClassName="active" className="btn btn-light" onClick={handleNavItemClick}>
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/my-todos" activeClassName="active" className="btn btn-light" onClick={handleNavItemClick}>
                  My Todos
                </Nav.Link>
                <Nav.Link as={NavLink} to="/sign-in" activeClassName="active" className="btn btn-light" onClick={handleNavItemClick}>
                  Login
                </Nav.Link>
                <Nav.Link as={NavLink} to="/sign-up" activeClassName="active" className="btn btn-light" onClick={handleNavItemClick}>
                  Register
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
