import { Link } from "gatsby"
import React, { useEffect } from "react"
import logo from "../images/ucsd-wushu-logo-white.svg"

const Nav = () => {
  useEffect(() => {
    var nb = document.getElementById('navbutt');
    var ns = document.getElementById('navstuff');
    var h = document.getElementById('header');
    nb.onclick = function () {
      ns.classList.toggle('block');
      ns.classList.toggle('hidden');
      h.classList.toggle('bg-black');
    }

    return () => { }
  })

  return (
    <header id="header" className="lg:bg-transparent lg:h-screen fixed left-0 top-0 flex-none w-full lg:max-w-xs text-white z-50">
      <div className="lg:flex flex-col lg:min-h-screen lg:pt-12 lg:pb-22 lg:px-16 py-6 px-8">
        <div className="flex flex-row">
          <Link
            className="flex-grow"
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <img className="w-12 lg:w-16" src={logo} alt="UCSD Wushu logo" />
          </Link>
          <div className="block lg:hidden">
            <button id="navbutt" className="flex items-center text-white">
              <svg className="fill-current h-8 w-8" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
        <div id="navstuff" className="lg:flex lg:flex-col lg:flex-grow hidden">
          <ul className="flex-grow mt-16">
            <li className="text-2xl mt-1 text-gray-100">
              <Link to="/class" className="transition duration-100 inline-block border-b border-transparent hover:border-gray-100">Class</Link>
            </li>
            <li className="text-2xl mt-1 text-gray-100">
              <Link to="/cabinet" className="transition duration-100 inline-block border-b border-transparent hover:border-gray-100">Cabinet</Link>
            </li>
            <li className="text-2xl mt-1 text-gray-100">
              <Link to="/demos" className="transition duration-100 inline-block border-b border-transparent hover:border-gray-100">Demos</Link>
            </li>
            <li className="text-2xl mt-1 text-gray-100">
              <Link to="/contact" className="transition duration-100 inline-block border-b border-transparent hover:border-gray-100">Contact</Link>
            </li>
          </ul>
          <footer className="mt-8">
            <div>
              <ul className="mb-4 text-gray-300">
                <li className="mt-1"><a className="transition duration-100 opacity-75 hover:opacity-100" href="https://linktr.ee/ucsdwushu">LinkTree</a></li>
                <li className="mt-1"><a className="transition duration-100 opacity-75 hover:opacity-100" href="https://discord.com/invite/F6gSrcG">Discord</a></li>
                <li className="mt-1"><a className="transition duration-100 opacity-75 hover:opacity-100" href="https://www.instagram.com/ucsdwushu/">Instagram</a></li>
                <li className="mt-1"><a className="transition duration-100 opacity-75 hover:opacity-100" href="https://www.facebook.com/UCSDwushu">Facebook</a></li>
                <li className="mt-1"><a className="transition duration-100 opacity-75 hover:opacity-100" href="https://www.youtube.com/channel/UCJJOaO7Kk3-u-qHxsRbrFuw">YouTube</a></li>
              </ul>

              <p className="text-xs opacity-50 text-gray-400">© {new Date().getFullYear()} Wushu Club<br></br>@ UC San Diego</p>
              {/*<p><a className="text-xs opacity-50 text-gray-400 transition duration-100 hover:opacity-100" href="https://cao.sh">Designed by David Cao</a></p>*/}
            </div>
          </footer>

        </div>
      </div>
    </header>
  )
}

export default Nav
