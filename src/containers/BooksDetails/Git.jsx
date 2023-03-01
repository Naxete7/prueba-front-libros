import React from "react";
import { Card, CardImg, Col, Container, Row } from "react-bootstrap";
import "../Books/Books.css";
import "../../components/Cards/Cards.css";
import cover7 from "../../assets/img/cover7.jpg";

const git = () => {
  return (
    <Container className="d-flex flex-wrap flex-direction-row ">
      <Row className="d-flex flex-wrap flex-direction-row bookStyle">
        <Col className="d-flex flex-wrap flex-direction-row bookStyle m-4">
          <img src={cover7} alt="designing" />
        </Col>
        <Col className="d-flex flex-wrap flex-direction-row bookStyle">
          <h6> isbn: 9781449325862</h6>
          <h6> title: Git Pocket Guide</h6>
          <h6>subtitle: A Working Introduction</h6>
          <h6> author: Richard E. Silverman</h6>
          <h6> published:2013-08-02T00:00:00.000Z</h6>
          <h6> publisher: O'Reilly Media</h6>
          <h6> pages: 234</h6>
          <h6>
            description: This pocket guide is the perfect on-the-job companion
            to Git, the distributed version control system. It provides a
            compact, readable introduction to Git for new users, as well as a
            reference to common commands and procedures for those of you with
            Git experience.
          </h6>
          <h6>
            website:
            http://chimera.labs.oreilly.com/books/1230000000561/index.html
          </h6>
          <h6> category: Classic</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default git;
