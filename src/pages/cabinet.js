import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Member from "../components/member"
import BackgroundImage from "gatsby-background-image"
import { GatsbyImage } from "gatsby-plugin-image"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      david: file(relativePath: { eq: "images/cabinet/david.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.5)
        }
      }
      yao: file(relativePath: { eq: "images/cabinet/yao.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.5)
        }
      }
      bobby: file(relativePath: { eq: "images/cabinet/bobby.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.5)
        }
      }
      felicity: file(relativePath: { eq: "images/cabinet/felicity.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.5)
        }
      }
      all: file(relativePath: { eq: "images/cabinet/all_srs.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Cabinet" />
      <BackgroundImage
          fluid={data.all.childImageSharp.fluid}
          className="px-8 lg:px-16 pt-16 min-h-screen pb-20 lg:pl-xs"
          style={{ columns: "3 400px", columnGap: "0.75rem", paddingTop: "65vh", backgroundAttachment: "fixed", backgroundColor: "rgba(0,0,0,.75)", backgroundBlendMode: "multiply" }}>
          <div className="inline-block text-xl lg:text-3xl mb-8" style={{ fontVariationSettings: "'wdth' 125, 'wght' 400" }}>
            <h1>Everything that isn't rec classes falls under the responsibility of <strong>cabinet</strong>. If you have any questions or concerns, talk to us—we don't bite!</h1>
          </div>
          <Member
            title="Bobby"
            name="Bobby Reilly"
            desc="Bobby is occasionally at practice - not to do anything productive, just to let his anger out on children."
            img={data.bobby.childImageSharp.gatsbyImageData} />
          <Member
            title="President"
            name="Felicity Le"
            desc="Felicity Le is a third year Global Health major in Warren College. She joined wushu when she started college and has enjoyed it ever since. If she’s not at wushu, she can be found at dance practice! She has been dancing her whole life and could not imagine life without it. Along with this, Felicity can commonly be seen surrounded by green things and avocados - both loves of her life."
            img={data.felicity.childImageSharp.gatsbyImageData} />
          <Member
            title="Coach"
            name="David Cao"
            desc="David is a fourth-year computer science & ethnic studies double major in Sixth College. He started training in Shaolin (with the bald monks!) from childhood and has been practicing martial arts and Wushu ever since! When he's not at practice, he can be found dancing, working at SPACES, or generally ✨vibin✨ around campus :^)"
            img={data.david.childImageSharp.gatsbyImageData} />
          <Member
            title="Inventory Manager"
            name="Yao Bi"
            desc="Yao is a third year general biology major in sixth. she did wushu when she was younger for a few years and is now getting back into it. yao does not have free time. but in the fleeting moments of free time that do eventually present themselves, she indulges in exhilarating hobbies such as rewatching haikyuu for the nth time, being delusional about kpop, and succumbing to anxiety. yao can usually be found in lab hoping something doesn't explode (0/4 this week)."
            img={data.yao.childImageSharp.gatsbyImageData} />
        </BackgroundImage>
    </Layout>
  )
}

export default IndexPage
