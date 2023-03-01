import React from "react";
import { Card, CardImg, Col, Container, Row } from "react-bootstrap";
import "../Books/Books.css";
import "../../components/Cards/Cards.css";
import cover5 from "../../assets/img/cover5.jpg";

const understanding = () => {
  return (
    <Container className=" homeStyle2 ">
      <Row className=" bookStyle">
        <Col className=" bookStyle ">
          <img src={cover5} alt="designing" className="imgStyle" />
        </Col>
        <Col>
          <h6> Isbn: 9781593277574</h6>
          <h6> Title: Understanding ECMAScript 6</h6>
          <h6>Subtitle: The Definitive Guide for JavaScript Developers</h6>
          <h6> Author: Nicholas C. Zakas</h6>
          <h6> Published:2016-09-03T00:00:00.000Z</h6>
          <h6> Publisher: No Starch Press</h6>
          <h6> Pages: 352</h6>
          <h6>
            Description: ECMAScript 6 represents the biggest update to the core
            of JavaScript in the history of the language. In Understanding
            ECMAScript 6, expert developer Nicholas C. Zakas provides a complete
            guide to the object types, syntax, and other exciting changes that
            ECMAScript 6 brings to JavaScript.
          </h6>
          <h6>Website: https://leanpub.com/understandinges6/read</h6>
          <h6> Category: Suspense</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default understanding;
