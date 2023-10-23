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
      yao: file(relativePath: { eq: "images/cabinet/yao.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.5)
        }
      }
      vivian: file(relativePath: { eq: "images/cabinet/vivian.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.5)
        }
      }
      maya: file(relativePath: { eq: "images/cabinet/maya.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.5)
        }
      }
      jessica: file(relativePath: { eq: "images/cabinet/jessica.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.5)
        }
      }
      jerwey: file(relativePath: { eq: "images/cabinet/jerwey.jpg" }) {
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
      austin: file(relativePath: { eq: "images/cabinet/austin.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.5)
        }
      }
      jeremy: file(relativePath: { eq: "images/cabinet/jeremy.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.5)
        }
      }
      james: file(relativePath: { eq: "images/cabinet/james.jpg" }) {
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
      all: file(relativePath: { eq: "images/cabinet/troll.jpeg" }) {
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
          style={{ columns: "2 400px", columnGap: "0.75rem", paddingTop: "65vh", backgroundAttachment: "fixed", backgroundColor: "rgba(0,0,0,.50)", backgroundBlendMode: "multiply" }}>
          <div className="inline-block text-xl lg:text-3xl mb-8" style={{ fontVariationSettings: "'wdth' 125, 'wght' 400" }}>
            <h1>Everything falls under the responsibility of <strong>cabinet</strong>. If you have any questions or concerns, talk to us—we don't bite!</h1>
          </div>
          {/*Left Column*/}
          <Member
            title="Vice President"
            name="Keerit Nijjar"
            desc="Keerit is a business economics major in Marshall college. She joined Wushu two years ago and has loved every second... except stance walks. When not at Wushu, she can be found camping at Geisel and eating snacks. Please feel free to come up to Keerit because she loves meeting new people and making friends :)"
            img={data.keerit.childImageSharp.gatsbyImageData} />
          <Member
            title="Coach"
            name="Nathan"
            desc={`Nathan is a third year computer engineering major in seventh college. He started practicing Shaolin when he was a wee little lad (Chaolin MonkTM). Nathan can usually be found complaining about his programming assignments but not actually doing them; opting, instead, to teach other valuable members of the club how to do the wave (hi ben, wave!). He also derives a lot of joy out of yelling. "it's just cathartic y'know?" - Nathan at some point probably.`}
            img={data.nathan.childImageSharp.gatsbyImageData} />
          <Member
            title="Internal"
            name="Austin Soohoo"
            desc={`Austin is a Cognitive Science major at Warren College. Most of his time at school is spent making sure Wushu Club is a safe place for not only the members but for his plushies as well. Much of his bubbly(ish) personality stems from the daily talk therapy he incorporates with them. If you ever need a person to talk to, a shoulder to cry on, or someone to talk to other than Big J, do not hesitate to borrow Austin's ear and maybe a plushie while your at it too!`}
            img={data.austin.childImageSharp.gatsbyImageData}
            /*useSmallFont="1"*/ />
          <Member
            title="Treasurer"
            name="Jessica Ju"
            desc="Jessica is a second year linguistics major at ERC. In her four years of wushu experience she has practiced various forms including straight sword, fan, and more recently picked up the emei piercers. She is also passionate about learning mandarin, sometimes practicing by watching Chinese dramas."
            img={data.jessica.childImageSharp.gatsbyImageData} />
          <Member
            title="Demo Coordinator"
            name="Jeremy Lei"
            desc={`Jeremy “Big J” is a fourth year Math-CS major at seventh college. After his return to wushu, he has lost all sense of shame (though I’m not sure he had any to begin with) and can frequently be found doing wushu in the wild (especially hammerfists). When not performing this strange ritual, he can usually be found downing Tapex’s fried chicken and milk tea or procrastinating on his homework.`}
            img={data.jeremy.childImageSharp.gatsbyImageData} />
          <Member
            title="Historian"
            name="Jerwey Guo"
            desc="Jerwey is a sociology major at seventh college. He spends most of his time laying on the ground, doing absolutely nothing. Maybe if he got up, stretched, and started practicing he would get better, but that's on him. In his downtime (laying around after working a closing shift) he consistently listens to music while contemplating his existence."
            img={data.jerwey.childImageSharp.gatsbyImageData} />

          {/*Right Column*/}
          <Member
            title="President"
            name="Zhoujie Yu"
            desc="Zhoujie Yu is a third year Nanoengineering student at Warren college. She did a few years of wushu as a kid and is getting back into it with UCSD Wushu. When not idling away time in the library with fellow wushu library residents, she can often be found consuming art or enjoying food (probably bread). She also likes to try out different outdoor activities when not in hermit or studying mode."
            img={data.zhoujie.childImageSharp.gatsbyImageData} />
          <Member
            title="Coach"
            name="Serena Xie"
            desc="Serena is a third year data science and chinese studies major at Marshall College. As a Jojo stan, she has mastered the art of posing and has thus obtained a stand power which enables her to function with a cursed amount of sleep."
            img={data.serena.childImageSharp.gatsbyImageData} />
          <Member
            title="External"
            name="Vivian Yu"
            desc="Vivian is a second-year Math-CS major in ERC. She is an international student from Hong Kong whose experience in wushu prior to joining UCSD Wushu is comprised entirely of watching Chinese historical fantasy wuxia dramas. She is currently learning straightsword."
            img={data.vivian.childImageSharp.gatsbyImageData} />
          <Member
            title="Inventory Manager"
            name="Yao Bi"
            desc="Yao is a fourth year general biology major in sixth. She has been doing wushu since her 2nd year. Yao does not have free time. But in the fleeting moments of free time that do eventually present themselves, she indulges in exhilarating hobbies such as rewatching haikyuu for the nth time, being delusional about kpop, and succumbing to anxiety. Yao can usually be found in lab hoping something doesn't explode (0/4 this week)."
            img={data.yao.childImageSharp.gatsbyImageData} />
          <Member
            title="Demo Coordinator"
            name="James Young"
            desc={`James is a third year Computer Science with Bioinformatics major in Revelle College. At a "young" age, he began practicing Taijiquan because his parents deemed it the "least martial" martial art. Now, he succumbs to paradoxes knowing not how he arrives at his endeavors nor for which reason he willfully perpetuates them. Symptoms of this affliction include enrolling in haphazard electives, volunteering uncompensated overtime, working in labs non-adjacent to his studies, and contriving unreliable narratives.`}
            img={data.james.childImageSharp.gatsbyImageData} />
          <Member
            title="Secretary"
            name="Maya Chang"
            desc="Maya is a second year math major at seventh college. After 8 years of wushu she has mastered the yells of the southern fist, and looks forward to new forms. Outside of the club, her passion for math means she will gladly help you with your homework, even if it means neglecting her own unfinished homework."
            img={data.maya.childImageSharp.gatsbyImageData} />
          <Member
            title="Freeloader"
            name="Bobby Reilly"
            desc="Bobby is occasionally at practice - not to do anything productive, just to let his anger out on children."
            img={data.bobby.childImageSharp.gatsbyImageData} />
          
        </BackgroundImage>
    </Layout>
  )
}

export default IndexPage
