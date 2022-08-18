import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <section className='px-4 bg-yellow-300 hover:bg-black 
    hover:text-white cursor-pointer border-t-2 border-black ease-in-out duration-150
    '>
    <Link to='/contact'>

      <div className='container mx-auto md:flex gap-8 py-24'>

      <div className='flex-col items-center'>
        <h2 className='text-4xl'>Have a project in mind?</h2>
        <h1 className='text-4xl lg:text-5xl xl:text-7xl font-bold'>Let's get to work.</h1>
      </div>

      <div className='text-xl font-bold'>
        <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" w-24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
      </div>


      </div>


    </Link>





    </section>
  )
}

export default Contact