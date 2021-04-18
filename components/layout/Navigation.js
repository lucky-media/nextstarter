import Link from 'next/link'
import { useState } from 'react'
import SVG from 'react-inlinesvg'

const NavItem = ({ children, href }) => {
  return (
    <li className="w-full md:w-auto md:mr-6">
      <Link href={href}>
        <a className="block py-4 md:py-0 border-b border-gray-200 md:border-b-0 md:border-transparent">
          {children}
        </a>
      </Link>
    </li>
  )
}

export default function Navigation() {
  const [menu, setMenu] = useState(false)

  return (
    <div className="bg-white shadow-lg flex items-center">
      <div className="container">
        <div className="row py-6 justify-between">
          <div className="col-6">
            <p className="font-bold text-gray-800 text-2xl">Next Starter</p>
          </div>
          <div className="col-2 md:hidden block">
            <label htmlFor="menu-toggle" className="cursor-pointer">
              <SVG
                src="../svg/menu.svg"
                className="fill-current text-black w-6 h-6"
                onClick={() => setMenu(!menu)}
              />
            </label>
          </div>

          <div
            className={`md:col-6 md:flex justify-center md:justify-end ${
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
