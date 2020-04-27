import { Link } from "gatsby"
import React from "react"
import logo from "../images/ucsd-wushu-logo-white.svg"

const Nav = () => (
  <header>
    <div className="flex flex-col min-h-screen pt-12 pb-32 px-16">
      <Link
        to="/"
        className="flex-grow"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <img src={logo} alt="UCSD Wushu logo" style={{ width: 70 }} />
      </Link>
      <h1 className="text-2xl">Class</h1>
      <h1 className="text-2xl">Members</h1>
      <h1 className="text-2xl">Demos</h1>
      <h1 className="text-2xl">Events</h1>
      <h1 className="text-2xl">Contact</h1>
    </div>
  </header>
)

export default Nav
