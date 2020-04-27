import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <div className="px-16 pt-16 min-h-screen flex pb-20">
      <h1 className="text-5xl mt-auto pr-64" style={{ fontVariationSettings: "'wdth' 105" }}>
        <span style={{ fontVariationSettings: "'wdth' 125, 'wght' 700" }}>404</span><br />
        This page doesn't exist.
      </h1>
    </div>
  </Layout>
)

export default NotFoundPage
