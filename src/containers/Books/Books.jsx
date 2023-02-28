import React from "react";
import "./Books.scss";
import { Button, Col, Container, Row } from "react-bootstrap";
import cover1 from "../../assets/img/cover1.jpg";
import cover3 from "../../assets/img/cover1.jpg";
import cover5 from "../../assets/img/cover1.jpg";
import cover6 from "../../assets/img/cover1.jpg";
import cover7 from "../../assets/img/cover1.jpg";
import cover9 from "../../assets/img/cover1.jpg";
import { Card } from "react-bootstrap";

const Books = () => {
  return (
    <Container fluid className="booksDesign">
      <h3>Nuestros Libros</h3>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src={cover1} />
          </Card>
        </Col>
        <Col>
          <Card></Card>
        </Col>
        <Col>
          <Card></Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card></Card>
        </Col>
        <Col>
          <Card></Card>
        </Col>
        <Col>
          <Card></Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card></Card>
        </Col>
        <Col>
          <Card></Card>
        </Col>
        <Col>
          <Card></Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Books;
