import React from "react";
import { Button, Container } from "reactstrap";
import { FaInfo, FaPhone } from 'react-icons/fa';
import scrollTo from 'gatsby-plugin-smoothscroll';
import HandShakeImage from "../assets/images/hand-shake-bg.jpg";

function ServicePageHeader() {
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
      <div className="page-header page-header-small clear-filter d-flex flex-column align-items-center justify-content-center " filter-color="blue"
        style={{
          height: `50vh`,
          minHeight: `50vh`,
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
            backgroundImage: `url(${HandShakeImage})`,
          }}
          ref={pageHeader}
        ></div>
        <Container style={{
          margin: `0 auto`,
          textAlign: `left`,
          paddingTop: `12vh`,
          paddingBottom: `40px`,
          display: `flex`,
          justifyContent: `center`
        }}>
          <div className="d-flex flex-column justify-content-center title-section">
            <h1 className="title big-title text-center">Services</h1>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ServicePageHeader;
