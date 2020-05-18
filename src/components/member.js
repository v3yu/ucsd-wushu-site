import React from "react"
import Img from "gatsby-image"

const Member = ({ title, name, desc, img }) => {
  return (
    <div className="inline-block text-3xl lg:text-4xl border-solid mb-3 w-full bg-black" style={{ borderWidth: "1px" }}>
      <div className="px-8 py-8 border-solid">
        <h1 className="text-xl" style={{ fontVariationSettings: "'wdth' 125, 'wght' 500" }}>{title}</h1>
        <h1 className="mb-4 text-3xl leading-tight" style={{ fontVariationSettings: "'wdth' 125, 'wght' 700" }}>
          {name}
        </h1>
        <p className="text-lg">{desc}</p>
      </div>
      <Img className="" alt="Socializing" sizes={{ ...img, aspectRatio: 3/2 }} />
    </div>
  )
}

export default Member