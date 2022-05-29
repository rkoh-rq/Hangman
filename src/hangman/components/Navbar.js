import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

const Navibar = () => {
  return (
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: "none", color: "#FFF" }}>
            Home
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export { Navibar };
