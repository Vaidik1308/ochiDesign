import Image from 'next/image';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
type Props = {}

const Landing = (props: Props) => {
  return (
    <div className='w-full h-screen text-white pt-1 '>
      <div className='textStructure mt-20 px-20 '>
        {["We Create","Eye Opening","Presentations"].map((item,i) => (
          <div key={i} className="masker overflow-hidden">
            <div className='flex w-fit items-center'>
              {i === 1 && (
                <div className='mr-[1vw] relative w-[9vw] h-[5.5vw]  top-[7px] bg-red-600 overflow-hidden rounded-lg'>
                  <Image src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt='' fill className='object-cover' />
                </div>
              )}
              <h1 className=" leading-[7vw] font-sans font-[700] tracking-tighter text-[7.5vw] uppercase">{item}</h1>
            </div>
          </div>
        ))}
        
      </div>
      <div className='border-t-2 border-zinc-800 mt-20  py-5 px-20 flex justify-between'>
        {["For Public and Private Companies","From the first pitch to IPO "].map((item,i) => (
          <p key={i} className='text-md font-light tracking-tight'>{item}</p>
        ))}
        <div className='start flex  items-center gap-5'>
          <div className='uppercase px-5 py-2 border-2 border-zinc-500 rounded-full font-light text-md '>start the project</div>
          <div className='w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-400'>
             <span className='rotate-45'>
              <FaArrowUpLong/>
             </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing