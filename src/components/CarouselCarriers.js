import React from "react";
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
} from "reactstrap";
import AmericanNational from "../assets/images/american-national.jpeg";
import AssurityLogo from "../assets/images/assurity-logo-0-150x150.png";
import JohnHancockLogo from "../assets/images/john-hancock-logo.png";
import LincolnFinancial from "../assets/images/lincoln_financial.jpg";
import UnitedHomeLife from "../assets/images/united-home-life.png";
import OneAmericaLogo from "../assets/images/OneAmerica-logo.jpg";

const items = [
  {
    src: AmericanNational,
    url: 'https://img.anicoweb.com/wps/portal/img/home'
  },
  {
    src: AssurityLogo,
    url: 'https://assurelink.assurity.com'
  },
  {
    src: JohnHancockLogo,
    url: 'https://advisor.johnhancockinsurance.com/'
  },
  {
    src: LincolnFinancial,
    url: 'https://www.lfg.com/public/individual'
  },
  {
    src: UnitedHomeLife,
    url: 'https://www.unitedhomelife.com/UnitedHomeLife/login.jsp'
  },
  {
    src: OneAmericaLogo,
    url: 'https://www.oneamerica.com/'
  }
];

function CarouselCarrierSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <Container className="column-to-row" style={{
        padding: `72px`,
        margin: `0 auto`,
        textAlign: `center`,
        width: `100%`
      }}>
        <h1 className="blue mb-5" style={{ width: `100%` }}>Our Carriers</h1>
        <div id="carousel" className="carriers" style={{ padding: `0 32px 32px 32px;` }}>
          <Container>
            <Row className="justify-content-center align-items-center">
              <Col className="d-flex justify-content-center align-items-center">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                  ride={"carousel"}
                >
                  {items.map((item) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <div style={{height: `100%`, display: `flex`, alignItems: `center`, justifyContent: `center`}}><img src={item.src} alt={item.altText} /></div>
                        <div className="carousel-caption">
                          <a href={item.url} target='_blank'><strong>Visit Website</strong></a>
                        </div>
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="carousel-control-prev"
                    data-slide="prev"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <i className="now-ui-icons arrows-1_minimal-left"></i>
                  </a>
                  <a
                    className="carousel-control-next"
                    data-slide="next"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <i className="now-ui-icons arrows-1_minimal-right"></i>
                  </a>
                </Carousel>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
}

export default CarouselCarrierSection;
