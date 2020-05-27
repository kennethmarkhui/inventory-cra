import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Navbar, Nav, NavItem } from 'reactstrap';

const Navigation = (props) => {
  return (
    <header className="mb-5 sticky-top">
      <Navbar color="dark" dark>
        <Container>
          <NavLink to="/" className="navbar-brand">
            Inventory
          </NavLink>
          <Nav navbar>
            <NavItem>
              <NavLink to={{ pathname: '/new' }} className="nav-link">
                <FontAwesomeIcon icon="plus" color="white" />
              </NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navigation;
