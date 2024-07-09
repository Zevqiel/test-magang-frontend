import React from 'react'
import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react"
import { ProductBg } from '../../assets'

const ProductSection = () => {
    return (
        <>
            <div className='flex justify-center items-center font-semibold text-3xl'>
                <h1>FEATURED PRODUCT</h1>
            </div>
            <section className='px-8 xl:px-16 flex'>
                <div className='flex justify-center items-center'>
                    <button className='text-black opacity-20 hover:text-blue-500 hover:opacity-100 transition-all ease-in'>
                    <ArrowCircleLeft size={50} />
                    </button>
                </div>
                <div className='grid grid-cols-3 px-4 xl:px-48 py-8 gap-12 object-cover'>
                    <div className='bg-slate-200 flex flex-col justify-center p-2'>
                        <div>
                            <img src={ProductBg} alt="Bocchi" className='w-full object-cover' />
                        </div>
                        <div className='flex flex-col justify-start items-start p-1 lg:p-4'>
                            <div>
                                <p className='text-xs md:text-sm lg:text-base font-semibold'>welwelwlwlw</p>
                                <p className='text-xs md:text-sm lg:text-base font-thin'>wiuwiwuwi</p>
                            </div>
                            <div className='flex justify-between gap-4 lg:gap-8 items-center'>
                                <p className='text-xs md:text-sm lg:text-base'>welwelwlwlw</p>
                                <div className='text-slate-200'>
                                    <button className='text-xs lg:text-sm bg-blue-500 py-2 px-2'>PAPAPAP</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-slate-200 flex flex-col justify-center p-2'>
                        <div>
                            <img src={ProductBg} alt="Bocchi" className='w-full object-cover' />
                        </div>
                        <div className='flex flex-col justify-start items-start p-1 lg:p-4'>
                            <div>
                                <p className='text-xs md:text-sm lg:text-base font-semibold'>welwelwlwlw</p>
                                <p className='text-xs md:text-sm lg:text-base font-thin'>wiuwiwuwi</p>
                            </div>
                            <div className='flex justify-between gap-4 lg:gap-8 items-center'>
                                <p className='text-xs md:text-sm lg:text-base'>welwelwlwlw</p>
                                <div className='text-slate-200'>
                                    <button className='text-xs lg:text-sm bg-blue-500 py-2 px-2'>PAPAPAP</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-slate-200 flex flex-col justify-center p-2'>
                        <div>
                            <img src={ProductBg} alt="Bocchi" className='w-full object-cover' />
                        </div>
                        <div className='flex flex-col justify-start items-start p-1 lg:p-4'>
                            <div>
                                <p className='text-xs md:text-sm lg:text-base font-semibold'>welwelwlwlw</p>
                                <p className='text-xs md:text-sm lg:text-base font-thin'>wiuwiwuwi</p>
                            </div>
                            <div className='flex justify-between gap-4 lg:gap-8 items-center'>
                                <p className='text-xs md:text-sm lg:text-base'>welwelwlwlw</p>
                                <div className='text-slate-200'>
                                    <button className='text-xs lg:text-sm bg-blue-500 py-2 px-2'>PAPAPAP</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='flex justify-center items-center'>
                    <button className='text-black opacity-20 hover:text-blue-500 hover:opacity-100 transition-all ease-in'>
                    <ArrowCircleRight size={50} />
                    </button>
                </div>
            </section>
        </>
    )
}

export default ProductSection
