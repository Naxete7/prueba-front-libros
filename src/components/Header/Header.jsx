import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Header.css";


const header = () => {
    
    return (
      <Container className="headerStyle">
        <Row className="d-flex flex-direction ">
          <Col >
            <a href="/">HOME</a>
          </Col>
          <Col >
            <a href="/books">BOOKS</a>
          </Col>
        </Row>
      </Container>
    );
}

export default header;