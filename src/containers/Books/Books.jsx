import React from "react";

import {  CardImg, Col, Container, Row } from "react-bootstrap";
import cover1 from "../../assets/img/cover1.jpg";
import cover2 from "../../assets/img/cover2.jpg";
import cover3 from "../../assets/img/cover3.jpg";
import cover4 from "../../assets/img/cover4.jpg";
import cover5 from "../../assets/img/cover5.jpg";
import cover6 from "../../assets/img/cover6.jpg";
import cover7 from "../../assets/img/cover7.jpg";
import cover8 from "../../assets/img/cover8.jpg";
import { Card } from "react-bootstrap";

const Books = () => {
  return (
    <Container fluid className="homeStyle">
      <h3>NUESTROS LIBROS</h3>
      <Row className="d-flex  flex-wrap justify-content-center align-content-center bookStyle">
        <Col className="d-flex col-4 flex-wrap justify-content-center bookStyle">
          <Card>
            <CardImg variant="top" src={cover1} className="imgStyle2" />
            <Card.Body>
              <Card.Title>
                <a className="homeStyle" href="/eloquent">
                  Programming JavaScript Applications
                </a>
              </Card.Title>
            </Card.Body>
          </Card>
          <br></br>
          <Card>
            <Card.Img variant="top" src={cover2} className="imgStyle2" />
            <Card.Body>
              <Card.Title>
                <a className="homeStyle" href="/learning">
                  Learning JavaScript Design Patterns
                </a>
              </Card.Title>
            </Card.Body>
          </Card>
          <br></br>
          <Card>
            <Card.Img variant="top" src={cover3} className="imgStyle2" />
            <Card.Body>
              <Card.Title>
                <a className="homeStyle" href="/speaking">
                  Speaking JavaScript
                </a>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row className="d-flex  flex-wrap justify-content-center align-content-center bookStyle">
        <Col className="d-flex col-4 flex-wrap justify-content-center bookStyle">
          <Card>
            <Card.Img variant="top" src={cover4} className="imgStyle2" />
            <Card.Body>
              <Card.Title>
                <a className="homeStyle" href="/programing">
                  Programming JavaScript Applications
                </a>
              </Card.Title>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={cover5} className="imgStyle2" />
            <Card.Body>
              <Card.Title>
                <a className="homeStyle" href="/understanding">
                  Understanding ECMAScript 6
                </a>
              </Card.Title>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={cover6} className="imgStyle2" />
            <Card.Body>
              <Card.Title>
                <a className="homeStyle" href="/you">
                  You Don't Know JS
                </a>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row className="d-flex  flex-wrap justify-content-center align-content-center bookStyle">
        <Col className="d-flex col-4 flex-wrap justify-content-center bookStyle">
          <Card>
            <Card.Img variant="top" src={cover7} className="imgStyle2" />
            <Card.Body>
              <Card.Title>
                <a className="homeStyle" href="/git">
                  Git Pocket Guide
                </a>
              </Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={cover8} className="imgStyle2" />
            <Card.Body>
              <Card.Title>
                <a className="homeStyle" href="/designing">
                  Designing Evolvable Web APIs with ASP.NET
                </a>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Books;
