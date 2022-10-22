import React from "react";
import { Container, Col, Row } from "reactstrap";
import { FaGift, FaPeopleCarry, FaSmile } from "react-icons/fa";

function HereForYou() {

  return (
    <>
      <Container style={{
        padding: `72px`,
        margin: `0 auto`,
        textAlign: `center`
      }}>
        <h1 className="blue">We're Here For You</h1>
        <Row >
          <Col className="d-flex flex-column align-items-center" md="4" sm="12" >
            <FaGift className="navy" style={{ fontSize: `120px` }}></FaGift>
            <h3 className="navy mt-2">No Direct Charge</h3>
            <p>Our services are provided without direct charge to our clients.</p>
          </Col>
          <Col className="d-flex flex-column align-items-center" md="4" sm="12" >
            <FaPeopleCarry className="navy" style={{ fontSize: `120px` }}></FaPeopleCarry>
            <h3 className="navy mt-2">Working Relationships</h3>
            <p>We maintain working relationships with top professionals in other fields.</p>
          </Col>
          <Col className="d-flex flex-column align-items-center" md="4" sm="12">
            <FaSmile className="navy" style={{ fontSize: `120px` }}></FaSmile>
            <h3 className="navy mt-2">Satisfaction Guaranteed</h3>
            <p>We will prepare your plan entirely at our risk.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HereForYou;
