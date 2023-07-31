import {
  Link,
}from "@remix-run/react"

import logo from '../../public/img/logo.svg'






const Header = () => {
  return (
    <header className='bg-black text-white'>
      <div className='flex justify-between items-center w-11/12 mx-auto h-[88px]  flex-wrap'>
        <div className="flex items-center">
          <Link to='https://www.abstract.com/' className="transition duration-300 hover:text-gray hover:opacity-90">
            <img className="w-32" src={logo} alt="Imagen del Logo" />
          </Link>
          <Link to='/' className="ml-2 mt-1 pl-2 pb-1 text-2xl font-normal text-white border-l-2  hover:underline">
            Help Center
          </Link>
        </div>
        <div className="text-white text-3xl lg:hidden">
          <button className='bx bx-search transition ease-in-out bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300' ></button>
          <button className='bx bx-menu ml-2 '></button>
        </div>
        <div className="text-white text-2xl  hidden lg:block">
          <button className="bg-gray rounded-lg border-white border-2 py-2 px-4">Submit a request</button>
          <button className="bg-accent rounded-lg p-2 ml-3 px-6 transition duration-300  hover:bg-white hover:text-black">Sign in</button>
        </div>
      </div>
    </header>
  )
}

export default Header