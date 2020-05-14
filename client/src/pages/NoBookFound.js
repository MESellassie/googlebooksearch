import React from "react";
import Col from "../components/Col";
import Row from "../components/Row";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";

function NoBookFound () {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-white">404 Error</h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoBookFound;