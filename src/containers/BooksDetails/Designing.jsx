import React from "react";
import { Card, CardImg, Col, Container, Row } from "react-bootstrap";
import "../Books/Books.css";
import "../../components/Cards/Cards.css"
import cover8 from "../../assets/img/cover8.jpg"; 




const designing = () => {
    return (
      <Container className="d-flex flex-wrap flex-direction-row ">
        <Row className="d-flex flex-wrap flex-direction-row bookStyle">
          <Col className="d-flex flex-wrap flex-direction-row bookStyle m-4">
            <img src={cover8} alt="designing" className="imgStyle" />
          </Col>
          <Col className="">
            <h6> isbn: 9781449337711</h6>
            <h6> title: Designing Evolvable Web APIs with ASP.NET</h6>
            <h6>subtitle: Harnessing the Power of the Web</h6>
            <h6> author: Glenn Block, et al.</h6>
            <h6> published:2014-04-07T00:00:00.000Z</h6>
            <h6> publisher: O'Reilly Media</h6>
            <h6> pages: 538</h6>
            <h6>
              description: Design and build Web APIs for a broad range of
              clients—including browsers and mobile devices—that can adapt to
              change over time. This practical, hands-on guide takes you through
              the theory and tools you need to build evolvable HTTP services
              with Microsoft’s ASP.NET Web API framework. In the process, you’ll
              learn how design and implement a real-world Web API.
            </h6>
            <h6>
              website:http://chimera.labs.oreilly.com/books/1234000001708/index.html,
            </h6>
            <h6> category: Suspense</h6>
          </Col>
        </Row>
      </Container>
    );


}

export default designing;