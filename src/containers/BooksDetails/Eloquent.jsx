import React from "react";
import { Card, CardImg, Col, Container, Row } from "react-bootstrap";
import "../Books/Books.css";
import "../../components/Cards/Cards.css";
import cover1 from "../../assets/img/cover1.jpg";

const eloquent = () => {
  return (
    <Container className="d-flex flex-wrap flex-direction-row ">
      <Row className="d-flex flex-wrap flex-direction-row bookStyle">
        <Col className="d-flex flex-wrap flex-direction-row bookStyle m-4">
          <img src={cover1} alt="designing" />
        </Col>
        <Col className="d-flex flex-wrap flex-direction-row bookStyle">
          <h6> isbn: 9781593275846</h6>
          <h6> title: Eloquent JavaScript, Second Edition</h6>
          <h6>subtitle: A Modern Introduction to Programming</h6>
          <h6> author: Marijn Haverbeke</h6>
          <h6> published:2014-12-14T00:00:00.000Z</h6>
          <h6> publisher: No Starch Press</h6>
          <h6> pages: 472</h6>
          <h6>
            description: JavaScript lies at the heart of almost every modern web
            application, from social apps to the newest browser-based games.
            Though simple for beginners to pick up and play with, JavaScript is
            a flexible, complex language that you can use to build full-scale
            applications.
          </h6>
          <h6>website: http://eloquentjavascript.net/</h6>
          <h6> category: Classic</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default eloquent;
