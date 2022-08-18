import React from 'react'
import { socials } from '../../data'

function Contact() {
  return (
    <>

    <section className='py-12 border-x-2 border-black'>

    <div className='container mx-auto px-4 grid gap-8 lg:grid-cols-2'>

      <div>
        <h1 className='text-4xl lg:text-5xl xl:text-7xl font-bold mb-4'>Contact</h1>
        <p className='mb-6 text-lg'>
        Ever want to contact me? If you're looking for help with your creative business, have a burning question to ask me, or simply want to interact, the quickest way to get my attention is to hit me up on email.
        </p>
        <p className='mb-6 text-xl'>
          Want my email: hello@email.com
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
      <form action="https://public.herotofu.com/v1/dcf8f500-1b20-11ed-910c-a9b3a640214e" method="post">

        <div className='w-full mb-4'>
          <label for="name" className='form-label inline-block mb-2 text-gray-700'>Your Name</label>
          <input name="Name" id="name" type="text" required className='block w-full px-3 py-2 border-black border-2 rounded' />
        </div>

        <div className='w-full mb-4'>
          <label for="email" className='form-label inline-block mb-2 text-gray-700'>Your Email</label>
          <input name="Email" id="email" type="email" required className='block w-full px-3 py-2 border-black border-2 rounded' />
        </div>

        <div className='w-full mb-4'>
          <label for="message" className='form-label inline-block mb-2 text-gray-700'>Message</label>
          <textarea name="email" id="email" cols="30" rows="10" className='block w-full px-3 py-2 border-black border-2 rounded'></textarea>
        </div>
 
        <div>
          <input type="submit" value="Send it!" className='px-6 py-4 rounded-md bg-teal-600 hover:bg-teal-700 text-white' />
        </div>

      </form>
      </div>

    </div>

    </section>


    </>
  )
}

export default Contact