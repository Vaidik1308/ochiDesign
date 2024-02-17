'use client'
import { motion } from 'framer-motion'
import React from 'react'


type Props = {}

const Marquee = (props: Props) => {
  return (
    <div className='w-full  bg-[#004D43] rounded-tl-3xl rounded-tr-3xl py-20'>
        <div className='  gap-10 text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden'>
            <motion.h1 
                initial={{x:0}} 
                animate={{x:"-100%"}} 
                transition={{
                    ease:"linear",
                    repeat:Infinity,
                    duration:10}} 
                className='tracking-tighter text-[22vw] leading-none mb-2 font-sans font-[700] uppercase'
            >
                we are ochi
            </motion.h1>
            <motion.h1 
                initial={{x:0}} 
                animate={{x:"-100%"}} 
                transition={{
                    ease:"linear",
                    repeat:Infinity,
                    duration:10,
                    
                }} 
                className=' tracking-tighter text-[22vw] leading-none mb-2 font-sans font-[700] uppercase'
            >
                we are ochi
            </motion.h1>
            <motion.h1 
                initial={{x:0}} 
                animate={{x:"-100%"}} 
                transition={{
                    ease:"linear",
                    repeat:Infinity,
                    duration:10}} 
                className='tracking-tighter text-[22vw] leading-none mb-2 font-sans font-[700] uppercase'
            >
                we are ochi
            </motion.h1>
        </div>
    </div>
  )
}

export default Marquee