import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
import { FaInfo, FaPhone } from 'react-icons/fa';
import scrollTo from 'gatsby-plugin-smoothscroll'
function LandingPageHeader() {

  const isBrowser = () => typeof window !== "undefined"

  let pageHeader = React.createRef();

  React.useEffect(() => {

    if (!isBrowser) {
      return;
    }
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
      <div className="page-header page-header-small"
        style={{
          height: `100vh`,
          minHeight: `100vh`,
          maxHeight: `999px`,
          padding: 0,
          color: `#fff`,
          position: `relative`,
          overflow: `hidden`,
          transition: `background .3s,border-radius .3s,opacity .3s`
        }}>
        <div
          className="page-header-image"
          ref={pageHeader}
        >
          <div className="overlay"></div>
        </div>
        <Container style={{
          margin: `0 auto`,
          textAlign: `left`,
          paddingTop: `12vh`,
          paddingBottom: `40px`,
          display: `flex`,
          alignItems: `center`
        }}>
          <div className="d-flex flex-column title-section">
            <h1 className="title big-title txtshadow">Financial Services</h1>
            <h1>Wealth Preservation & Insurance Planning</h1>
            <div className="d-flex flex-column mb-3" style={{
                fontSize: `18px`,
                fontWeight: `700`
              }}>
              <strong>Wilshire Group Financial Services </strong>
              <span> has been providing solutions for </span>
              <span> business and individuals <strong>since 1976. </strong></span>
            </div>
            <div>
              <Button
                className="btn btn-info btn-lg mr-5 btn-info-white flex-center"
                color="info"
                href="tel:213-972-8105"
              >
                <span className="mr-3">213-972-8105</span>
                <FaPhone/>
              </Button>
              <Button
                className="btn btn-info btn-lg btn-info-white flex-center"
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
