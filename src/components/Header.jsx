import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
<header className="text-primary body-font border py-2">
  <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center">
    <Link className="flex  font-medium items-center text-gray-900 mb-4 md:mb-0" to="/">
      <img src="/src/assets/slogan2.png" className="w-16 h-16 text-white  rounded-full" viewbox="0 0 24 24" />Index <span className="text-2xl text-secondary ">Np</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-4">
      <Link className="mr-5 hover:text-gray-900" to="/">Home</Link>
      <Link className="mr-5 hover:text-gray-900" to="/about">About</Link>
      <Link className="mr-5 hover:text-gray-900" to="/services">Services</Link>
      <Link className="mr-5 hover:text-gray-900" to="/blog">Blog</Link>
      <Link className="mr-5 hover:text-gray-900" to="/contact">Contact</Link>
    </nav>
    <div className="flex items-center gap-4 ">

    <Link to='/login'>
      <button className="inline-flex items-center bg-primary text-texcol border-0 py-1 px-3 focus:outline-none hover:bg-secondary rounded text-base mt-4 md:mt-0">Login
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button></Link>


      <Link to='/signup'>
      <button className="inline-flex items-center bg-primary text-texcol border-0 py-1 px-3 focus:outline-none hover:bg-secondary rounded text-base mt-4 md:mt-0">Sign up
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
      </Link>
    </div>
  </div>
</header>

    </>
  )
}

export default Header
