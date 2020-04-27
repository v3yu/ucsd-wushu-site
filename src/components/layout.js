/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import WushuBg from "../assets/wushu_bg_c.mp4"
// import { useStaticQuery, graphql } from "gatsby"

import Nav from "./nav"
import "./layout.css"

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
      <video autoPlay muted loop class="fixed left-0 bottom-0 min-w-full min-h-full z-0" style={{ objectFit: "cover" }}>
        <source src={WushuBg} type="video/mp4" />
      </video>
      <div className="min-h-screen md:flex">
        <div className="md:h-screen flex-none w-full md:max-w-xs text-white z-10">
          <Nav />
        </div>
        <div className="flex-1 z-10 text-gray-100">
          <main>{children}</main>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
