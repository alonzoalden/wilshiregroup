
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "reactstrap"
import ServicesImage3 from "../assets/images/helloquence-5fNmWej4tAA-unsplash-300x201.jpg"
import ServicesImage4 from "../assets/images/kelly-sikkema-xoU52jUVUXA-unsplash-300x201.jpg"
import ServicesImage5 from "../assets/images/vladimir-solomyani-rKPiuXLq29A-unsplash-300x200.jpg"
import ServicesImage7 from "../assets/images/yellow-flower-300x200.jpg"
import ServicesImage8 from "../assets/images/holdinghands.jpg"
import ServicesImage9 from "../assets/images/wilshiregfs-logo-300x300.jpg"
import ServicePageHeader from '../components/ServicePageHeader'
import ServiceSection from '../components/ServiceSection'
import ServicesNavbar from "../components/NavbarServices"
const IndexPage = () => (
  <Layout>
    <SEO title="Insurance Planning & Wealth Preservation" />
    <ServicesNavbar></ServicesNavbar>
    <ServicePageHeader></ServicePageHeader>
    <div id="upcomingevents" style={{ position: `absolute`, marginTop: `-20px` }}></div>
    <Container className="mt-5" style={{
      margin: `0 auto`,
      paddingBottom: `40px`,
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      textAlign: `start`,
    }}>
      <div className="w-100" style={{
        paddingLeft: `80px`,
        paddingRight: `80px`
      }}>
        <h1 className="blue text-center" style={{ fontWeight: `100` }}>Our Services</h1>
        <div className="text-center mb-4" style={{ fontSize: `18px`, fontWeight: `600` }}><i>"...Our job is to help you navigate through the sea of policy options and clarify any questions or concerns you may have along the way."</i></div>
        {/* <p>You will benefit from a solid foundation of true financial planning that encompasses the following...</p> */}
        <p>Our dedicated team of insurance professionals are here to assist you in securing a Life, Disability, critical Illness and Long Term Care insurance policy to protect you and your loved ones for years to come. With a vast knowledge of our many carriers, we are equipped to shop for the best policy to suit your needs. Our job is to help you navigate through the sea of policy options and clarify any questions or concerns you may have along the way. We've successfully served thousands of customers and are determined to treat each individual with respect and empathy. Shopping for insurance can be difficult, but our team does the work for you. Maintain your peace of mind knowing that we do things the right way.</p>
        <p>Since 1976, our clients' financial well-being has always been our top priority at Wilshire Group Financial Services (WGFS). &nbsp;When you engage with WGFS, a high-level view of your financial plan is reviewed to ensure that all aspects of your planning are addressed. &nbsp;You will benefit from a solid foundation of true financial planning that encompasses:</p><p><i>Estate and Legacy Planning, Risk Management, Retirement and Savings Asset Accumulation, Debt Management, Tax Minimization, and Retirement Income Planning. </i></p><p>Our process is comprehensive and client-centered, relevant throughout the various stages of your life. &nbsp;We achieve this by collaborating with hand-picked lawyers and accountants, and being forward-thinkers utilizing classic financial tools such as:</p><p><i>Life Insurance, Long Term Care Insurance, Disability Insurance, Critical Illness Insurance, and Annuities.</i></p>
        <p>- Wilshire Group Financial Services</p>
      </div>
    </Container>

    <Container className="mt-5" style={{
      paddingBottom: `40px`,
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      textAlign: `start`,
    }}>

      <ServiceSection
        image={ServicesImage3}
        title="Individually Tailored Plans"
        content="Some services provide a general computer report which is much the same for everyone. Our service provides a comprehensive financial plan tailored for your individual circumstances. It will include specific recommendations with clear, detailed instructions."
        id="ServiceSection1"
        reverse={false}
      ></ServiceSection>
      <ServiceSection
        image={ServicesImage5}
        title="Investment Capital Not Required"
        content="Our plans offer recommendations which are non-product in nature. This means you do not have to buy something or invest money. Product recommendations are made only when suitable for your circumstances and potential source of funding can be identified."
        id="ServiceSection2"
        reverse={true}
      ></ServiceSection>
      <ServiceSection
        image={ServicesImage3}
        title="Objective Advice"
        content="Our clients are assured of receiving objective financial advice. Although our independent associates do provide insurance and investment products when requested, we would gladly collaborate with our client’s existing agents or broker if they so desire."
        id="ServiceSection3"
        reverse={false}
      ></ServiceSection>
      <ServiceSection
        image={ServicesImage4}
        title="Ongoing Service"
        content="Once a plan has been prepared, we will assist you in the implementation process. In addition, we offer to conduct reviews with our clients at least once a year to ensure that our planning work remains up to date."
        id="ServiceSection4"
        reverse={true}
      ></ServiceSection>
      <ServiceSection
        image={ServicesImage8}
        title="Working Relationships"
        content="Our firm maintains working relationships with top professionals in other fields. As a result, we can often refer clients to attorneys, accountants and loan officers who will provide valuable assistance. In many cases, these contacts make it possible for clients to implement ideas which might otherwise be difficult to accomplish."
        id="ServiceSection5"
        reverse={false}
      ></ServiceSection>
      <ServiceSection
        image={ServicesImage7}
        title="No Direct Charge To Clients"
        content="Our service are provided without direct charge to our clients. We are compensated when the clients utilize companies that provide compensation to us. Our new clients are derived from direct referrals by our existing clients."
        id="ServiceSection6"
        reverse={true}
      ></ServiceSection>

      <ServiceSection
        image={ServicesImage9}
        title="About Our Staff & Associates"
        content="Our planners are highly trained professionals. They engage in a continuing education program to ensure that their knowledge remains up to date. All planners subscribe to a strict code of ethical and professional conduct. Above all, they genuinely care about their clients and work hard to help them improve their financial futures."
        id="ServiceSection7"
        reverse={false}
      ></ServiceSection>

      <h2 className="mt-5">Contact Us Today!</h2>
    </Container>

  </Layout>
)

export default IndexPage
