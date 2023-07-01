import React from "react";
import BelleLavares from "../assets/images/profile/BelleLavares.jpg";
import ErlinDahl from "../assets/images/profile/ErlinDahl.jpg";
import SolLoualhati from "../assets/images/profile/SolLoualhati.jpg";
import JoannaDellosa from "../assets/images/profile/JoannaDellosa.png";
import PeterLavares from "../assets/images/profile/PeterLavares.png";

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

const items = [
  {
    src: BelleLavares,
    altText: "Belle Lavares",
    caption: "Belle Lavares",
  },
  {
    src: ErlinDahl,
    altText: "Erlin Dahl",
    caption: "Erlin Dahl",
  },
  {
    src: SolLoualhati,
    altText: "Sol Loualhati",
    caption: "Sol Loualhati",
  },
  {
    src: JoannaDellosa,
    altText: "Joanna Dellosa",
    caption: "Joanna Dellosa",
  },
  {
    src: PeterLavares,
    altText: "Peter Lavares",
    caption: "Peter Lavares",
  }
];

function CarouselSection() {
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
      <div id="carousel" className="photos" style={{padding: `32px`}}>
        <Container>
          
          <Row className="justify-content-center align-items-center">
            <Col className="d-flex justify-content-center align-items-center">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                ride={"carousel"}
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
                      key={item.src}
                    >
                      <img src={item.src} alt={item.altText} />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>{item.caption}</h5>
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

export default CarouselSection;
