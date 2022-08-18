import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Logo } from '../assets/'

const activeClassName = "relative before:content-['*'] before:-top-4 before:left-1/2 before:-ml-1 before:absolute before:text-amber-400"

function Footer() {
  return (
    <footer className='grid grid-cols-2 md:grid-cols-[180px_1fr_180px]
     border-black border-2 bg-white'>

      <Link to='/' className='flex py-4 align-middle justify-center border-black border-r-2'>
        <img src={Logo} alt='Raddy' width='137' height='15' />
      </Link>

      <Link to='/contact' className='md:col-start-3 border-black md:border-l-2 
      flex gap-2 items-center justify-center text-lg
      bg-yellow-300 hover:bg-yellow-500 ease-in-out duration-75
      '>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
        Let's Talk
      </Link>

      <div className='col-span-2 md:row-start-1 md:col-start-2
      md:col-end-3 border-t-2 border-black md:border-t-0 flex items-center
      justify-center p-4 text-center'>
        &copy; 2022 Raddy • Built with ReactJs • Hosted on GitHub
      </div>
    </footer>
  )
}

export default Footer