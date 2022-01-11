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
              Class
            </h1>
              <h3 className="text-lg lg:text-xl text-gray-500" >Last updated <strong>January 2, 2022</strong></h3>
          </BackgroundImage>
          <div className="px-8 lg:px-16 py-16">
            <p className="text-lg max-w-3xl">
              For the remainder of the 2021-22 school year, UCSD Wushu plans on offering wushu classes primarily in-person. All of our classes will be taught outdoors, and will feature intensive training for individuals of all skill levels, beginning and advanced alike. All classes feature technique drills, advanced technique training (e.g. flips) for advanced students, and form teaching and practice.
            </p>
            <p className="text-lg max-w-3xl">
              More information will be provided on this page and through the usual channels (i.e. Discord announcements) as the quarter progresses.
            </p>
            <h2 className="text-2xl pt-8 pb-4" style={{ fontVariationSettings: "'wdth' 125, 'wght' 700" }}>Classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-5xl">
              <div className="border-solid py-6 pl-6 pr-8" style={{ borderWidth: "1px" }}>
                <h1 className="text-xl pb-2" style={{ fontVariationSettings: "'wdth' 125, 'wght' 600" }}>Sunday Open Training</h1>
                <p className="pb-6 text-gray-400">This class is coached by <strong>Bobby</strong> and <strong>David</strong>.</p>
                <p className="pb-6 text-gray-400">Registration for this class is handled directly through UCSD Wushu. (In other words: you can just show up, and we can handle payment and membership later!)</p>
                  <p className="text-lg">Sunday 3-5p, Location TBD | $20</p>
              </div>
              <div className="border-solid py-6 pl-6 pr-8" style={{ borderWidth: "1px" }}>
                <h1 className="text-xl pb-2" style={{ fontVariationSettings: "'wdth' 125, 'wght' 600" }}>Rec Training</h1>
                <p className="pb-6 text-gray-400">This class is coached by <strong>David</strong>.</p>
                <p className="pb-6 text-gray-400">Participating in this class requires registering via the UCSD Recreation website (see below). As such, <strong>space is limited.</strong></p>
                <p className="text-lg">Thursday 3-5p, Muir Field | <a href="https://rec.ucsd.edu/Program/GetProgramDetails?courseId=c347f814-b6d1-4135-9b1f-f75256df5a98&semesterId=9862f197-a38e-4d9d-bc31-348fd4f119ae">Register via rec.ucsd.edu</a></p>
              </div>
            </div>
            <p className="text-lg max-w-3xl pt-6">
              Wushu classes are divided into two categories: <strong>rec</strong> classes are offered through UCSD Recreation; as a result, payment and registration is handled through the UCSD Recreation website. On the other hand, <strong>non-rec</strong> classes are arranged directly with UCSD Wushu; as a result, we handle payment for these classes. This rec/non-rec divide helps us fund reasonable coaching compensation and other club activities.
            </p>
            <p className="text-lg max-w-3xl pt-3">
              For non-rec classes, we accept payment in the following forms:
              <ul className="list-disc pt-2">
                <li>Venmo: @UCSD-Wushu</li>
                <li>Zelle: ucsdwushu@gmail.com</li>
                <li>In-person: contact a <Link to="/cabinet" className="border-b border-gray-700 hover:border-gray-100">cabinet member</Link> to make an arrangement</li>
              </ul>
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
