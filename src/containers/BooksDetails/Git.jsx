import React from "react";
import { Card, CardImg, Col, Container, Row } from "react-bootstrap";
import "../Books/Books.css";
import "../../components/Cards/Cards.css";
import cover7 from "../../assets/img/cover7.jpg";

const git = () => {
  return (
    <Container className=" homeStyle2 ">
      <Row className=" bookStyle">
        <Col className=" bookStyle ">
          <img src={cover7} alt="designing" className="imgStyle" />
        </Col>
        <Col>
          <h6> Isbn: 9781449325862</h6>
          <h6> Title: Git Pocket Guide</h6>
          <h6>Subtitle: A Working Introduction</h6>
          <h6> Author: Richard E. Silverman</h6>
          <h6> Published:2013-08-02T00:00:00.000Z</h6>
          <h6> Publisher: O'Reilly Media</h6>
          <h6> Pages: 234</h6>
          <h6>
            Description: This pocket guide is the perfect on-the-job companion
            to Git, the distributed version control system. It provides a
            compact, readable introduction to Git for new users, as well as a
            reference to common commands and procedures for those of you with
            Git experience.
          </h6>
          <h6>
            Website:
            http://chimera.labs.oreilly.com/books/1230000000561/index.html
          </h6>
          <h6> Category: Classic</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default git;
