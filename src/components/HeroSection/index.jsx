import React from 'react'
import { HeroBg } from '../../assets'

const Hero = () => {
  return (
    <>
      <section className='relative py-10'>
        <div className='flex max-h-96 relative'>
          <img src={HeroBg} alt="Ayaka" className='box-border w-full object-cover' />
          <div className='absolute inset-0 bg-black opacity-50'></div>
          <div className='absolute inset-0 flex flex-col items-center justify-center gap-8 text-slate-200'>
            <h1 className='text-3xl font-semibold'>FIND THE RIGHT CARTRIDGES FOR YOUR PAINTER</h1>
            <div>
              <div className='flex justify-between text-black'>
                <div className='px-32 py-4 bg-slate-200 cursor-pointer hover:bg-blue-500 transition-all ease-in'>
                  <h3 className=''>3-Steps Easy Search</h3>
                </div>
                <div className='px-32 py-4 bg-slate-200 cursor-pointer hover:bg-blue-500 transition-all ease-in'>
                  <h3>search By Serial Number</h3>
                </div>
              </div>
              <div className='flex text-base py-4 justify-between items-center bg-slate-100 text-black'>
                <div className='px-4'>
                  <select name="cars" id="cars" className='bg-slate-200 py-3 px-8 border-black drop-shadow'>
                    <option value="volvo">Printer Brand</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <div className='px-4'>
                <select name="cars" id="cars" className='bg-slate-200 py-3 px-8 border-black drop-shadow'>
                    <option value="volvo">Printer Series</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <div className='px-4'>
                  <select name="cars" id="cars" className='bg-slate-200 py-3 px-8 border-black drop-shadow'>
                    <option value="volvo">Printer Model</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select></div>
                <div className='px-4'>
                  <button className='py-2 px-4 bg-amber-500 text-slate-100'>FIND CARTRIDGE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
