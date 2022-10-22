import React from "react";
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";
import FamilyBeach from "../assets/images/family-beach.png"

const items = [
  {
    message: 'They took care of me to a point where I am a capable individual making independent decisions.',
    author: 'Ronald Reyno'
  },
  {
    message: 'One of the most authentic group of insurance advisors doing great things for their clients! Proud to call them customers and friends! 2016 will be the best year yet!',
    author: 'Jan Zoucha'
  },
  {
    message: 'Best agent...proud to be a client of Wilshire Group Financial Services...I highly recommend this company to my family and friends.',
    author: 'Marivic Perez'
  },
  {
    message: 'First Class organization and people!! Honored to work with Wilshire Group!',
    author: 'Todd Reimers'
  },
  {
    message: 'Wilshire Group Financial is excellent. They always have my best interest in mind when planning my financial future. They are very professional and friendly.',
    author: 'Charlie Chafin'
  },
  
];

function CarouselReviewsSection() {
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
          <div className="w-100" id="carousel-reviews" style={{padding: `16px`}}>
            <Container>
              <Row className="justify-content-center align-items-center">
                <Col className="d-flex justify-content-center align-items-center">
                  <Carousel
                    ride={"carousel"}
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                  >
                    <CarouselIndicators
                      items={items}
                      activeIndex={activeIndex}
                      onClickHandler={goToIndex}
                    />
                    {items.map((item) => {
                      return (
                        <CarouselItem
                          onExiting={onExiting}
                          onExited={onExited}
                          key={item.author}
                        >
                          <h3 style={{fontWeight: `700`, textShadow: `2px 2px 4px #f`}}>{item.message}</h3>
                          <strong>- {item.author}</strong>
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
        </div>
      </Container>
    </>
  );
}

export default CarouselReviewsSection;
