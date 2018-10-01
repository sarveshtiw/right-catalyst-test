import React, { Component } from 'react';
import {LinkContainer} from 'react-router-bootstrap';

import {
    Navbar,
    Nav,
    NavItem,
} from 'react-bootstrap';

import {
  NavLink,
} from 'reactstrap';

function CustomHeader(props) {

    const navbarInstance = (
        <Navbar inverse collapseOnSelect>

          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">REACT CRUD APP</a>
            </Navbar.Brand>
          </Navbar.Header>

            <Nav pullRight>
                <NavItem>
                    <LinkContainer to='/add-item'>
                      <NavLink>Add-New-Article</NavLink>
                    </LinkContainer>
                </NavItem>
            </Nav>

      </Navbar>
    );

    return (
        navbarInstance
    );
}


class Header extends Component {

    render() {
      return (
        <div>
            <CustomHeader />
        </div>
      );
    }
}

export default Header;
