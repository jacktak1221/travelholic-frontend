import React, { Component }  from "react";
import { Route, Link, HashRouter } from "react-router-dom";
//import './Menu.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
//require('bootstrap/dist/css/bootstrap.min.css');


class Menu extends React.Component {
    render() {
        return (
            <div className="container">
                <Navbar fluid collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Scratch</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem href="/signup">Signup</NavItem>
                            <NavItem href="/login">Login</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}


export default Menu;