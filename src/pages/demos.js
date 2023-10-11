import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Demo from "../components/demo"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      cu23: file(relativePath: { eq: "images/demos/2023cu_alt.jpeg" }) {
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
            <h3 className="text-lg lg:text-xl text-gray-500" >Last updated <strong>October 11, 2023</strong></h3>
          </div>
          <BackgroundImage
            className="p-8 lg:px-16 lg:py-12 flex-grow flex w-full text-xl lg:text-4xl z-10 border-solid border-b tiny-bg-tint"
            style={{ height: "50vh" }}
            fluid={data.cu23.childImageSharp.fluid}>
            <h1 className="mt-auto text-lg lg:text-xl" style={{ fontVariationSettings: "'wdth' 125" }}>
              Latest demo:
              <br />
              <p class="border-b border-transparent transition duration-250 text-xl lg:text-3xl" style={{ fontVariationSettings: `'wdth' 125` }}><strong>2023 Chinese Union</strong> Oct 1, 2023</p>
              {/*<a href="https://www.youtube.com/watch?v=7yGQwOhKjh4" class="border-b border-transparent hover:border-gray-100 transition duration-250 text-xl lg:text-3xl" style={{ fontVariationSettings: `'wdth' 125` }}><strong>2022 Wushow</strong> Nov 30, 2022</a>*/}
            </h1>
          </BackgroundImage>
          {/*<Demo
            name="2022 Martial Arts Expo"
            date="Sep 19, 2022"
            link="https://www.youtube.com/watch?v=0qFrq4uYOhg"
            img={data.mae22.childImageSharp.fluid} /> 
          <Demo
            name="2022 Asayake Taiko Spring Concert"
            date="May 1, 2022"
            link="https://www.youtube.com/watch?v=7Hv3kjV-KzM"
  img={data.taiko22.childImageSharp.fluid} /> */}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
