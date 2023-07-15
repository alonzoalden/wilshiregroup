import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import CarouselReviewsSection from "../components/CarouselReviews";
import CarouselCarrierSection from "../components/CarouselCarriers";
import LandingPageHeader from "../components/LandingPageHeader";
import MainNavbar from "../components/NavbarMain";
import DarkFooter from "../components/DarkFooter";
import UpcomingEvents from "../components/UpcomingEvents";
import AboutUs from "../components/AboutUs";
import OurServices from "../components/OurServices";
import WhyChooseUs from "../components/WhyChooseUs";
import HereForYou from "../components/HereForYou";

const IndexPage = () => (
  <Layout>
    <MainNavbar />
    <LandingPageHeader />
    <SEO title="Insurance Planning & Wealth Preservation" />
    <div id="upcomingevents" style={{ position: `absolute`, marginTop: `-44px` }}></div>
    <UpcomingEvents></UpcomingEvents>
    <AboutUs></AboutUs>
    <OurServices></OurServices>
    <WhyChooseUs></WhyChooseUs>
    <HereForYou></HereForYou>
    <CarouselReviewsSection></CarouselReviewsSection>
    <CarouselCarrierSection></CarouselCarrierSection>
    <DarkFooter style={{marginTop: `2rem`}}></DarkFooter>
  </Layout>
);

export default IndexPage;
