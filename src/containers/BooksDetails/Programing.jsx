import React from "react";
import { Card, CardImg, Col, Container, Row } from "react-bootstrap";
import "../Books/Books.css";
import "../../components/Cards/Cards.css";
import cover4 from "../../assets/img/cover4.jpg";

const programing = () => {
  return (
    <Container className="d-flex flex-wrap flex-direction-row ">
      <Row className="d-flex flex-wrap flex-direction-row bookStyle">
        <Col className="d-flex flex-wrap flex-direction-row bookStyle m-4">
          <img src={cover4} alt="designing" />
        </Col>
        <Col className="d-flex flex-wrap flex-direction-row bookStyle">
          <h6> isbn: 9781491950296</h6>
          <h6> title: Programming JavaScript Applications</h6>
          <h6>
            subtitle: Robust Web Architecture with Node, HTML5, and Modern JS
            Libraries
          </h6>
          <h6> author: Eric Elliott</h6>
          <h6> published:2014-07-01T00:00:00.000Z</h6>
          <h6> publisher: O'Reilly Media</h6>
          <h6> pages: 254</h6>
          <h6>
            description: Take advantage of JavaScript's power to build robust
            web-scale or enterprise applications that are easy to extend and
            maintain. By applying the design patterns outlined in this practical
            book, experienced JavaScript developers will learn how to write
            flexible and resilient code that's easier-yes, easier-to work with
            as your code base grows.
          </h6>
          <h6>
            website:
            http://chimera.labs.oreilly.com/books/1234000000262/index.html
          </h6>
          <h6> category: Drama</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default programing;
