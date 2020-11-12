import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function BottomBar() {
  return (
    <Navbar fixed="bottom" expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand href="#">&copy;2018-2019</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default BottomBar;
