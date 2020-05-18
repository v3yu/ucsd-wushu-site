import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      demo: file(relativePath: { eq: "images/demo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      gen: file(relativePath: { eq: "images/gen.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <div className="min-h-screen flex lg:pl-xs">
        <div className="border-solid lg:border-l flex items-stretch flex-col w-full max-w-full">
          <BackgroundImage
            className="p-8 lg:px-16 lg:py-12 flex-grow flex w-full text-xl lg:text-4xl lg:pr-64 z-10 border-solid border-b bg-tint"
            fluid={data.demo.childImageSharp.fluid}>
            <h1 className="mt-auto" style={{ fontVariationSettings: "'wdth' 105" }}>
              For demo-related inquiries:
              <br />
              <a
                className="border-b border-transparent hover:border-gray-100"
                style={{ fontVariationSettings: `'wdth' 125, 'wght' 700` }}
                href="mailto:demos@ucsdwushu.org">demos@ucsdwushu.org</a>
            </h1>
          </BackgroundImage>
          <BackgroundImage
            className="p-8 lg:px-16 lg:py-12 flex-grow flex text-xl lg:text-4xl lg:pr-64 z-10 bg-tint"
            fluid={data.gen.childImageSharp.fluid}>
            <h1 className="mt-auto" style={{ fontVariationSettings: "'wdth' 105" }}>
              For everything else:
              <br />
              <a
                className="border-b border-transparent hover:border-gray-100"
                style={{ fontVariationSettings: `'wdth' 125, 'wght' 700` }}
                href="mailto:contact@ucsdwushu.org">contact@ucsdwushu.org</a>
            </h1>
          </BackgroundImage>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
