import React from "react";
import CarouselSection from "./Carousel";
import { Button, Container } from "reactstrap";
import { FaInfo, FaQuoteLeft, FaPhone } from "react-icons/fa";
import Logo from "../assets/images/wilshireicon.png";
import scrollTo from "gatsby-plugin-smoothscroll";

function AboutUs() {

  return (
    <>
      <Container fluid style={{
        margin: `0 auto`,
        paddingTop: `12vh`,
        paddingBottom: `40px`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        textAlign: `center`,
        background: `linear-gradient(to top right, #fff 25%,transparent 60%) top/100% 100%, linear-gradient(to right, #2CA8FF, #fff), linear-gradient(to top, #2CA8FF, #fff)`,
        backgroundRepeat: `no-repeat`
      }}>
        <Container className="w-100 card d-flex flex-column flex-md-row mb-5" style={{ textAlign: `left` }}>
          <CarouselSection></CarouselSection>
          <div className="d-flex flex-column justify-content-center p-3">
            <div>
              <h2 className="blue" style={{ fontWeight: `400`, marginBottom: `10px` }}>Meet Wilshire Group Financial Services</h2>
              <h3 style={{ fontWeight: `400` }}>Located in Los Angeles, California</h3>
              <p>Since 1976, our clients' financial well being has always been our top priority. When you engage with us, a high level view of your financial plan is reviewed to ensure that all aspect of your planning are addressed.</p>
              <p>We've successfully served thousands of customers and are determined to treat each individual with respect and empathy. Shopping for insurance can be difficult, but our team does the work for you. Maintain your peace of mind knowing that we do things the right way.</p>
              {/* onClick={(e) => e.preventDefault()} */}
              <Button
                className="btn btn-info btn-lg mr-5"
                color="info"
                href="tel:213-972-8105"
              >
                <span className="mr-3">213-972-8105</span>
                <FaPhone />
              </Button>
              <Button
                className="btn btn-info btn-lg"
                color="info"
                onClick={() => scrollTo('#services')}
              >
                <span className="mr-3">Know More</span>
                <FaInfo />
              </Button>
            </div>
          </div>
        </Container>
        <div className="mb-3" style={{ padding: `0 60px`, maxWidth: `1000px` }}>
          <div style={{
            position: `absolute`,
            left: `48px`,
            opacity: ` 0.1`,
            fontSize: `90px`,
            marginTop: `-30px`,

          }}>
            <FaQuoteLeft />
          </div>

          <h3 style={{
            fontWeight: 100
          }}><i>Our dedicated team of insurance and financial professionals are here to protect you and your loved ones for years to come.</i></h3>
          <h3 style={{
            fontWeight: 100
          }}>- Wilshire Group Financial Services</h3>
          <img alt="Wilshire Group Financial Services Logo" src={Logo} />
        </div>
        <div id="services"></div>
      </Container>
    </>
  );
}

export default AboutUs;
