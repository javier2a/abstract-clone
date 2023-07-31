import React, { useState } from 'react'
import Category from '../components/category';

const Index = () => {
  const categories = [1,2,3,4,5,6]
  const [search, setSearch] = useState('')
    
  const handdleInput = (e) =>{
    setSearch(e.target.value)
    console.log(e.target.value);
  }

  const handdleSubmit = (event) => {
    event.preventDefault();
    console.log('submitiado');
    setSearch('')
  }
  
  return (
    <main>
      <section className='bg-primary pt-20 pb-28 px-4 h-96 text-7xl'>
        <div className=' max-w-3xl m-auto'>
            <h1 className='text-center mb-8 max-md:text-3xl '>How can we help?</h1>
            <form className='max-w-2xl m-auto' onSubmit={ handdleSubmit }>   
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        {/* <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg> */}
                    </div>
                    <input 
                    type="search" 
                    id="default-search" 
                    className="text-xl block w-full p-4 pl-10 outline-none focus:border-accent text-gray-900 border border-black rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Search" 
                    required
                    onChange={ handdleInput }
                    value={ search }
                    />
                    <button type="submit" className="text-black absolute right-2.5 bottom-2.5 hover:text-accent text-sm">
                      <i className='bx bx-right-arrow-alt bx-md text-black'></i>
                    </button>
                </div>
            </form>
        </div>
        

      </section>
      <div className='px-4'>
          <div className="max-w-screen-2xl m-auto mt-40 grid grid-cols-1 justify-center md:grid-cols-2 md:justify-start">
              {
                categories.map( value => {
                  return(
                    <Category key={value}/>
                  )
                })
              }
          </div>

      </div>
    </main>
  )
}

export default Index