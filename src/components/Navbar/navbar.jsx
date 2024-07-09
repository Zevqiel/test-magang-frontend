import React from 'react'
import navbar from './navbar';

const Navbar = () => {
  return (
    <>
      <nav className='bg-gray-900 text-slate-200 px-40'>
        <div className='py-4 flex justify-between items-center'>
            <div className=''>
                <ul className='flex gap-4'>
                    <li className='cursor-pointer hover:text-slate-400 transition-all ease-in'>Franchise Opportunities</li>
                    <li className='cursor-pointer hover:text-slate-400 transition-all ease-in'>Help</li>
                    <li className='cursor-pointer hover:text-slate-400 transition-all ease-in'>Feddback</li>
                </ul>
            </div>
            <div className=''>
                <ul className='flex gap-4'>
                    <li className='cursor-pointer hover:text-slate-400 transition-all ease-in'>hello@gmail.com</li>
                    <li className='cursor-pointer hover:text-slate-400 transition-all ease-in'>0800 022 2 022</li>
                </ul>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
