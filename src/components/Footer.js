import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <footer className="mt-5 j-footer">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}>
            Josh Brown &copy;
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={3}>
            <a
              href="https://www.linkedin.com/in/josh-brown-a874421bb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedIn
            </a>
            <p>&</p>
            <a
              href="https://github.com/natewinter"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;
