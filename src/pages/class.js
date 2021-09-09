import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      masa20: file(relativePath: { eq: "images/demo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <div className="lg:pl-xs">
        <div className="border-solid lg:border-l min-w-full min-h-screen">
          <BackgroundImage className="px-8 lg:px-16 pt-40 lg:pt-16 pb-8 lg:pb-16 border-solid border-b bg-tint" fluid={data.masa20.childImageSharp.fluid}>
            <h1 className="text-3xl lg:text-4xl mt-auto lg:pr-64 z-10" style={{ fontVariationSettings: "'wdth' 125, 'wght' 700" }}>
              Return to Wushu
            </h1>
              <h3 className="text-lg lg:text-xl text-gray-500" >Last updated <strong>September 9, 2021</strong></h3>
          </BackgroundImage>
          <div className="px-8 lg:px-16 py-16">
            <p className="text-lg max-w-3xl">
                For the 2021-22 school year, UCSD Wushu plans on offering wushu classes primarily in-person. As circumstances evolve, this page will be updated with new information on wushu classes.
            </p>
            <h2 className="text-2xl pt-8 pb-4" style={{ fontVariationSettings: "'wdth' 125, 'wght' 700" }}>Membership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-5xl">
              <div className="border-solid py-6 pl-6 pr-8" style={{ borderWidth: "1px" }}>
                <h1 className="text-xl pb-2" style={{ fontVariationSettings: "'wdth' 125, 'wght' 600" }}>Non-Rec Membership</h1>
                <p className="pb-4 text-gray-400">This membership is required if you plan on attending <strong>non-rec</strong> classes.</p>
                <p className="text-xl">TBD</p>
              </div>
            </div>
            <p className="text-lg max-w-3xl pt-6">
              Wushu classes are divided into two categories: <strong>rec</strong> classes are offered through UCSD Recreation; as a result, payment is handled through the UCSD Recreation website. On the other hand, <strong>non-rec</strong> classes are arranged directly with UCSD Wushu; as a result, we handle payment for these classes. This rec/non-rec divide helps us fund reasonable coaching compensation and other club activities.
            </p>
            <p className="text-lg max-w-3xl pt-3">
              We accept payment in the following forms:
              <ul className="list-disc pt-2">
                <li>Venmo: @UCSD-Wushu</li>
                <li>Zelle: ucsdwushu@gmail.com</li>
                <li>In-person: contact a <Link to="/cabinet" className="border-b border-gray-700 hover:border-gray-100">cabinet member</Link> to make an arrangement</li>
              </ul>
            </p>
            <h2 className="text-2xl pt-8 pb-4" style={{ fontVariationSettings: "'wdth' 125, 'wght' 700" }}>Classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-5xl">
              <div className="border-solid py-6 pl-6 pr-8" style={{ borderWidth: "1px" }}>
                <h1 className="text-xl pb-2" style={{ fontVariationSettings: "'wdth' 125, 'wght' 600" }}>Fundamentals Training</h1>
                <p className="pb-6 text-gray-400">This class will focus on training fundamental techniques to build mastery of the basics. Beginner-friendly, but advanced students welcome!</p>
                <p className="text-lg">Time and Location TBD</p>
              </div>
              <div className="border-solid py-6 pl-6 pr-8" style={{ borderWidth: "1px" }}>
                <h1 className="text-xl pb-2" style={{ fontVariationSettings: "'wdth' 125, 'wght' 600" }}>Competition Training</h1>
                <p className="pb-6 text-gray-400">This training focuses on a wide variety of techniques, with a slant towards preparation for competition (if the health situation allows). All levels welcome!</p>
                <p className="text-lg">Time and Location TBD</p>
              </div>
            </div>
            <p className="text-lg max-w-3xl pt-6">
              Our training will be primarily in-person. More information on time and location will be provided after our GBM.
            </p>
            <h2 className="text-2xl pt-8 pb-4" style={{ fontVariationSettings: "'wdth' 125, 'wght' 700" }}>Safety guidelines</h2>
            <p className="text-lg max-w-3xl">
                In accordance with UCSD Recreation and local guidelines on COVID-19 safety, we will be observing the followingrules for all UCSD Wushu classes.
              <ul className="list-disc pt-2">
                <li>All members will maintain at least six feet of distance.</li>
                <li>No weapons will be shared between members.</li>
                <li>Masks are mandatory during practice.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}


export default IndexPage
