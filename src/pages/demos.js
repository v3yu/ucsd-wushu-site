import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Demo from "../components/demo"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      mae19: file(relativePath: { eq: "images/demos/mae2019.jpg" }) {
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
      cu20: file(relativePath: { eq: "images/demos/2020cu.png" }) {
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
            <h3 className="text-lg lg:text-xl text-gray-500" >Last updated <strong>September 12, 2020</strong></h3>
          </div>
          <BackgroundImage
            className="p-8 lg:px-16 lg:py-12 flex-grow flex w-full text-xl lg:text-4xl z-10 border-solid border-b bg-tint"
            style={{ height: "50vh" }}
            fluid={data.cu20.childImageSharp.fluid}>
            <h1 className="mt-auto text-lg lg:text-xl" style={{ fontVariationSettings: "'wdth' 125" }}>
              Latest demo:
              <br />
              <a href="https://www.youtube.com/watch?v=L09V4YgrePE" class="border-b border-transparent hover:border-gray-100 transition duration-250 text-xl lg:text-3xl" style={{ fontVariationSettings: `'wdth' 125` }}><strong>2020 CU Spring Festival Gala</strong> Jan 26, 2020</a>
            </h1>
          </BackgroundImage>
          <Demo
            name="2020 MASA Asian Night Market"
            date="Jan 17, 2020"
            link="https://www.youtube.com/watch?v=ByxiT98s1oM"
            img={data.masa20.childImageSharp.fluid} />
          <Demo
            name="2019 Martial Arts Expo"
            date="Sept 23, 2019"
            link="https://www.youtube.com/watch?v=rTcJClcF1kQ"
            img={data.mae19.childImageSharp.fluid} />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
