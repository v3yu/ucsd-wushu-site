import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WushuBg from "../assets/wushu_bg_c.mp4"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="px-8 lg:px-16 pt-16 min-h-screen flex pb-20 lg:pl-xs">
        <video autoPlay muted loop className="absolute left-0 bottom-0 min-w-full min-h-full z-0" style={{ objectFit: "cover" }}>
          <source src={WushuBg} type="video/mp4" />
        </video>
        <h1 className="text-3xl lg:text-4xl mt-auto lg:pr-64 z-10" style={{ fontVariationSettings: "'wdth' 105" }}>
          <span style={{ fontVariationSettings: "'wdth' 125, 'wght' 700" }}>We're in quarantine.</span>
          <br />
          In light of the pandemic situation, UCSD Wushu is not hosting classes currently. Stay tuned for info on Fall 2020!
        <br />
        </h1>
      </div>
    </Layout>
  )
}

export default IndexPage
