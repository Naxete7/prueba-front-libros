import React from "react";
import { Card, CardImg, Col, Container, Row } from "react-bootstrap";
import "../Books/Books.css";
import "../../components/Cards/Cards.css";
import cover6 from "../../assets/img/cover6.jpg";

const you = () => {
  return (
    <Container className="d-flex flex-wrap flex-direction-row ">
      <Row className="d-flex flex-wrap flex-direction-row bookStyle">
        <Col className="d-flex flex-wrap flex-direction-row bookStyle m-4">
          <img src={cover6} alt="designing" />
        </Col>
        <Col className="d-flex flex-wrap flex-direction-row bookStyle">
          <h6> isbn: 9781491904244</h6>
          <h6> title: You Don't Know JS</h6>
          <h6>subtitle: ES6 & Beyond</h6>
          <h6> author: Kyle Simpson</h6>
          <h6> published:2015-12-27T00:00:00.000Z</h6>
          <h6> publisher: O'Reilly Media</h6>
          <h6> pages: 278</h6>
          <h6>
            description: No matter how much experience you have with JavaScript,
            odds are you don’t fully understand the language. As part of the
            \"You Don’t Know JS\" series, this compact guide focuses on new
            features available in ECMAScript 6 (ES6), the latest version of the
            standard upon which JavaScript is built.
          </h6>
          <h6>
            website:
            https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20&%20beyond
          </h6>
          <h6> category: Drama</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default you;
