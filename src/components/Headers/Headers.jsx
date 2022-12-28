import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-scroll";

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container style={{ height: "100px" }}>
        <Nav.Link>
          <Link to="about">about</Link>
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="Qualification">Qualification</Link></Nav.Link>
            <Nav.Link><Link to="skill">Skill</Link></Nav.Link>
            <Nav.Link><Link to="Project">Project</Link></Nav.Link>
            <Nav.Link><Link to="Contact">Contact</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
