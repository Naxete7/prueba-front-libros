import React from "react";
import { Card, CardImg, Col, Container, Row } from "react-bootstrap";
import "../Books/Books.css";
import "../../components/Cards/Cards.css";
import cover2 from "../../assets/img/cover2.jpg";

const learning = () => {
  return (
    <Container className="d-flex flex-wrap flex-direction-row ">
      <Row className="d-flex flex-wrap flex-direction-row bookStyle">
        <Col className="d-flex flex-wrap flex-direction-row bookStyle m-4">
          <img src={cover2} alt="designing" />
        </Col>
        <Col className="d-flex flex-wrap flex-direction-row bookStyle">
          <h6> isbn: 9781449331818</h6>
          <h6> title: Learning JavaScript Design Patterns</h6>
          <h6>subtitle: A JavaScript and jQuery Developer's Guide</h6>
          <h6> author: Addy Osmani</h6>
          <h6> published:2012-07-01T00:00:00.000Z</h6>
          <h6> publisher: O'Reilly Media</h6>
          <h6> pages: 254</h6>
          <h6>
            description: With Learning JavaScript Design Patterns, you'll learn
            how to write beautiful, structured, and maintainable JavaScript by
            applying classical and modern design patterns to the language. If
            you want to keep your code efficient, more manageable, and
            up-to-date with the latest best practices, this book is for you.
          </h6>
          <h6>
            website:
            http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/
          </h6>
          <h6> category: Fantasy</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default learning;
