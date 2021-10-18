import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Button, Col, Row } from "reactstrap"
import Logo from "../assets/images/wilshireicon.png"
import HandShakeBig from "../assets/images/handshake.jpg"
import PiggyBank from "../assets/images/piggybank.jpg"
import ServicesImage1 from "../assets/images/adults-child-dirt-1006450-300x200.jpg"
import ServicesImage2 from "../assets/images/jason-coudriet-eQux_nmDew0-unsplash-300x200.jpg"
import ServicesImage3 from "../assets/images/helloquence-5fNmWej4tAA-unsplash-300x201.jpg"
import ServicesImage4 from "../assets/images/kelly-sikkema-xoU52jUVUXA-unsplash-300x201.jpg"
import ServicesImage5 from "../assets/images/vladimir-solomyani-rKPiuXLq29A-unsplash-300x200.jpg"
import ServicesImage6 from "../assets/images/pedro-monteiro-HfIex7qwTlI-unsplash-300x200.jpg"
import FamilyBeach from "../assets/images/family-beach.png"
import Carrier1 from "../assets/images/american-national.jpeg"
import Carrier2 from "../assets/images/assurity-logo-0-150x150.png"
import Carrier3 from "../assets/images/john-hancock-logo.png"
import Carrier4 from "../assets/images/lincoln_financial.jpg"
import Carrier5 from "../assets/images/united-home-life.png"
import Carrier6 from "../assets/images/OneAmerica-logo.jpg"

import { FaInfo, FaQuoteLeft, FaPhone, FaGift, FaPeopleCarry, FaSmile, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaHandPointUp, FaHandPointDown, FaThumbsUp } from 'react-icons/fa'
import CarouselSection from "../components/Carousel"
import CarouselReviewsSection from "../components/CarouselReviews"
import CarouselCarrierSection from "../components/CarouselCarriers"
import LandingPageHeader from "../components/LandingPageHeader"
import scrollTo from 'gatsby-plugin-smoothscroll'
import MainNavbar from "../components/NavbarMain"
import DarkFooter from "../components/DarkFooter"
import ZoomMeetingImage from "../assets/flyers/WGFS Estate Financial Planning Zoom Workshop Flyer - oct16.png"
import ZoomMeetingImage2 from "../assets/flyers/WGFS Financial Empowerment Flyer nov-2-21.png"

const rsvpURL = "https://forms.gle/zkio9tYBwNssueBPA";
const rsvpURL2 = "https://forms.gle/KxGVJ1BjVUpTUevK8";
const IndexPage = () => (
  <Layout>
    <MainNavbar />
    <LandingPageHeader />
    <SEO title="Insurance Planning & Wealth Preservation" />
    <div id="upcomingevents" style={{ position: `absolute`, marginTop: `-20px` }}></div>
    <Container className="mt-5 mb-3" style={{
      margin: `0 auto`,
    }}>
      <h1 className="blue text-center">Upcoming Events</h1>
      <hr />
      <div className="d-flex flex-column flex-lg-row" style={{ marginBottom: `20px` }}>
        <div style={{flex: `1`}}>
          <a href={rsvpURL} target="_blank"><img src={ZoomMeetingImage} style={{
            width: `100%`,
            height: `100%`,
            boxShadow: `4px 4px 8px #ddd`,
          }} /></a>
        </div>
        <div style={{ width: `96px`, height: `74px` }}></div>
        <div style={{ flex: `1` }}>
          <a href={rsvpURL2} target="_blank"><img src={ZoomMeetingImage2} style={{
            width: `100%`,
            height: `100%`,
            boxShadow: `4px 4px 8px #ddd`,
          }} /></a>
        </div>

      </div>
      {/* 
      <div className="d-flex flex-column flex-lg-row justify-content-center" style={{ marginBottom: `20px` }}>
        <div className="d-flex flex-column align-items-center p-4">
          <a href={rsvpURL} target="_blank"><img src={ZoomMeetingImage} style={{
            boxShadow: ` 4px 4px 8px #eee`
          }} /></a>
        </div>
        <div className="p-4 mt-2 mt-md-0" style={{ fontSize: `18px` }}>
          <div>
            <h3>Estate & Financial Planning Workshop</h3>
            <h4 className="text-muted"><a href={rsvpURL} target="_blank">Please RSVP now to join!</a></h4>

            <div className="mb-3 meeting-list-detail">
              <div><FaCalendarAlt className="blue"></FaCalendarAlt></div>
              <div>
                <strong>Date:</strong>
                <div>Saturday, March 20, 2021</div>
              </div>
            </div>

            <div className="mb-3 meeting-list-detail">
              <div><FaClock className="blue"></FaClock></div>
              <div>
                <strong>Time:</strong>
                <div>9:00am (Pacific / PST)</div>
              </div>
            </div>

            <div className="mb-3 meeting-list-detail">
              <div><FaMapMarkerAlt className="blue"></FaMapMarkerAlt></div>
              <div>
                <strong>Where:</strong>
                <div>Zoom (Please make sure to have <a href="https://zoom.us/" target="_blank">Zoom</a> installed)</div>
              </div>
            </div>

            <div className="mb-3 meeting-list-detail">
              <div><FaThumbsUp className="blue"></FaThumbsUp></div>
              <div>
                <strong>RSVP:</strong>
                <div><a href={rsvpURL} target="_blank">{rsvpURL}</a></div>
              </div>
            </div>

            <i className="text-muted" style={{ fontSize: '14px' }}>For more information, please call us at (213)-972-8105</i>
          </div>
        </div>
      </div>

      <hr />


      <div className="d-flex flex-column flex-lg-row justify-content-center">
        <div className="p-4 mt-2 mt-md-0" style={{ fontSize: `18px`, flex: '1' }}>
          <div>
            <h3>Financial Empowerment</h3>

            <div className="mb-3 meeting-list-detail">
              <div><FaCalendarAlt className="blue"></FaCalendarAlt></div>
              <div>
                <strong>Date:</strong>
                <div>Tuesday, March 9, 2021</div>
              </div>
            </div>

            <div className="mb-3 meeting-list-detail">
              <div><FaClock className="blue"></FaClock></div>
              <div>
                <strong>Time:</strong>
                <div>6:30pm (Pacific / PST)</div>
              </div>
            </div>

            <div className="mb-3 meeting-list-detail">
              <div><FaMapMarkerAlt className="blue"></FaMapMarkerAlt></div>
              <div>
                <strong>Where:</strong>
                <div>Zoom Meeting ID: 454-726-0931.<br/><a href={rsvpURL2}>{rsvpURL2}</a></div>
              </div>
            </div>

            <div className="mb-4 meeting-list-detail">
              <div><FaThumbsUp className="blue"></FaThumbsUp></div>
              <div>
                <strong>RSVP:</strong>
                <div>mritter@wilshiregfs.com or call (213) 972-8105</div>
              </div>
            </div>

            <i className="text-muted" style={{ fontSize: '14px' }}>For more information, please call us at (213)-972-8105</i>
          </div>
        </div> 
        <div className="d-flex flex-column align-items-center p-4">
          <a href={rsvpURL2} target="_blank"><img src={ZoomMeetingImage2} style={{
            boxShadow: ` 4px 4px 8px #eee`
          }} /></a>
        </div>
      </div> */}

      <div id="aboutus"></div>
    </Container>

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

    {/* <Container style={{
      margin: `0 auto`,
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      textAlign: `center`
    }}>
      <div className="mb-5" style={{ padding: `0 60px` }}>
        <div style={{
          position: `absolute`,
          left: `48px`,
          opacity: ` 0.1`,
          fontSize: `90px`,
          marginTop: `-30px`
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
    </Container> */}
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
    <Container fluid className="reviews big-window" style={{
      padding: `40px`,
      margin: `0 auto`,
      textAlign: `center`,
      background: `url(${FamilyBeach})`,
      backgroundSize: `cover`,
      backgroundPosition: `center center`,
      width: `100%`,
      height: `100%`,
    }}>
      <div className="d-flex align-items-center justify-content-center w-100" style={{ minHeight: `300px` }}>
        <CarouselReviewsSection></CarouselReviewsSection>
      </div>
    </Container>
    <Container className="column-to-row" style={{
      padding: `72px`,
      margin: `0 auto`,
      textAlign: `center`,
      width: `100%`
    }}>
      <h1 className="blue mb-5" style={{ width: `100%` }}>Our Carriers</h1>

      <CarouselCarrierSection></CarouselCarrierSection>
      {/* <Row className="justify-content-between flex-column flex-lg-row carrier-icon-section" >
        <div ><a href="https://img.anicoweb.com/wps/portal/img/home" target="_blank"><img alt="American National" src={Carrier1} /></a></div>
        <div ><a href="https://assurelink.assurity.com" target="_blank"><img alt="Assurity" src={Carrier2} href="" /></a></div>
        <div ><a href="https://advisor.johnhancockinsurance.com/" target="_blank"><img alt="John Hancock" src={Carrier3} /></a></div>
      </Row>
      <Row className="justify-content-between flex-column flex-lg-row carrier-icon-section" >
        <div ><a href="https://www.lfg.com/public/individual" target="_blank"><img alt="Lincoln Financial Group" src={Carrier4} /></a></div>
        <div ><a href="https://www.unitedhomelife.com/UnitedHomeLife/login.jsp" target="_blank"><img alt="United Home Life" src={Carrier5} /></a></div>
        <div ><a href="https://www.oneamerica.com/" target="_blank"><img alt="One America" src={Carrier6} /></a></div>
      </Row> */}
    </Container>

    <DarkFooter style={{
      marginTop: `2rem`
    }}></DarkFooter>
  </Layout>
)

export default IndexPage
