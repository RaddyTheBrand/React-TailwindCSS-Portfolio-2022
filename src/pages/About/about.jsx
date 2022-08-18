import React from 'react'
import { socials } from '../../data'
import { HeroMd } from '../../assets'
import Scroller from '../../components/scroller'
import Contact from '../../components/contact'


function About() {
  return (
    <>

    <section className='py-12 border-x-2 border-black'>

    <div className='container mx-auto px-4 grid gap-8 lg:grid-cols-2'>

      <div>
        <h1 className='text-4xl lg:text-5xl xl:text-7xl font-bold mb-4'>My Story</h1>
        <p className='mb-2 text-lg'>
          Hi!, I'm Raddy, a web developer and content creator from Europe.
          With over ten years of experience in the tech industry, I've
          worked for Google, Meta, and Microsoft.
        </p>
        <p className='mb-4 text-lg'>
          I mainly make videos about web development on YouTube these days,
          which fits in well with my educational background and interests.
          In my free time I like to build indie products that make the world
          a better place.
        </p>

        <div className='text-lg font-bold'>Find me on:</div>

        <div className='mb-8'>

          <ul className='flex gap-6'>
            {socials.map((item, index) => (
              <li key={index}>
                <a target='_blank' href={item.link} rel='noopener noreferrer'
                className='py-2 flex flex-col md:flex-row gap-2 items-center justify-center'>
                <img src={item.icon} alt={item.alt} width='' height='' />
                {item.name}
                </a>
              </li>
            ))}
    
          </ul>
        </div>
      </div>

      <div>
          <img src={HeroMd} alt="Me programming" className='border-black border-2 rounded-xl mb-8' />   
      </div>

    </div>

    </section>

    <Scroller
      text={" ✨ Let's get to work! ✨ Have a project in mind? ✨ Let's get to work! ✨ Have a project in mind? ✨ Let's get to work! ✨ Have a project in mind?"}
      link="/contact"
    />
    <Contact/>

    </>
  )
}

export default About