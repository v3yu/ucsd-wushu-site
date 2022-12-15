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
      keerit: file(relativePath: { eq: "images/cabinet/keerit.jpg" }) {
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
      austin: file(relativePath: { eq: "images/cabinet/austin.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.5)
        }
      }
      jeremy: file(relativePath: { eq: "images/cabinet/jeremy.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.5)
        }
      }
      nathan: file(relativePath: { eq: "images/cabinet/nathan.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.5)
        }
      }
      zhoujie: file(relativePath: { eq: "images/cabinet/zhoujie.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.5)
        }
      }
      serena: file(relativePath: { eq: "images/cabinet/serena.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.5)
        }
      }
      all: file(relativePath: { eq: "images/cabinet/cab_esports_happy.jpg" }) {
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
          style={{ columns: "3 400px", columnGap: "0.75rem", paddingTop: "65vh", backgroundAttachment: "fixed", backgroundColor: "rgba(0,0,0,.50)", backgroundBlendMode: "multiply" }}>
          <div className="inline-block text-xl lg:text-3xl mb-8" style={{ fontVariationSettings: "'wdth' 125, 'wght' 400" }}>
            <h1>Everything that isn't rec classes falls under the responsibility of <strong>cabinet</strong>. If you have any questions or concerns, talk to us—we don't bite!</h1>
          </div>
          <Member
            title="Freeloader"
            name="Bobby Reilly"
            desc="Bobby is occasionally at practice - not to do anything productive, just to let his anger out on children."
            img={data.bobby.childImageSharp.gatsbyImageData} />
          <Member
            title="President"
            name="Felicity Le"
            desc="Felicity is a fourth year Public Health, Epidemiology concentration major with a minor in Chinese Studies. She started wushu at UC San Diego and has loved the community and sport ever since. Besides wushu, Felicity loves to dance and has been dancing since she was 3 years old. She is currently on Ascension Competitive Dance Team at UC San Diego."
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
          <Member
            title="Vice President"
            name="Keerit Nijjar"
            desc="Keerit is a fourth year business economics major in Marshall college. She joined Wushu last year and has loved every second... except stance walks. When not at Wushu, she can be found camping at Geisel and eating snacks. Please feel free to come up to Keerit because she loves meeting new people and making friends :)"
            img={data.keerit.childImageSharp.gatsbyImageData} />
          <Member
            title="Historian / Social Chair"
            name="Austin Soohoo"
            desc={`Austin is a Cognitive Science major in Warren College that is interested in expanding the Esports field. As a keen competitor, Austin loves to draw parallels between creating better competitors and better people. He thinks the secret to both is talk therapy with his collection of Sanrio plushie pals. Eternal rivals with fellow historian Jeremy Lei, Austin focuses on captivating the UCSD Wushu club with his video editing skills to match Jeremy's knack for video ideas. While some say they compromise to create unrivaled content, it's clear that Austin is the "more talented and beautiful individual" (endorsed by Jeremy Lei). On the other hand, Cindy and Austin work together to create a comfortable social community for the students of UCSD Wushu. With an ultimate goal to get the club to travel out to Head in the Clouds Festival over the Summer, Cindy and Austin are planning ahead by planning exciting events to increase the morale of the whole club.`}
            img={data.austin.childImageSharp.gatsbyImageData}
            useSmallFont="1" />
          <Member
            title="Demo Chair"
            name="Nathan Chao"
            desc={`Nathan is a second year computer engineering major in seventh college. He started practicing Shaolin when he was a wee little lad (Chaolin MonkTM). He would like everyone to know that he is, in fact, an aunt. An aunt that needs to stop doing the default Fortnite dance. Nathan can usually be found complaining about his programming assignments but not actually doing them; opting, instead, to teach other valuable members of UCSD Wushu how to do the wave (hi ben, wave!). He also derives a lot of joy out of yelling. just in general. "it's just cathartic y'know?" - Nathan at some point probably.`}
            img={data.nathan.childImageSharp.gatsbyImageData} />
          <Member
            title="Treasurer"
            name="Zhoujie Yu"
            desc="Zhoujie Yu is second year Nanoengineering student at Warren college. She did a few years of wushu as a kid and is now getting back into it with UCSD Wushu. As the treasurer, she focuses on managing club funds and funding for competition. When not idling away time in the library with fellow wushu library residents, she can often be found consuming art or enjoying food. She also likes to try out different outdoor activities when not in hermit or studying mode."
            img={data.zhoujie.childImageSharp.gatsbyImageData} />
          <Member
            title="Secretary"
            name="Serena Xie"
            desc="Serena is a second year data science and chinese studies major at Marshall College. As a Jojo stan, she has mastered the art of posing and has thus obtained a stand power which enables her to function with a cursed amount of sleep."
            img={data.keerit.childImageSharp.gatsbyImageData} />
          <Member
            title="Historian"
            name="Jeremy Lei"
            desc={`Jeremy “Big J” is a third year Math-CS major at seventh college and half of the Historian of the club! After a break from wushu, he joined in the club his 2nd year and has been an active and passionate member since. As of this moment, he’s in the midst of a poster buying spree (do not show him any sales of waifu posters). His goal for this year is to produce content involving the awesome events/shenanigans for Wushu! Beyond that, perhaps he’ll finally pick up another form…….`}
            img={data.jeremy.childImageSharp.gatsbyImageData} />
          <Member
            title="Social Chair"
            name="Cindy Xu"
            desc="Cindy is a third year ?? major"
            img={data.keerit.childImageSharp.gatsbyImageData} />
        </BackgroundImage>
    </Layout>
  )
}

export default IndexPage
