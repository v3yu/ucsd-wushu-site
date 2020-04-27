import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
        <div className="px-16 pt-16 pb-32 min-h-screen flex">
        <h1 className="text-5xl mt-auto pr-64" style={{ fontVariationSettings: "'wdth' 105" }}>
        We do flips, we swing swords, we do splits, and more.
        <br />
        This is <span style={{ fontVariationSettings: "'wdth' 150" }}>UCSD Wushu.</span>
        </h1>
        </div>
  </Layout>
)

export default IndexPage
