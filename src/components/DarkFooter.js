/*eslint-disable*/
import React from "react";
import Logo from "../assets/images/wilshirelogo-300x46.png"
// reactstrap components
import { Container } from "reactstrap";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import scrollTo from 'gatsby-plugin-smoothscroll'
function DarkFooter() {
  return (
    <>
    <Container fluid style={{backgroundColor: `#eee`}}>
      <Container className="d-flex flex-column flex-md-row w-100 p-3">
        <div className="w-100 mt-2 mr-4">
          <img className="w-100" src={Logo} />
          <p className="mt-3">Connect via social!</p>
          <div className="d-flex">
            <div className="mr-3">
                <a
                  href="https://www.facebook.com/wilshiregfs/"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <FaFacebook style={{fontSize: `32px`}}></FaFacebook>
                </a>
            </div>
            <div className="mr-3">
              <a
                href="https://www.linkedin.com/company/wilshire-group-financial-services/"
                target="_blank"
                id="linkedin-tooltip"
              >
                <FaLinkedin style={{fontSize: `32px`}}></FaLinkedin>
                <p className="d-lg-none d-xl-none">LinkedIn</p>
              </a>
            </div>
            <div className="mr-3">
              <a
                href="https://www.instagram.com/wilshiregroupfinancialservices"
                target="_blank"
                id="instagram-tooltip"
              >
                <FaInstagram style={{fontSize: `32px`}}></FaInstagram>
                <p className="d-lg-none d-xl-none">Instagram</p>
              </a>
            </div>
          </div>
          <div className="mt-3">Contact Info:</div>
          <div className="d-flex flex-column">
            <span >880 West 1st St #614, Los Angeles, CA 90012</span>
            <span >blavares@wilshiregfs.com</span>
          </div>
        </div>
        <div className="links w-100 mt-3">
          <h5>Useful Links</h5>
          <ul>
            <li>
              <a
                href="https://wilshiregfs.com"
                target="_blank"
              >
                Wilshire Group Financial Services
              </a>
            </li>
            <li>
              <a
                className="fake-link"
                onClick={() => scrollTo('#aboutus')}
                target="_blank"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="https://wilshiregfs.com/services"
                target="_blank"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="https://ims4u.net/"
                target="_blank"
              >
                Admin Tools
              </a>
            </li>
          </ul>
        </div>
        <div className="w-100"><iframe src="https://maps.google.com/maps?q=34.057015419421624, -118.25168637534233&z=14&output=embed" width="400" height="220" frameborder="0" style={{border:`0`}}></iframe></div>
      </Container>
    </Container>
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="https://wilshiregfs.com"
                target="_blank"
              >
                Wilshire Group Financial Services
              </a>
            </li>
            {/* <li>
              <a
                href="https://wilshiregfs.com/#about"
                target="_blank"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="http://blog.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
                Admin Portal
              </a>
            </li> */}
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Coded and Designed by Alonzo Alden.
        </div>
      </Container>
    </footer>
    </>
  );
}

export default DarkFooter;
