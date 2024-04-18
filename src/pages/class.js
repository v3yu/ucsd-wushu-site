import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      track: file(relativePath: { eq: "images/class/track.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
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
              <h3 className="text-lg lg:text-xl text-gray-500" >Last updated <strong>April 18, 2024</strong></h3>
          </BackgroundImage>
          
          <div className="px-8 lg:px-16 py-16">
            <p className="text-lg max-w-3xl">
            <br></br>For the 2023-24 school year, our club will be hosting our own practices and no longer requires registering through UCSD Recreation. 
            <br></br><br></br>Our classes feature intensive training for individuals of all skill levels. These practices feature technique drills, advanced technique training (e.g. flips), and form tutoring. 
            <br></br><br></br>For live updates regarding classes (especially because of weather), please join our <a className="cyan" href="https://discord.com/invite/F6gSrcG">Discord</a><br></br>
            </p>
            <p className="text-lg max-w-3xl">
              
            </p>
            <h2 className="text-2xl pt-8 pb-4" style={{ fontVariationSettings: "'wdth' 125, 'wght' 700" }}>Classes</h2>
             {<div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-5xl">
              
              <div className="border-solid py-6 pl-6 pr-8" style={{ borderWidth: "1px" }}>
                <h1 className="text-xl pb-2" style={{ fontVariationSettings: "'wdth' 125, 'wght' 600" }}>Sunday Open Training</h1>
                <p className="pb-6 text-gray-400">This class is coached by <strong><Link to="/cabinet" className="border-b border-gray-700 hover:border-gray-100">Nathan</Link></strong>.</p>
                <p className="pb-6 text-gray-400">A class for everyone</p>
                <p className="text-lg">Sunday 3-5pm, Track and Field</p>
              </div>
              <BackgroundImage className="border-solid py-6 pl-6 pr-8" style={{ borderWidth: "1px" }} fluid={data.track.childImageSharp.fluid}>
                <h1 className="text-xl pb-2" style={{ fontVariationSettings: "'wdth' 125, 'wght' 600" }}></h1>
              </BackgroundImage>
              <div className="border-solid py-6 pl-6 pr-8" style={{ borderWidth: "1px" }}>
                <h1 className="text-xl pb-2" style={{ fontVariationSettings: "'wdth' 125, 'wght' 600" }}>Thursday Indoor Training</h1>
                <p className="pb-6 text-gray-400">This class is coached by <strong><Link to="/cabinet" className="border-b border-gray-700 hover:border-gray-100">Alex</Link></strong>.</p>
                <p className="pb-6 text-gray-400">We focus on improving the quality of your combos, basics, and forms </p>
                <p className="text-lg">Wednesday 3-5pm, Check Discord for location (Usually Rimac)</p>
              </div>
              <BackgroundImage className="border-solid py-6 pl-6 pr-8" style={{ borderWidth: "1px" }} fluid={data.masa20.childImageSharp.fluid}>
                <h1 className="text-xl pb-2" style={{ fontVariationSettings: "'wdth' 125, 'wght' 600" }}></h1>
              </BackgroundImage>
              <div className="border-solid py-6 pl-6 pr-8" style={{ borderWidth: "1px" }}>
                <h1 className="text-xl pb-2" style={{ fontVariationSettings: "'wdth' 125, 'wght' 600" }}>Saturday Jumps Practice</h1>
                <p className="pb-6 text-gray-400">This class is coached by Seth.</p>
                <p className="pb-6 text-gray-400">This class is for working on all things jumps. We practice at a carpeted external studio, so check Discord to meetup for rides</p>
                <p className="text-lg">Saturday 6:30-10pm, Golden Dragon </p>
              </div>
              <BackgroundImage className="border-solid py-6 pl-6 pr-8" style={{ borderWidth: "1px" }} fluid={data.masa20.childImageSharp.fluid}>
                <h1 className="text-xl pb-2" style={{ fontVariationSettings: "'wdth' 125, 'wght' 600" }}></h1>
              </BackgroundImage>
      </div>}
            <p className="text-lg max-w-5xl pt-6">
              All classes are arranged directly with the club. For Spring quarter, the pricing will be as follows:
              <li>Thursday and Sunday classes are $25 each</li>
              <li>Saturday class is $80 for the quarter or $10 per visit</li>
            </p>
            <p className="text-lg max-w-5xl pt-3">
              We accept payment in the following forms:
              <ul className="list-disc pt-2">
                <li>Venmo: @Wushu-UCSD</li>
                <li>Zelle: ucsdwushu@gmail.com</li>
                <li>Cash: contact a <Link to="/cabinet" className="border-b border-gray-700 hover:border-gray-100">cabinet member</Link> to make an arrangement</li>
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
