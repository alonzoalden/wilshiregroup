import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";
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
import Logo from "../assets/images/cropped-wilshirelogo-284x43.png"

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
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
      {/* <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </div> */}
      <div>
        <Navbar className="fixed-top" color="light" light expand="lg">
          <Container>
            <UncontrolledDropdown className="button-dropdown">
              <DropdownToggle
                caret
                data-toggle="dropdown"
                href="#pablo"
                id="navbarDropdown"
                tag="a"
                onClick={(e) => e.preventDefault()}
              >
                <span className="button-bar"></span>
                <span className="button-bar"></span>
                <span className="button-bar"></span>
              </DropdownToggle>
              <DropdownMenu aria-labelledby="navbarDropdown">
                <DropdownItem header tag="a">
                  Dropdown header
                </DropdownItem>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  Action
                </DropdownItem>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  Another action
                </DropdownItem>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  Something else here
                </DropdownItem>
                <DropdownItem divider></DropdownItem>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  Separated link
                </DropdownItem>
                <DropdownItem divider></DropdownItem>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  One more separated link
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavbarBrand
              href="https://demos.creative-tim.com/now-ui-kit-react/index?ref=nukr-examples-navbar"
              target="_blank"
              id="navbar-brand"
            >
              <img src={Logo} />
            </NavbarBrand>
            
            <NavbarToggler onClick={toggle} />
              {/* <button
                className="navbar-toggler navbar-toggler"
                onClick={() => {
                  document.documentElement.classList.toggle("nav-open");
                  setCollapseOpen(!collapseOpen);
                }}
                aria-expanded={collapseOpen}
                type="button"
              >
                <span className="navbar-toggler-bar top-bar"></span>
                <span className="navbar-toggler-bar middle-bar"></span>
                <span className="navbar-toggler-bar bottom-bar"></span>
              </button> */}
            <Collapse
              className="justify-content-end"
              isOpen={isOpen}
              navbar
            >
              <Nav navbar>
                <NavItem>
                  <NavLink to="/index">
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/creativetimofficial/now-ui-kit-react/issues?ref=creativetim">
                    Services
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/index">
                    Contact Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://twitter.com/CreativeTim?ref=creativetim"
                    target="_blank"
                    id="twitter-tooltip"
                  >
                    <i className="fab fa-twitter"></i>
                    <p className="d-lg-none d-xl-none">Twitter</p>
                  </NavLink>
                  <UncontrolledTooltip target="#twitter-tooltip">
                    Follow us on Twitter
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.facebook.com/CreativeTim?ref=creativetim"
                    target="_blank"
                    id="facebook-tooltip"
                  >
                    <i className="fab fa-facebook-square"></i>
                    <p className="d-lg-none d-xl-none">Facebook</p>
                  </NavLink>
                  <UncontrolledTooltip target="#facebook-tooltip">
                    Like us on Facebook
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                    target="_blank"
                    id="instagram-tooltip"
                  >
                    <i className="fab fa-instagram"></i>
                    <p className="d-lg-none d-xl-none">Instagram</p>
                  </NavLink>
                  <UncontrolledTooltip target="#instagram-tooltip">
                    Follow us on Instagram
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink className="center" href="tel:213-972-8105">
                    <strong className="mr-2" style={{letterSpacing: `1px` }}>213-972-8105</strong>
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

export default ExamplesNavbar;
