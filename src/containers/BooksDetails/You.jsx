import React from "react";
import { Card, CardImg, Col, Container, Row } from "react-bootstrap";
import "../Books/Books.css";
import "../../components/Cards/Cards.css";
import cover6 from "../../assets/img/cover6.jpg";

const you = () => {
  return (
    <Container className=" homeStyle2 ">
      <Row className=" bookStyle">
        <Col className=" bookStyle ">
          <img src={cover6} alt="designing" className="imgStyle" />
        </Col>
        <Col>
          <h6> Isbn: 9781491904244</h6>
          <h6> Title: You Don't Know JS</h6>
          <h6>Subtitle: ES6 & Beyond</h6>
          <h6> Author: Kyle Simpson</h6>
          <h6> Published:2015-12-27T00:00:00.000Z</h6>
          <h6> Publisher: O'Reilly Media</h6>
          <h6> Pages: 278</h6>
          <h6>
            Description: No matter how much experience you have with JavaScript,
            odds are you don’t fully understand the language. As part of the
            \"You Don’t Know JS\" series, this compact guide focuses on new
            features available in ECMAScript 6 (ES6), the latest version of the
            standard upon which JavaScript is built.
          </h6>
          <h6>
            Website:
            https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20&%20beyond
          </h6>
          <h6> Category: Drama</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default you;
