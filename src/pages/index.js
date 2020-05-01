import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="px-16 pt-16 min-h-screen flex pb-20" style={{ paddingLeft: "20rem" }}>
      <h1 className="text-4xl mt-auto pr-64" style={{ fontVariationSettings: "'wdth' 105" }}>
        We swing swords and do backflips for fun. We are performers and competitors. And sometimes, we sell egg rolls.
        <br />
        This is<span style={{ fontVariationSettings: "'wdth' 125, 'wght' 700" }}> UCSD Wushu.</span>
      </h1>
    </div>
    <div className="border-solid border-t min-h-screen flex bg-black z-0" style={{ paddingLeft: "20rem" }}>
      <div className="px-16 pt-16 pb-20 faq-bg border-solid border-l min-w-full">
        <div className="border-solid border-2 bg-black w-2/3">
          <h1 className="text-5xl m-8 mb-0 mr-32" style={{ fontVariationSettings: "'wdth' 125, 'wght' 700" }}>
            <span className="align-text-top text-2xl">01</span> What is wushu?
          </h1>
          <p className="m-8 mt-0 mr-32">UCSD practices contemporary Chinese wushu, an exhibition martial art developed after 1949 in the People’s Republic of China based on traditional Chinese martial arts. Wushu performances and competition are based on routines, called forms (taolu), in various events representing different styles and types of weapons used in traditional Chinese martial arts. In addition, there is also sparring (sanda), although the club does not practice sparring.</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
