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
      kelly: file(relativePath: { eq: "images/cabinet/kelly.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.5)
        }
      }
      terence: file(relativePath: { eq: "images/cabinet/terence.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.5)
        }
      }
      sabrina: file(relativePath: { eq: "images/cabinet/sabrina.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.5)
        }
      }
      brian: file(relativePath: { eq: "images/cabinet/brian.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.5)
        }
      }
      sidney: file(relativePath: { eq: "images/cabinet/sidney.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.5)
        }
      }
      david: file(relativePath: { eq: "images/cabinet/david.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.5)
        }
      }
      kaitlyn: file(relativePath: { eq: "images/cabinet/kaitlyn.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.5)
        }
      }
      may: file(relativePath: { eq: "images/cabinet/may.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.5)
        }
      }
      bobby: file(relativePath: { eq: "images/cabinet/bobby.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.5)
        }
      }
      yy: file(relativePath: { eq: "images/cabinet/yy.jpg" }) {
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
            title="Coach"
            name="Bobby Reilly"
            desc="theres a homeless-looking dude who broke into the rimac to use their showers but somehow got lost and now spends his leisure time yelling at kids that their thumbs need to be tucked"
            img={data.bobby.childImageSharp.gatsbyImageData} />
          <Member
            title="Co-President"
            name="May Ho"
            desc="May Ho is a fourth year student in ERC college. Her major is Chemistry. She started wushu at UCSD Wushu because she wanted to learn a new style of martial arts."
            img={data.may.childImageSharp.gatsbyImageData} />
          <Member
            title="Co-President, Treasurer"
            name="Terence Liu"
            desc="Terence is a fourth year Human Biology major and also the inventory manager of the UCSD Wushu Club. He became interested in martial arts when he watched Jet Li in “Once Upon a Time in China,” and has been a fan since childhood. Despite being in wushu for about a two years, Terence aims to improve himself. He has a sweet tooth and is a Nintendo fan. Also, swords. He likes swords ‘cuz they’re cool."
            img={data.terence.childImageSharp.gatsbyImageData} />
          <Member
            title="Secretary"
            name="Felicity Le"
            desc="Felicity Le is a third year Global Health major in Warren College. She joined wushu when she started college and has enjoyed it ever since. If she’s not at wushu, she can be found at dance practice! She has been dancing her whole life and could not imagine life without it. Along with this, Felicity can commonly be seen surrounded by green things and avocados - both loves of her life."
            img={data.felicity.childImageSharp.gatsbyImageData} />
          <Member
            title="Demo Coordinator"
            name="David Cao"
            desc="David is a third year student at Sixth majoring in Computer Science and minoring in Political Science and Ethnic Studies. He started wushu in elementary school and has been practicing ever since. When he's not at wushu, you can find him dancing, filming videos, or helping design websites for clubs and other people :^)"
            img={data.david.childImageSharp.gatsbyImageData} />
          <Member
            title="Public Relations"
            name="Kelly Tran"
            desc="Kelly Tran is a fourth year student at Sixth College majoring in Speculative Design and minoring in Design and Entrepreneurship. As an interdisciplinary, computing art student she has interest in all mediums of art especially photography."
            img={data.kelly.childImageSharp.gatsbyImageData} />
        </BackgroundImage>
    </Layout>
  )
}

export default IndexPage
