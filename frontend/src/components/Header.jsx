import React, { useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {logout,reset} from '../features/auth/authSlice'

function Header() {
  const expand = 'sm';
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleToggleOffcanvas = () => {
    setShowOffcanvas((prevShowOffcanvas) => !prevShowOffcanvas);
  };

  const handleNavItemClick = () => {
    setShowOffcanvas(false); // Close the Offcanvas when a navigation link is clicked
  };

  const { user } = useSelector(state => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = () => {
    if (window.confirm(`Are you sure you want to logout ${user.name.charAt(0).toUpperCase() + user.name.slice(1)}`)) { 
      dispatch(logout())
      navigate('/')
    }
  }

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
              Todo App
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={NavLink} to="/" activeClassName="active" className="btn btn-light ms-2 mb-2" onClick={handleNavItemClick}>
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/my-todos" activeClassName="active" className="btn btn-light ms-2 mb-2" onClick={handleNavItemClick}>
                  My Todos
                </Nav.Link>

                {user ?
                  <button className='btn btn-light ms-2 mb-2'
                  onClick={handleClick}
                  >
                    Logout : {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
                  </button> :
                  <>
                    
                  <Nav.Link as={NavLink} to="/sign-in" activeClassName="active" className="btn btn-light ms-2 mb-2" onClick={handleNavItemClick}>
                  Login
                </Nav.Link>
                <Nav.Link as={NavLink} to="/sign-up" activeClassName="active" className="btn btn-light ms-2 mb-2" onClick={handleNavItemClick}>
                  Register
                </Nav.Link>
                  </>
                }


              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
