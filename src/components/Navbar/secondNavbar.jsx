import React from 'react'

const SecondNavbar = () => {
    return (
        <>
            <section className='text-black px-40'>
                <div className='flex justify-between py-10 items-center'>
                    <h1 className='text-5xl font-semibold text-slate-800'>PT IDEMU SISTEM SINERGI</h1>
                    <div className='flex gap-4 justify-center items-center'>
                        <div className='flex'>
                            <input type="text" className='border w-80 h-9 p-2 text-black border-black' placeholder='Search...' />
                        </div>
                        <div>
                            <button className='bg-amber-500 cursor-pointer py-2 drop-shadow-lg text-slate-200 px-8'>CART (1)</button>
                        </div>
                    </div>
                </div>
                <nav className='bg-blue-500 text-slate-200'>
                    <div>
                        <ul className='flex justify-between items-center'>
                            <li className='cursor-pointer hover:bg-blue-800 py-4 px-16 transition-all ease-in'>Home</li>
                            <li className='cursor-pointer hover:bg-blue-800 py-4 px-16 transition-all ease-in'>INK CARTRIDGES</li>
                            <li className='cursor-pointer hover:bg-blue-800 py-4 px-16 transition-all ease-in'>TONER CARTRIDGES</li>
                            <li className='cursor-pointer hover:bg-blue-800 py-4 px-16 transition-all ease-in'>CONTACT US</li>
                            <li className='cursor-pointer hover:bg-blue-800 py-4 px-16 transition-all ease-in'>LOGIN / REGISTER</li>
                        </ul>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default SecondNavbar
