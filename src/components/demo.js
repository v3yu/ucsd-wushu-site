import React from "react"
import BackgroundImage from "gatsby-background-image"

const Demo = ({ name, date, link, img }) => {
  return (
    <BackgroundImage
    className="p-8 lg:px-16 lg:py-12 flex-grow w-full z-10 border-solid border-b bg-tint slight-bg-tint"
      fluid={img}>
      <h1 className="mt-auto text-lg lg:text-xl" style={{ fontVariationSettings: "'wdth' 125" }}>
        <a href={link} className="border-b border-transparent hover:border-gray-100 transition duration-250 text-lg lg:text-3xl" style={{ fontVariationSettings: "'wdth' 125" }}>
          <strong>{name}</strong> {date}
        </a>
      </h1>
    </BackgroundImage>
  )
}

export default Demo