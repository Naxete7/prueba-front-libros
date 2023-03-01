import React from "react";
import { Card, CardImg, Col, Container, Row } from "react-bootstrap";
import "../Books/Books.css";
import "../../components/Cards/Cards.css";
import cover4 from "../../assets/img/cover4.jpg";

const programing = () => {
  return (
    <Container className="homeStyle2">
      <Row className=" bookStyle">
        <Col className=" bookStyle">
          <img src={cover4} alt="designing" className="imgStyle" />
        </Col>
        <Col>
          <h6> Isbn: 9781491950296</h6>
          <h6> Title: Programming JavaScript Applications</h6>
          <h6>
            Subtitle: Robust Web Architecture with Node, HTML5, and Modern JS
            Libraries
          </h6>
          <h6> Author: Eric Elliott</h6>
          <h6> Published:2014-07-01T00:00:00.000Z</h6>
          <h6> Publisher: O'Reilly Media</h6>
          <h6> Pages: 254</h6>
          <h6>
            Description: Take advantage of JavaScript's power to build robust
            web-scale or enterprise applications that are easy to extend and
            maintain. By applying the design patterns outlined in this practical
            book, experienced JavaScript developers will learn how to write
            flexible and resilient code that's easier-yes, easier-to work with
            as your code base grows.
          </h6>
          <h6>
            Website:
            http://chimera.labs.oreilly.com/books/1234000000262/index.html
          </h6>
          <h6> Category: Drama</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default programing;
