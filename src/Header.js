import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <Navbar
      style={{ fontWeight: "300", fontFamily: "Montserrat" }}
      bg="light"
      expand="lg"
    >
      <Navbar.Brand style={{ fontWeight: "500" }}>Rel-Event</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/addevent">Add Event</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/myevents">My Events</Link>
          </Nav.Link>
          <NavDropdown title="Events" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Link to="/pastevents">Past Events</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/upcomingevents">Upcoming Events</Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default header;
