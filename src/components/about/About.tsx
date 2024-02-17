import Image from 'next/image'
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className=' text-black w-full  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl p-20'>
      <h1 className="my-2 w-[60vw] text-black font-sans text-[3vw] leading-[3vw] tracking-tighter ">Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
      <div className='flex items-centerw-full border-t-[1px] border-[#617029] mt-20 pt-10'>
        <div className='w-1/2 '>
          <h1 className='text-5xl'>
            Our Approach:
          </h1>
          <button className='flex items-center justify-center gap-6 mt-5 px-8 py-4 bg-zinc-900 rounded-full text-white '>
            Read More
            <div className='w-2 h-2 bg-white rounded-full'>

            </div>
          </button>
        </div>
        <div className='w-1/2 relative h-[70vh] rounded-3xl overflow-hidden'>
          <Image src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" className='object-cover rounded-3xl' alt='' fill/>
        </div>
      </div>
    </div>
  )
}

export default About