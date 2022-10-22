import React from "react";
import { Container, Col, Row } from "reactstrap";
import ServicesImage1 from "../assets/images/adults-child-dirt-1006450-300x200.jpg";
import ServicesImage2 from "../assets/images/jason-coudriet-eQux_nmDew0-unsplash-300x200.jpg";
import ServicesImage3 from "../assets/images/helloquence-5fNmWej4tAA-unsplash-300x201.jpg";
import ServicesImage4 from "../assets/images/kelly-sikkema-xoU52jUVUXA-unsplash-300x201.jpg";
import ServicesImage5 from "../assets/images/vladimir-solomyani-rKPiuXLq29A-unsplash-300x200.jpg";
import ServicesImage6 from "../assets/images/pedro-monteiro-HfIex7qwTlI-unsplash-300x200.jpg";

function OurServices() {

  return (
    <>
      <Container className="mt-5" style={{
        margin: `0 auto`,
        paddingBottom: `40px`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        textAlign: `center`
      }}>
        <div className="w-100" className="ourservices">
          <h1 className="blue " style={{ fontWeight: `100` }}>Our Services</h1>
          <Row>
            <Col md="4" style={{ overflow: `hidden` }}>
              <a href="/services">
                <div className="glow d-flex align-items-center justify-content-center title-section p-3 mb-4" style={{ overflow: `hidden`, height: `150px`, zIndex: `999 !important`, color: `#fff`, fontSize: `20px`, fontWeight: `600` }}>
                  <div
                    className="p-3 glow-item"
                    style={{
                      position: `absolute`,
                      background: `url(${ServicesImage1})`,
                      backgroundSize: `cover`,
                      backgroundPosition: `center center`,
                      width: `100%`,
                      height: `100%`,
                      zIndex: `-1`
                    }}
                  ><div class="overlay"></div></div>
                  <span>Estate and Legacy planning</span>
                </div>
              </a>
              <a href="/services">
                <div className="glow d-flex align-items-center justify-content-center title-section p-3 mb-4" style={{ overflow: `hidden`, height: `150px`, zIndex: `999 !important`, color: `#fff`, fontSize: `20px`, fontWeight: `600` }}>
                  <div
                    className="p-3 glow-item"
                    style={{
                      position: `absolute`,
                      background: `url(${ServicesImage2})`,
                      backgroundSize: `cover`,
                      backgroundPosition: `center center`,
                      backgroundRepeat: `no-repeat`,
                      width: `100%`,
                      height: `100%`,
                      zIndex: `-1`
                    }}
                  ><div class="overlay overlay-dark"></div></div>
                  <span>Risk Management</span>
                </div>
              </a>
            </Col>
            <Col md="4" style={{ overflow: `hidden` }}>
              <a href="/services">
                <div className="glow d-flex align-items-center justify-content-center title-section p-3 mb-4" style={{ overflow: `hidden`, height: `150px`, zIndex: `999 !important`, color: `#fff`, fontSize: `20px`, fontWeight: `600` }}>
                  <div
                    className="p-3 glow-item"
                    style={{
                      position: `absolute`,
                      background: `url(${ServicesImage3})`,
                      backgroundSize: `cover`,
                      backgroundPosition: `center center`,
                      width: `100%`,
                      height: `100%`,
                      zIndex: `-1`
                    }}
                  ><div class="overlay overlay-dark"></div></div>
                  <span>Debt Management</span>
                </div>
                <div className="glow d-flex align-items-center justify-content-center title-section p-3 mb-4" style={{ overflow: `hidden`, height: `150px`, zIndex: `999 !important`, color: `#fff`, fontSize: `20px`, fontWeight: `600` }}>
                  <div
                    className="p-3 glow-item"
                    style={{
                      position: `absolute`,
                      background: `url(${ServicesImage4})`,
                      backgroundSize: `cover`,
                      backgroundPosition: `center center`,
                      width: `100%`,
                      height: `100%`,
                      zIndex: `-1`
                    }}
                  ><div class="overlay"></div></div>
                  <span>Tax Minimization</span>
                </div>
              </a>
            </Col>
            <Col md="4" style={{ overflow: `hidden` }}>
              <a href="/services">
                <div className="glow d-flex align-items-center justify-content-center title-section p-3 mb-4" style={{ overflow: `hidden`, height: `150px`, zIndex: `999 !important`, color: `#fff`, fontSize: `20px`, fontWeight: `600` }}>
                  <div
                    className="p-3 glow-item"
                    style={{
                      position: `absolute`,
                      background: `url(${ServicesImage5})`,
                      backgroundSize: `cover`,
                      backgroundPosition: `center center`,
                      width: `100%`,
                      height: `100%`,
                      zIndex: `-1`
                    }}
                  ><div class="overlay"></div></div>
                  <span>Retirement and Savings Asset Accumulation</span>
                </div>
              </a>
              <a href="/services">
                <div className="glow d-flex align-items-center justify-content-center title-section p-3 mb-4" style={{ overflow: `hidden`, height: `150px`, zIndex: `999 !important`, color: `#fff`, fontSize: `20px`, fontWeight: `600` }}>
                  <div
                    className="p-3 glow-item"
                    style={{
                      position: `absolute`,
                      background: `url(${ServicesImage6})`,
                      backgroundSize: `cover`,
                      backgroundPosition: `center center`,
                      width: `100%`,
                      height: `100%`,
                      zIndex: `-1`
                    }}
                  ><div class="overlay overlay-dark"></div></div>
                  <span>Retirement Income Planning</span>
                </div>
              </a>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default OurServices;
