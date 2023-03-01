import React from "react";
import { Card, CardImg, Col, Container, Row } from "react-bootstrap";
import "../Books/Books.css";
import "../../components/Cards/Cards.css";
import cover2 from "../../assets/img/cover2.jpg";

const learning = () => {
  return (
    <Container className="homeStyle2">
      <Row className=" bookStyle">
        <Col className=" bookStyle">
          <img src={cover2} alt="designing" className="imgStyle" />
        </Col>
        <Col >
          <h6> Isbn: 9781449331818</h6>
          <h6> Title: Learning JavaScript Design Patterns</h6>
          <h6>Subtitle: A JavaScript and jQuery Developer's Guide</h6>
          <h6> Author: Addy Osmani</h6>
          <h6> Published:2012-07-01T00:00:00.000Z</h6>
          <h6> Publisher: O'Reilly Media</h6>
          <h6> Pages: 254</h6>
          <h6>
            Description: With Learning JavaScript Design Patterns, you'll learn
            how to write beautiful, structured, and maintainable JavaScript by
            applying classical and modern design patterns to the language. If
            you want to keep your code efficient, more manageable, and
            up-to-date with the latest best practices, this book is for you.
          </h6>
          <h6>
            Website:
            http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/
          </h6>
          <h6> Category: Fantasy</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default learning;
