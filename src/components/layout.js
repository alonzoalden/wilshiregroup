/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
//import Header from "./header"
import ExamplesNavbar from "./NavbarMain"
// import "../assets/css/bootstrap.min.css"
import "./layout.css"
import "../assets/scss/styles.scss"
import "../assets/scss/now-ui-kit.scss"
import "fontsource-roboto"
import "fontsource-montserrat"
import "fontsource-open-sans"
import DarkFooter from "./DarkFooter"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      
      <div
      >
        <main>{children}</main>
        <DarkFooter style={{
          marginTop: `2rem`
        }}></DarkFooter>
        
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
