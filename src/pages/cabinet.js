import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Member from "../components/member"
import BackgroundImage from "gatsby-background-image"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      kelly: file(relativePath: { eq: "images/cabinet/kelly.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      terence: file(relativePath: { eq: "images/cabinet/terence.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      sabrina: file(relativePath: { eq: "images/cabinet/sabrina.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      brian: file(relativePath: { eq: "images/cabinet/brian.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      sidney: file(relativePath: { eq: "images/cabinet/sidney.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      david: file(relativePath: { eq: "images/cabinet/david.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      kaitlyn: file(relativePath: { eq: "images/cabinet/kaitlyn.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      may: file(relativePath: { eq: "images/cabinet/may.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      bobby: file(relativePath: { eq: "images/cabinet/bobby.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      yy: file(relativePath: { eq: "images/cabinet/yy.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      felicity: file(relativePath: { eq: "images/cabinet/felicity.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      all: file(relativePath: { eq: "images/cabinet/all_srs.jpg" }) {
        childImageSharp {
          fluid {
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
        className="px-8 lg:px-16 pt-16 min-h-screen pb-20 lg:pl-xs"
        style={{ columns: "3 400px", columnGap: "0.75rem", paddingTop: "65vh", backgroundAttachment: "fixed", backgroundColor: "rgba(0,0,0,.75)", backgroundBlendMode: "multiply" }}
        fluid={data.all.childImageSharp.fluid}>
        <div className="inline-block text-3xl lg:text-3xl mb-8" style={{ fontVariationSettings: "'wdth' 125, 'wght' 400" }}>
          <h1>Everything that isn't rec classes falls under the responsibility of <strong>cabinet</strong>. If you have any questions or concerns, talk to us! We don't bite :)</h1>
        </div>
        <Member
          title="Coach"
          name="Bobby Reilly"
          desc="theres a homeless-looking dude who broke into the rimac to use their showers but somehow got lost and now spends his leisure time yelling at kids that their thumbs need to be tucked"
          img={data.bobby.childImageSharp.fluid} />
        <Member
          title="President"
          name="Yong-Yi Hu"
          desc="As a 4th-year with the enthusiasm of a 1st-year, the burnout of a 4th-year, and the sleep schedule of someone who should've died long ago, this international business and sociocultural anthropology double major who doesn't know what she's doing with her life is trying her best to make UCSD Wushu as awesome as it deserves to be. In her free time, she enjoys standing on her toes, whacking herself in the head with weapons she's not good enough to use, and taking blurry pics that will probably become memes. One of her few skills is listening, however, so if you've got anything to say, she'll be there for you. Just don't ask her to solve any math/science/tech problems. Also, know that if you ride in the car she's driving, your life is in danger. You have been warned."
          img={data.yy.childImageSharp.fluid} />
        <Member
          title="Vice President, External"
          name="Kaitlyn Trinh"
          desc="somehow a decade’s experience has not taught her the difference between a bow stance and a drop stance"
          img={data.kaitlyn.childImageSharp.fluid} />
        <Member
          title="Vice President, Internal"
          name="May Ho"
          desc="May Ho is a third year student in ERC college. Her major is Chemistry. She started wushu at UCSD Wushu because she wanted to learn a new style of martial arts."
          img={data.may.childImageSharp.fluid} />
        <Member
          title="Secretary"
          name="Felicity Le"
          desc="Felicity Le is a second year Global Health major in Warren College. She joined wushu when she started college and has enjoyed it ever since. If she’s not at wushu, she can be found at dance practice! She has been dancing her whole life and could not imagine life without it. Along with this, Felicity can commonly be seen surrounded by green things and avocados - both loves of her life."
          img={data.felicity.childImageSharp.fluid} />
        <Member
          title="Treasurer"
          name="Sidney Huen"
          desc="Sidney joined wushu his freshman year, and some of his hobbies outside of this include watching anime, playing video games, and crying himself to sleep over studying mechanical engineering."
          img={data.sidney.childImageSharp.fluid} />
        <Member
          title="Historian"
          name="Brian Cheng"
          desc="Brian loves making and watching action movies!"
          img={data.brian.childImageSharp.fluid} />
        <Member
          title="Demos"
          name="David Cao"
          desc="do you think god stays in heaven because he, too, lives in fear of what he's created here on earth? - spy kids 2"
          img={data.david.childImageSharp.fluid} />
        <Member
          title="Social Chair"
          name="Sabrina Pham-Vu"
          desc="Sabrina is a fourth year student, and started wushu two years ago when she came to UCSD. She was born in the year of the cat. Therefore, like most cats, she ignores responsibilities and didn't fill out this bio (don't worry, socials will not be affected by this irresponsiblity, just her grades)."
          img={data.sabrina.childImageSharp.fluid} />
        <Member
          title="Public Relations"
          name="Kelly Tran"
          desc="Kelly Tran is a third year student at Sixth College majoring in Speculative Design and minoring in Design and Entrepreneurship. As an interdisciplinary, computing art student she has interest in all mediums of art especially photography."
          img={data.kelly.childImageSharp.fluid} />
        <Member
          title="Inventory Manager"
          name="Terence Liu"
          desc="Terence is a third year Human Biology major and also the inventory manager of the UCSD Wushu Club. He became interested in martial arts when he watched Jet Li in “Once Upon a Time in China,” and has been a fan since childhood. Despite being in wushu for about a year, Terence aims to improve himself. He has a sweet tooth and is a Nintendo fan. Also, swords. He likes swords ‘cuz they’re cool."
          img={data.terence.childImageSharp.fluid} />
      </BackgroundImage>
    </Layout>
  )
}

export default IndexPage
