import React from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";

function Hero(props) {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={true}>
        <Row className="justify-content-center py-5 j-hero">
          <Col md={8} sm={12}>
            {props.title && (
              <h1 className="display-1 font-weight-bolder">
                <span> {props.title}</span>
              </h1>
            )}
            {props.subTitle && (
              <h3 className="display-4 font-weight-dark">
                <span>{props.subTitle}</span>
              </h3>
            )}
            {props.text && (
              <h3 className="lead font-weight-dark">
                <span>{props.text}</span>
              </h3>
            )}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Hero;
