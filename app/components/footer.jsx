import { Link } from '@remix-run/react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='footer py-10 bg-black text-white'>
      <div className='w-12/12 m-0'>
        <nav className='text-base px-4 justify-items-center grid grid-cols-2 lg:grid-cols-5 gap-2  sm:justify-items-start lg:justify-items-center'>
          <div className='mb-5'>
            <h2 className='text-2xl pb-4 font-bold'>Abstract</h2>
            <ul>
              <Link to='/'className='list-item hover:underline'>Start Trial</Link>
              <Link to='/'className='list-item hover:underline'>Pricing</Link>
              <Link to='/'className='list-item hover:underline'>Download</Link>
            </ul>
          </div>
          <div className='mb-5'>
            <h2 className='text-2xl pb-4 font-bold'>Resources</h2>
            <ul>
              <Link to='/'className='list-item hover:underline'>Blog</Link>
              <Link to='/'className='list-item hover:underline'>Help Center</Link>
              <Link to='/'className='list-item hover:underline'>Release Notes</Link>
              <Link to='/'className='list-item hover:underline'>Status</Link>
            </ul>
          </div>
          <div className='mb-5'>
            <h2 className='text-2xl pb-4 font-bold'>Community</h2>
            <ul>
              <Link to='/'className='list-item hover:underline'>Twitter</Link>
              <Link to='/'className='list-item hover:underline'>Linkedln</Link>
              <Link to='/'className='list-item hover:underline'>Facebook</Link>
              <Link to='/'className='list-item hover:underline'>Dribbble</Link>
              <Link to='/'className='list-item hover:underline'>Podcast</Link>
            </ul>
          </div>
          <div className='mb-5'>
            <h2 className='text-2xl pb-4 font-bold'>Company</h2>
            <ul>
              <Link to='/'className='list-item hover:underline'>About Us</Link>
              <Link to='/'className='list-item hover:underline'>Careers</Link>
              <Link to='/'className='list-item hover:underline'>Legal</Link>
            </ul>
            <h2 className=' pt-4 font-bold'>Contact Us</h2>
            <Link to='' className='hover:underline'>info@abstract.com</Link>
          </div>
          

          <div className='text-xl max-sm:col-span-2 sm:justify-self-start  lg:self-end lg:justify-self-center'>
            <img src="" alt="" />
            <p>© Copyright { new Date().getFullYear() } </p>
            <p>Abstract Studio Design, Inc. </p>
            <p>All rights reserved</p>
          </div>
        </nav>
        
        
      </div>
    </footer>
  )
}

export default Footer