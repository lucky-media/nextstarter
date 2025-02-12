'use client'

import Link from 'next/link'
import { useState } from 'react'
import SVG from 'react-inlinesvg'

const NavItem = ({ children, href }) => {
  return (
    <li className="w-full md:w-auto md:mr-6">
      <Link
        className="block py-4 md:py-0 border-b border-gray-200 md:border-b-0 md:border-transparent"
        href={href}
      >
        {children}
      </Link>
    </li>
  )
}

export default function Navigation() {
  const [menu, setMenu] = useState(false)

  return (
    <div className="bg-white shadow-lg">
      <div className="container">
        <div className="md:flex py-6 justify-between">
          <div className="w-full flex justify-between md:w-1/2">
            <p className="font-bold text-gray-800 text-2xl">Next Starter</p>
            <div className="md:hidden block">
              <button
                type="button"
                id="menu-toggle"
                aria-label="Menu Toggle"
                className="cursor-pointer"
              >
                <SVG
                  src="/svg/menu.svg"
                  className="fill-black size-6"
                  onClick={() => setMenu(!menu)}
                />
              </button>
            </div>
          </div>

          <div
            className={`md:w-1/2 md:flex md:flex-between justify-center md:justify-end ${
              menu ? ' flex' : ' hidden'
            }`}
          >
            <ul className="flex w-full p-5 flex-col md:w-auto md:p-0 md:flex-row items-center">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/about">About</NavItem>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
