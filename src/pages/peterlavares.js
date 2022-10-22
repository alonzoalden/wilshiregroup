
import React from "react"
import Layout from "../components/layout"
import { Button, Container } from "reactstrap";
import { FaPhone } from 'react-icons/fa';
import profileImage from "../assets/images/profile/PeterLavares.png"
import headerImage from "../assets/images/peterbackground.jpg"
import "./peterlavares.css"

const PeterLavaresPage = () => {

  // let pageHeader = React.createRef();

  // React.useEffect(() => {
  //   if (window.innerWidth > 991) {
  //     const updateScroll = () => {
  //       let windowScrollTop = window.pageYOffset / 3;
  //       pageHeader.current.style.transform =
  //         "translate3d(0," + windowScrollTop + "px,0)";
  //     };

  //     window.addEventListener("scroll", updateScroll);
  //     return function cleanup() {
  //       window.removeEventListener("scroll", updateScroll);
  //     };
  //   }
  // });
  return <Layout>

    <div className="profile-header page-header page-header-small clear-filter d-flex flex-column align-items-center justify-content-center " filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: `url(${headerImage})`,
          }}
        ></div>

        <div
          className="profile-header-profile-image"
          style={{
            backgroundImage: `url(${profileImage})`,
        }}
        ></div>
        <Container style={{
          margin: `0 auto`,
          textAlign: `left`,
          paddingTop: `100px`,
          paddingBottom: `40px`,
          display: `flex`,
          justifyContent: `center`
        }}>
        </Container>
    </div>



    <Container className="profile-description" style={{
      display: `flex`,
      flexDirection: `column`,
      alignItems: `start`,
      textAlign: `center`
    }}>
      <div className="w-100 p-1 p-md-5">
        <h1 className="header-title">Peter Lavares</h1>
        <div className="header-sub-title">World Traveler, Explorer</div>
        <div className="header-sub-title">Financial Advisor</div>


        {/* <div className="subheader-row">
          Wilshire Group Financial Services
        </div> */}
        {/* <div className="subheader-row">
          <div className="subheader-row-title">Licence #:</div><div className="subheader-row-detail">44HJK123111</div>
        </div> */}

        <div className="profile-button-list">
          <Button
                  className="btn btn-info btn-lg"
                  color="info"
                  href="tel:213-972-8105"
            >
              <span className="mr-3">213-972-8105</span>
              <FaPhone />
          </Button>
          <Button
                  className="btn btn-info btn-lg"
                  color="info"
                  href="https://www.facebook.com/petersam.lavares"
            >
              <span>Facebook</span>
          </Button>
          <Button
                  className="btn btn-info btn-lg"
                  color="info"
                  href="https://www.linkedin.com/in/peter-lavares-6aa35b141/"
            >
              <span>LinkedIn</span>
          </Button>
          <Button
                  className="btn btn-info btn-lg"
                  color="info"
                  href="http://wilshiregfs.com"
                  target="_blank"
            >
              <span >Wilshire Group</span>
          </Button>
          <Button
                  className="btn btn-info btn-lg"
                  color="info"
                  href="mailto:plavares@wilshiregfs.com"
            >
              <span>Email</span>
          </Button>
          <div style={{fontSize: `12px`, fontWeight: `100`, margin: `8px`}}>plavares@wilshiregfs.com</div>

        </div>
      </div>
    </Container>
  </Layout>
}

export default PeterLavaresPage
