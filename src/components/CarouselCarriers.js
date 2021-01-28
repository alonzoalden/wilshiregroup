import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

// core components

import Carrier1 from "../assets/images/american-national.jpeg"
import Carrier2 from "../assets/images/assurity-logo-0-150x150.png"
import Carrier3 from "../assets/images/john-hancock-logo.png"
import Carrier4 from "../assets/images/lincoln_financial.jpg"
import Carrier5 from "../assets/images/united-home-life.png"
import Carrier6 from "../assets/images/OneAmerica-logo.jpg"


const items = [
  {
    src: require("../assets/images/american-national.jpeg"),
    url: 'https://img.anicoweb.com/wps/portal/img/home'
  },
  {
    src: require("../assets/images/assurity-logo-0-150x150.png"),
    url: 'https://assurelink.assurity.com'
  },
  {
    src: require("../assets/images/john-hancock-logo.png"),
    url: 'https://advisor.johnhancockinsurance.com/'
  },
  {
    src: require("../assets/images/lincoln_financial.jpg"),
    url: 'https://www.lfg.com/public/individual'
  },
  {
    src: require("../assets/images/united-home-life.png"),
    url: 'https://www.unitedhomelife.com/UnitedHomeLife/login.jsp'
  },
  {
    src: require("../assets/images/OneAmerica-logo.jpg"),
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
                {/* <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                /> */}
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
    </>
  );
}

export default CarouselCarrierSection;
