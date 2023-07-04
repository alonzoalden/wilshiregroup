import React, { useState } from "react";
import { FaFacebook, FaFacebookF, FaFacebookSquare, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  NavbarToggler,
  Container,
  UncontrolledTooltip,
  NavbarText
} from "reactstrap";
import Logo from "../assets/images/wilshirelogo-300x46.png"
import scrollTo from 'gatsby-plugin-smoothscroll'


function ServicesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const isBrowser = () => typeof window !== "undefined"
  React.useEffect(() => {

    if (!isBrowser) {

      return;

    }
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (

    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}

      <div>
        <Navbar className="fixed-top" color="light" light expand="lg">
          <Container>
            <NavbarBrand
              href="https://wilshiregfs.com"
              target="_blank"
              id="navbar-brand"
            >
              <img style={{ maxWidth: `255px` }} src={Logo} />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse
              className="justify-content-end"
              isOpen={isOpen}
              navbar
            >
              <Nav navbar>
                <NavItem>
                  <NavLink href="https://wilshiregfs.com" style={{ cursor: `pointer` }}>About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/services" style={{ cursor: `pointer` }}>Services</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/#upcomingevents" style={{ cursor: `pointer` }}>Upcoming Events</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    href="https://www.facebook.com/wilshiregfs/"
                    target="_blank"
                    id="facebook-tooltip"
                  >
                    <FaFacebook style={{ fontSize: `20px` }}></FaFacebook>
                    <p className="ml-2 d-lg-none d-xl-none">Facebook</p>
                  </NavLink>
                  {/* <UncontrolledTooltip target="#facebook-tooltip">
                    Follow us on Facebook
                  </UncontrolledTooltip> */}
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.linkedin.com/company/wilshire-group-financial-services/"
                    target="_blank"
                    id="linkedin-tooltip"
                  >
                    <FaLinkedin style={{ fontSize: `20px` }}></FaLinkedin>
                    <p className="ml-2 d-lg-none d-xl-none">LinkedIn</p>
                  </NavLink>
                  {/* <UncontrolledTooltip target="#linkedin-tooltip">
                    Follow us on LinkedIn
                  </UncontrolledTooltip> */}
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.instagram.com/wilshiregroupfinancialservices"
                    target="_blank"
                    id="instagram-tooltip"
                  >
                    <FaInstagram style={{ fontSize: `20px` }}></FaInstagram>
                    <p className="ml-2 d-lg-none d-xl-none">Instagram</p>
                  </NavLink>
                  {/* <UncontrolledTooltip target="#instagram-tooltip">
                    Follow us on Instagram
                  </UncontrolledTooltip> */}
                </NavItem>
                <NavItem>
                  <NavLink className="center" href="tel:213-972-8105">
                    <strong className="mr-2" style={{ letterSpacing: `1px` }}>213-972-8105</strong>
                    <FaPhone />
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default ServicesNavbar;
