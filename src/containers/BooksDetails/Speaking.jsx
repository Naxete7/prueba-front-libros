import React from "react";
import { Card, CardImg, Col, Container, Row } from "react-bootstrap";
import "../Books/Books.css";
import "../../components/Cards/Cards.css";
import cover3 from "../../assets/img/cover3.jpg";

const speaking = () => {
  return (
    <Container className="d-flex flex-wrap flex-direction-row ">
      <Row className="d-flex flex-wrap flex-direction-row bookStyle">
        <Col className="d-flex flex-wrap flex-direction-row bookStyle m-4">
          <img src={cover3} alt="designing" />
        </Col>
        <Col className="d-flex flex-wrap flex-direction-row bookStyle">
          <h6> isbn: 9781449365035</h6>
          <h6> title: Speaking JavaScript</h6>
          <h6>subtitle: An In-Depth Guide for Programmers</h6>
          <h6> author: Axel Rauschmayer</h6>
          <h6> published:2014-02-01T00:00:00.000Z</h6>
          <h6> publisher: O'Reilly Media</h6>
          <h6> pages: 460</h6>
          <h6>
            description: Like it or not, JavaScript is everywhere these
            days-from browser to server to mobile-and now you, too, need to
            learn the language or dive deeper than you have. This concise book
            guides you into and through JavaScript, written by a veteran
            programmer who once found himself in the same position.
          </h6>
          <h6>website: http://speakingjs.com/</h6>
          <h6> category: Fantasy</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default speaking;
