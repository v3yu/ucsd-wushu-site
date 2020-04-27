import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="px-16 pt-16 min-h-screen flex pb-20">
      <h1 className="text-5xl mt-auto pr-64" style={{ fontVariationSettings: "'wdth' 105" }}>
        We swing swords and do backflips for fun. We are performers and competitors. And sometimes, we sell egg rolls.
        <br />
        This is<span style={{ fontVariationSettings: "'wdth' 125, 'wght' 700" }}> UCSD Wushu.</span>
      </h1>
    </div>
  </Layout>
)

export default IndexPage
