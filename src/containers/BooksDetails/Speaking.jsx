import React from "react";
import { Card, CardImg, Col, Container, Row } from "react-bootstrap";
import "../Books/Books.css";
import "../../components/Cards/Cards.css";
import cover3 from "../../assets/img/cover3.jpg";

const speaking = () => {
  return (
    <Container className="homeStyle2">
      <Row className=" bookStyle">
        <Col className=" bookStyle">
          <img src={cover3} alt="designing" className="imgStyle" />
        </Col>
        <Col>
          <h6> Isbn: 9781449365035</h6>
          <h6> Title: Speaking JavaScript</h6>
          <h6>Subtitle: An In-Depth Guide for Programmers</h6>
          <h6> Author: Axel Rauschmayer</h6>
          <h6> Published:2014-02-01T00:00:00.000Z</h6>
          <h6> Publisher: O'Reilly Media</h6>
          <h6> Pages: 460</h6>
          <h6>
            Description: Like it or not, JavaScript is everywhere these
            days-from browser to server to mobile-and now you, too, need to
            learn the language or dive deeper than you have. This concise book
            guides you into and through JavaScript, written by a veteran
            programmer who once found himself in the same position.
          </h6>
          <h6>Website: http://speakingjs.com/</h6>
          <h6> Category: Fantasy</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default speaking;
