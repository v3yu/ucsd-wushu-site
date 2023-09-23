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
              <h3 className="text-lg lg:text-xl text-gray-500" >Last updated <strong>Sep 23, 2023</strong></h3>
          </BackgroundImage>
          
          <div className="px-8 lg:px-16 py-16">
            <p className="text-lg max-w-3xl">
            <br></br>For the 2023-24 school year, our club will be hosting our own practices and no longer requires registering through UCSD Recreation. 
            <br></br><br></br>Our classes will feature intensive training for individuals of all skill levels, beginning and advanced alike. All classes feature technique drills, advanced technique training (e.g. flips) for advanced students, and form teaching and practice. 
            <br></br><br></br>When official practices start in the Fall, we will update this page to show the class schedule. In the meantime, please check the discord, which you can join from our <a className="purple" href="https://linktr.ee/ucsdwushu">Linktree</a><br></br>
            </p>
            <p className="text-lg max-w-3xl">
              
            </p>
            <h2 className="text-2xl pt-8 pb-4" style={{ fontVariationSettings: "'wdth' 125, 'wght' 700" }}>Classes</h2>
             {/*<div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-5xl">
              
              *<div className="border-solid py-6 pl-6 pr-8" style={{ borderWidth: "1px" }}>
                <h1 className="text-xl pb-2" style={{ fontVariationSettings: "'wdth' 125, 'wght' 600" }}>Sunday Open Training</h1>
                <p className="pb-6 text-gray-400">This class is coached by <strong>Nathan</strong>.</p>
                <p className="pb-6 text-gray-400">hi yall</p>
                <p className="text-lg">Sunday 3-5p, Pangea/Marshall Field (Check Discord)<br></br>Cost: $28</p>
              </div>
              <BackgroundImage className="border-solid py-6 pl-6 pr-8" style={{ borderWidth: "1px" }} fluid={data.masa20.childImageSharp.fluid}>
                <h1 className="text-xl pb-2" style={{ fontVariationSettings: "'wdth' 125, 'wght' 600" }}>Marshall Field</h1>
              </BackgroundImage>
              <div className="border-solid py-6 pl-6 pr-8" style={{ borderWidth: "1px" }}>
                <h1 className="text-xl pb-2" style={{ fontVariationSettings: "'wdth' 125, 'wght' 600" }}>Rec Training</h1>
                <p className="pb-6 text-gray-400">This class is coached by not <strong>David</strong>.</p>
                <p className="pb-6 text-gray-400">something</p>
                <p className="text-lg">Monday 7-9p, Rimac Room 3<br></br>Register via <a className="purple" href="https://rec.ucsd.edu/Program/GetProgramDetails?courseId=c347f814-b6d1-4135-9b1f-f75256df5a98&semesterId=9862f197-a38e-4d9d-bc31-348fd4f119ae">rec.ucsd.edu</a></p>
              </div>
              <BackgroundImage className="border-solid py-6 pl-6 pr-8" style={{ borderWidth: "1px" }} fluid={data.masa20.childImageSharp.fluid}>
                <h1 className="text-xl pb-2" style={{ fontVariationSettings: "'wdth' 125, 'wght' 600" }}>Location TBD</h1>
              </BackgroundImage>
              <div className="border-solid py-6 pl-6 pr-8" style={{ borderWidth: "1px" }}>
                <h1 className="text-xl pb-2" style={{ fontVariationSettings: "'wdth' 125, 'wght' 600" }}>Wednesday Open Training</h1>
                <p className="pb-6 text-gray-400">This class is coached by <strong>Serena</strong>.</p>
                <p className="pb-6 text-gray-400">yay</p>
                <p className="text-lg">Thursday 4-6p, Rimac Room 1 (Check Discord)<br></br>Cost: $28</p>
              </div>
              <BackgroundImage className="border-solid py-6 pl-6 pr-8" style={{ borderWidth: "1px" }} fluid={data.masa20.childImageSharp.fluid}>
                <h1 className="text-xl pb-2" style={{ fontVariationSettings: "'wdth' 125, 'wght' 600" }}>Location TBD</h1>
              </BackgroundImage>
  </div>*/}
            <p className="text-lg max-w-5xl pt-6">
              All classes are arranged directly with UCSD Wushu; as a result, we handle payment for these classes.
            </p>
            <p className="text-lg max-w-5xl pt-3">
              We accept payment in the following forms:
              <ul className="list-disc pt-2">
                <li>Venmo: @UCSD-Wushu</li>
                <li>Zelle: ucsdwushu@gmail.com</li>
                <li>In-person: contact a <Link to="/cabinet" className="border-b border-gray-700 hover:border-gray-100">cabinet member</Link> to make an arrangement</li>
              </ul>
            </p>
            <h2 className="text-5xl pt-8 pb-4" style={{ fontVariationSettings: "'wdth' 125, 'wght' 700" }}>Safety guidelines</h2>
            <p className="text-lg max-w-3xl">
                In accordance with UCSD Policy, wearing masks is optional but are still recommended during indoor practices
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}


export default IndexPage
