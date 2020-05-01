import { Link } from "gatsby"
import React from "react"
import logo from "../images/ucsd-wushu-logo-white.svg"

const Nav = () => (
  <header>
    <div className="md:flex flex-col min-h-screen md:pt-12 md:pb-24 md:px-16 py-6 px-8">
      <div>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img src={logo} alt="UCSD Wushu logo" style={{ width: 70 }} />
        </Link>
      </div>
      <ul className="flex-grow mt-16">
        <li className="text-2xl mt-1 text-gray-100">
          <Link to="/class" className="transition duration-100 inline-block border-b border-transparent hover:border-gray-100">Class</Link>
        </li>
        <li className="text-2xl mt-1 text-gray-100">
          <Link to="/team" className="transition duration-100 inline-block border-b border-transparent hover:border-gray-100">Team</Link>
        </li>
        <li className="text-2xl mt-1 text-gray-100">
          <Link to="/demos" className="transition duration-100 inline-block border-b border-transparent hover:border-gray-100">Demos</Link>
        </li>
        <li className="text-2xl mt-1 text-gray-100">
          <Link to="/events" className="transition duration-100 inline-block border-b border-transparent hover:border-gray-100">Events</Link>
        </li>
        <li className="text-2xl mt-1 text-gray-100">
          <Link to="/contact" className="transition duration-100 inline-block border-b border-transparent hover:border-gray-100">Contact</Link>
        </li>
      </ul>
      <footer className="mt-8">
        <div>
          <ul>
            <li className="mt-1"><a className="transition duration-100 text-gray-500 hover:text-gray-100" href="https://www.instagram.com/ucsdwushu/">Instagram</a></li>
            <li className="mt-1"><a className="transition duration-100 text-gray-500 hover:text-gray-100" href="https://www.facebook.com/UCSDwushu">Facebook</a></li>
            <li className="mt-1"><a className="transition duration-100 text-gray-500 hover:text-gray-100" href="https://www.youtube.com/channel/UCJJOaO7Kk3-u-qHxsRbrFuw">YouTube</a></li>
          </ul>
        </div>
      </footer>
    </div>
  </header>
)

export default Nav
