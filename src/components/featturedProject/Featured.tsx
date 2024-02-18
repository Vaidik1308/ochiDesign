'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

type Props = {}

// motion

const Featured = (props: Props) => {
    
  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-2 pb-20 border-zinc-700'>
            <h1 className='text-8xl font-sans tracking-tight' >Featured Projects</h1>
        </div>
        <div className='w-full relative px-10 cards flex mt-10  gap-10 '>
            
            <div  className='flex flex-col items-center gap-3 w-1/2 relative'>
                <div className='flex ml-4  items-center gap-3 w-full justify-start'>
                    <div className='w-3 h-3 bg-white rounded-full'></div>
                    <p className='uppercase'>Fyde</p>
                </div>
                <div className='cardContainer w-full h-[80vh]  rounded-[18px] overflow-hidden'>
                    <h1 className=' -translate-x-1/2 absolute top-1/2  left-full leading-none -translate-y-1/2 -pb-10 z-[9] text-8xl font-sans text-[#CDEA68] tracking-tighter font-[600]'>FYDE</h1>
                    <div className='overflow-hidden relative w-full rounded-xl h-full duration-1000 hover:scale-[0.85]'>
                        <Image src="https://ochi.design/wp-content/uploads/2022/06/Frame-3876-1326x1100.jpg" className='rounded-xl' alt='' fill />
                    </div>
                </div>
            </div>
            <div  className='flex flex-col items-center gap-3 w-1/2 relative'>
                <div className='flex ml-4  items-center gap-3 w-full justify-start'>
                    <div className='w-3 h-3 bg-white rounded-full'></div>
                    <p className='uppercase'>Fyde</p>
                </div>
                <div className='cardContainer w-full h-[80vh]  rounded-[18px] overflow-hidden'>
                    <h1 className=' translate-x-1/2 absolute top-1/2  right-full leading-none -translate-y-1/2 -pb-10 z-[9] text-8xl font-sans text-[#CDEA68] tracking-tighter font-[600]'>
                        {"FYDE".split('').map((item,index) => (
                            <span  key={index}>
                                {item}
                            </span>
                        ))}
                    </h1>
                    <div className='overflow-hidden relative w-full rounded-xl h-full duration-1000 hover:scale-[0.85]'>
                        <Image src="https://ochi.design/wp-content/uploads/2022/06/Frame-3876-1326x1100.jpg" className='rounded-xl' alt='' fill />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured