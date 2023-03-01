import React from "react";

import { Button, CardImg, Col, Container, Row } from "react-bootstrap";
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
    <Container fluid className="">
      <h3>NUESTROS LIBROS</h3>
      <Row className="d-flex  flex-wrap justify-content-center align-content-center">
        <Col className="d-flex col-4 flex-wrap justify-content-center">
          <Card>
            <CardImg variant="top" src={cover1} />
            <Card.Body>
              <Card.Title>
                <a href="/eloquent">Programming JavaScript Applications</a>
              </Card.Title>
            </Card.Body>
          </Card>
          <br></br>
          <Card>
            <Card.Img variant="top" src={cover2} />
            <Card.Body>
              <Card.Title>
                <a href="/learning">Learning JavaScript Design Patterns</a>
              </Card.Title>
            </Card.Body>
          </Card>
          <br></br>
          <Card>
            <Card.Img variant="top" src={cover3} />
            <Card.Body>
              <Card.Title>
                {" "}
                <a href="/speaking">Speaking JavaScript</a>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col className="d-flex col-12 flex-wrap  justify-content-center">
          <Card>
            <Card.Img variant="top" src={cover4} />
            <Card.Body>
              <Card.Title>
                {" "}
                <a href="/programing">Programming JavaScript Applications</a>
              </Card.Title>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={cover5} />
            <Card.Body>
              <Card.Title>
                {" "}
                <a href="/understanding">Understanding ECMAScript 6</a>
              </Card.Title>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={cover6} />
            <Card.Body>
              <Card.Title>
                {" "}
                <a href="/you">You Don't Know JS</a>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col className="d-flex col-12 flex-wrap  justify-content-center">
          <Card>
            <Card.Img variant="top" src={cover7} />
            <Card.Body>
              <Card.Title>
                {" "}
                <a href="/git">Git Pocket Guide</a>
              </Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={cover8} />
            <Card.Body>
              <Card.Title>
                {" "}
                <a href="/designing">
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
