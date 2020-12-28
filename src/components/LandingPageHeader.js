import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
import { FaInfo, FaPhone } from 'react-icons/fa';
import scrollTo from 'gatsby-plugin-smoothscroll'
function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small clear-filter" filter-color="blue"
        style={{
          height: `100vh`,
          minHeight: `100vh`,
          maxHeight: `999px`,
          padding: 0,
          color: `#fff`,
          position: `relative`,
          overflow: `hidden`,
          background: `linear-gradient(0deg,rgba(44,44,44,.2),rgba(3,161,224,.6))`
        }}>
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../assets/images/losangeles.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container style={{
          margin: `0 auto`,
          textAlign: `left`,
          paddingTop: `12vh`,
          paddingBottom: `40px`,
          display: `flex`,
          alignItems: `center`
        }}>
          <div className="d-flex flex-column title-section">
            <h1 className="title big-title">Financial Services</h1>
            <h1>Wealth Preservation & Insurance Planning</h1>
            <div className="d-flex flex-column mb-3" style={{
                fontSize: `20px`
              }}>
              <strong>Wilshire Group Financial Services</strong>
              <span>has been providing solutions for</span>
              <span>business and individuals <strong>since 1976.</strong></span>
            </div>
            <div>
              <Button
                className="btn btn-info btn-lg mr-5"
                color="info"
                href="tel:213-972-8105"
                onClick={(e) => e.preventDefault()}
              > 
                <span className="mr-3">213-972-8105</span>
                <FaPhone/>
              </Button>
              <Button
                className="btn btn-info btn-lg"
                color="info"
                onClick={() => scrollTo('#aboutus')}
              > 
                <span className="mr-3">Know More</span>
                <FaInfo/>
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
