import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Demo from "../components/demo"
import { useStaticQuery, graphql } from "gatsby"
import LatestDemo from "../components/latestdemo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      cshp2024: file(relativePath: { eq: "images/demos/2024cshp.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      peppercanyon24: file(relativePath: { eq: "images/demos/peppercanyon24.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      animefest24: file(relativePath: { eq: "images/demos/animefest24.jpg" }) {
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
      <SEO title="Demos" />
      <div className="min-h-screen flex lg:pl-xs">
        <div className="border-solid lg:border-l items-stretch w-full max-w-full">
          <div className="px-8 lg:px-16 pt-40 lg:pt-16 pb-8 lg:pb-16 border-solid border-b">
            <h1 className="text-3xl lg:text-4xl mt-auto lg:pr-64 z-10" style={{ fontVariationSettings: "'wdth' 125, 'wght' 700" }}>
              Demos
            </h1>
            <h3 className="text-lg lg:text-xl text-gray-500" >Last updated <strong>July 30, 2024</strong></h3>
          </div>
          <LatestDemo 
          name="CSHP Culture Fusion"
          date="May 24, 2024"
          link="https://www.youtube.com/watch?v=ROizbtrRuxI"
          img={data.cshp2024.childImageSharp.fluid}/>
          <Demo
            name="Asian Arts at Pepper Canyon"
            date="May 8, 2024"
            link="https://www.youtube.com/watch?v=zGJczFD60Fc"
            img={data.peppercanyon24.childImageSharp.fluid} /> 
            <Demo
            name="Animefest 2024"
            date="February 17, 2024"
            link="https://www.youtube.com/watch?v=yTrPiJzdr68"
            img={data.animefest24.childImageSharp.fluid} />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
