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

const items = [
  {
    src: require("../assets/images/Belle-Lavares-headshot-201x300.jpg"),
    altText: "Belle Lavares",
    caption: "Belle Lavares",
  },
  {
    src: require("../assets/images/Erlin-Dahl-headshot-200x300.jpg"),
    altText: "Erlin Dahl",
    caption: "Erlin Dahl",
  },
  {
    src: require("../assets/images/Sol-Loualhati-headshot-200x300.jpg"),
    altText: "Sol Loualhati",
    caption: "Sol Loualhati",
  },
  {
    src: require("../assets/images/JoannaDellosa.png"),
    altText: "Joanna Dellosa",
    caption: "Joanna Dellosa",
  },
  {
    src: require("../assets/images/Peter-Lavares-headshot.png"),
    altText: "Peter Lavares",
    caption: "Peter Lavares",
  },
  
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
                autoPlay={true}
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
