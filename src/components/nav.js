import { Link } from "gatsby"
import React from "react"
import logo from "../images/ucsd-wushu-logo-white.svg"

const Nav = () => (
  <header>
    <div className="flex flex-col min-h-screen pt-12 pb-24 px-16">
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
        <li class="text-2xl mt-1 text-gray-100">
          <Link to="/class" className="transition duration-100 inline-block border-b border-transparent hover:border-gray-100">Class</Link>
        </li>
        <li class="text-2xl mt-1 text-gray-100">
          <Link to="/team" className="transition duration-100 inline-block border-b border-transparent hover:border-gray-100">Team</Link>
        </li>
        <li class="text-2xl mt-1 text-gray-100">
          <Link to="/demos" className="transition duration-100 inline-block border-b border-transparent hover:border-gray-100">Demos</Link>
        </li>
        <li class="text-2xl mt-1 text-gray-100">
          <Link to="/events" className="transition duration-100 inline-block border-b border-transparent hover:border-gray-100">Events</Link>
        </li>
        <li class="text-2xl mt-1 text-gray-100">
          <Link to="/contact" className="transition duration-100 inline-block border-b border-transparent hover:border-gray-100">Contact</Link>
        </li>
      </ul>
      <footer>
        <div>
          <ul>
            <li class="mt-1"><a className="transition duration-100 text-gray-500 hover:text-gray-100" href="https://www.instagram.com/ucsdwushu/">Instagram</a></li>
            <li class="mt-1"><a className="transition duration-100 text-gray-500 hover:text-gray-100" href="https://www.facebook.com/UCSDwushu">Facebook</a></li>
            <li class="mt-1"><a className="transition duration-100 text-gray-500 hover:text-gray-100" href="https://www.youtube.com/channel/UCJJOaO7Kk3-u-qHxsRbrFuw">YouTube</a></li>
          </ul>
        </div>
      </footer>
    </div>
  </header>
)

export default Nav
