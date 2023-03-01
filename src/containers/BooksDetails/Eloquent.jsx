import React from "react";
import { Card, CardImg, Col, Container, Row } from "react-bootstrap";
import "../Books/Books.css";
import "../../components/Cards/Cards.css";
import cover1 from "../../assets/img/cover1.jpg";

const eloquent = () => {
  return (
    <Container className=" homeStyle2 ">
      <Row className=" bookStyle">
        <Col className=" bookStyle ">
          <img src={cover1} alt="designing" className="imgStyle" />
        </Col>
        <Col >
          <h6> Isbn: 9781593275846</h6>
          <h6> Title: Eloquent JavaScript, Second Edition</h6>
          <h6>Subtitle: A Modern Introduction to Programming</h6>
          <h6> Author: Marijn Haverbeke</h6>
          <h6> Published:2014-12-14T00:00:00.000Z</h6>
          <h6> Publisher: No Starch Press</h6>
          <h6> Pages: 472</h6>
          <h6>
            Description: JavaScript lies at the heart of almost every modern web
            application, from social apps to the newest browser-based games.
            Though simple for beginners to pick up and play with, JavaScript is
            a flexible, complex language that you can use to build full-scale
            applications.
          </h6>
          <h6>Website: http://eloquentjavascript.net/</h6>
          <h6> Category: Classic</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default eloquent;
