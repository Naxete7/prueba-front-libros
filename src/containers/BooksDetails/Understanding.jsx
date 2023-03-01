import React from "react";
import { Card, CardImg, Col, Container, Row } from "react-bootstrap";
import "../Books/Books.css";
import "../../components/Cards/Cards.css";
import cover5 from "../../assets/img/cover5.jpg";

const understanding = () => {
  return (
    <Container className="d-flex flex-wrap flex-direction-row ">
      <Row className="d-flex flex-wrap flex-direction-row bookStyle">
        <Col className="d-flex flex-wrap flex-direction-row bookStyle m-4">
          <img src={cover5} alt="designing" />
        </Col>
        <Col className="d-flex flex-wrap flex-direction-row bookStyle">
          <h6> isbn: 9781593277574</h6>
          <h6> title: Understanding ECMAScript 6</h6>
          <h6>subtitle: The Definitive Guide for JavaScript Developers</h6>
          <h6> author: Nicholas C. Zakas</h6>
          <h6> published:2016-09-03T00:00:00.000Z</h6>
          <h6> publisher: No Starch Press</h6>
          <h6> pages: 352</h6>
          <h6>
            description: ECMAScript 6 represents the biggest update to the core
            of JavaScript in the history of the language. In Understanding
            ECMAScript 6, expert developer Nicholas C. Zakas provides a complete
            guide to the object types, syntax, and other exciting changes that
            ECMAScript 6 brings to JavaScript.
          </h6>
          <h6>website: https://leanpub.com/understandinges6/read</h6>
          <h6> category: Suspense</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default understanding;
