import React from "react";
import { Container, Button, Col, Row } from "reactstrap";
import { FaInfo, FaPhone } from "react-icons/fa";
import HandShakeBig from "../assets/images/handshake.jpg";
import PiggyBank from "../assets/images/piggybank.jpg";

function WhyChooseUs() {

  return (
    <>
      <Container fluid style={{
        margin: `0 auto`,
        padding: `0`,
        backgroundColor: `#eee`
      }}>
        <Row className="w-100 nopadding">
          <Col md="8" sm="12" className="big-window glow-item d-flex flex-column justify-content-center"
            style={{
              minHeight: `595px`,
              padding: `72px`,
              background: `-moz-linear-gradient(left, #E0F2FF 0%, #D4D3FF 100%)`,
              background: `-webkit-linear-gradient(left, #E0F2FF 0%, #D4D3FF 100%)`,
              background: `linear-gradient(to left, #E0F2FF 0%, #D4D3FF 100%)`
            }}>

            <h1 className="navy txtshadow-lite">Why Choose Us?</h1>
            <h2>Individually Tailored Plans</h2>
            <p>
              Our service provides a comprehensive financial plan tailored for your individual circumstances. It will include specific recommendations with clear, detailed instructions. Make an appointment with us at our Los Angeles location, or register for our next Zoom meeting!
            </p>
            <div>
              <Button
                className="btn btn-info btn-lg mr-md-5"
                color="info"
                href="tel:213-972-8105"
              >
                <span className="mr-3">213-972-8105</span>
                <FaPhone />
              </Button>
              <Button
                className="btn btn-info btn-lg"
                color="info"
                href="/services"
              >
                <span className="mr-3">Know More</span>
                <FaInfo />
              </Button>
            </div>
          </Col>
          <Col md="4" sm="12" className="nopadding">
            <div
              className="glow-item nopadding"
              style={{
                background: `url(${HandShakeBig})`,
                backgroundSize: `cover`,
                backgroundPosition: `center center`,
                width: `100%`,
                height: `100%`,
                minHeight: `360px`
              }}
            ></div>
          </Col>
        </Row>
      </Container>
      <Container fluid style={{
        margin: `0 auto`,
        padding: `0`,
        display: `flex`,
        alignItems: `center`,
        textAlign: `start`,
        backgroundColor: `#eee`
      }}>
        <Row className="w-100 nopadding">
          <Col md="4" className="nopadding">
            <div
              className="glow-item nopadding"
              style={{
                background: `url(${PiggyBank})`,
                backgroundSize: `cover`,
                backgroundPosition: `center center`,
                width: `100%`,
                height: `100%`,
                minHeight: `360px`
              }}
            ></div>
          </Col>
          <Col md="8" sm="12" className="glow-item big-window"
            style={{
              padding: `72px`,
              background: `-moz-linear-gradient(top, #FFE0F2 0%, #E5B2C0 100%)`,
              background: `-webkit-linear-gradient(top, #FFE0F2 0%, #E5B2C0 100%)`,
              background: `linear-gradient(to bottom, #FFE0F2 0%, #E5B2C0 100%)`
            }}>
            <h2>Investment Capital Not Required</h2>
            <p>
              Our plans offer recommendations which are non-product in nature. This means you do not have to buy something or invest money.
              </p>
            <p><a href="/services">Learn more...</a></p>

            <h2>No Direct Charge to Clients</h2>
            <p>
              Our services are provided without direct charge to our clients. We are compensated when the clients utilize companies that provide compensation to us.
              </p>
            <p><a href="/services">Learn more...</a></p>

            <Button
              className="btn btn-info btn-lg mr-md-5"
              color="info"
              href="tel:213-972-8105"
            >
              <span className="mr-3">213-972-8105</span>
              <FaPhone />
            </Button>
            <Button
              className="btn btn-info btn-lg"
              color="info"
              href="/services"
            >
              <span className="mr-3">Know More</span>
              <FaInfo />
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default WhyChooseUs;
