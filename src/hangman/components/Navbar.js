import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navibar = () => {
  return (
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: "none", color: "#FFF" }}>
            Hangman
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export { Navibar };
