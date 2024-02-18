'use client'
import React, { useRef, useState } from 'react'
import './carousel.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import Image from 'next/image';
import fanta1 from '../../../public/assets/fanta1.png'
import fanta2 from '../../../public/assets/fanta2.png'
import fanta3 from '../../../public/assets/fanta3.png'
import { gsap } from 'gsap'
import {useGSAP} from '@gsap/react'


// gsap.registerPlugin(CSSPlugin)

type Props = {}
const bgColorProp = [
    "bg-yellow-500",
    "bg-green-500",
    "bg-orange-500",
]

const photos = [
    fanta1,fanta2,fanta3
]

const headingTitle = [
    'FANTA : YELLOW JUICE',
    'FANTA : GREEN JUICE',
    'FANTA : ORANGE JUICE',
]
const Carousel = (props: Props) => {
    const [count,setCount] = useState(0)
    const [bgColor,setBgColor] = useState(bgColorProp[count])
    const [photo,setPhoto] = useState(photos[0])

    const imageAni = useRef(null)


    useGSAP(() => {

        const tl = gsap.timeline()
        tl.from(imageAni.current,{
            xPercent:"50",
            duration:1.3,
            delay:0.3,
            opacity:0,
            overflow:"hidden",
            rotate:45,
            stagger:1,
            smoothOrigin:true
            
        })
        gsap.from("#text",{
            y:40,
            delay:0.2,
            duration:0.8,
            opacity:0,
            smoothOrigin:true
        })
        gsap.from("#headerTitle",{
            x:-150,
            delay:0.2,
            duration:1,
            opacity:0.5
        })

    },{dependencies:[count],revertOnUpdate:true})

    
    
    

    const handleNext = () => {
        setCount(prev => prev === 2 ? 0 : prev+1  )
    }
    const handelBack = () => {
        setCount(prev => prev === 0 ? 2 : prev-1  )
    }
  return (
      <div className={`sec  ${bgColorProp[count]}  w-full h-screen`}>
        <div   className={`clipPath-circle   absolute w-full h-full ${bgColorProp[count]} `}></div>
        <div className={`w-[90%] mx-auto flex relative z-10  gap-10  items-center transition-opacity bg_animation h-screen $  p-5`}>
        <div className='w-1/2 flex flex-col gap-16 mt-8'>
            <h1 id='headerTitle' className='text-6xl font-[600] font-sans '>
                {headingTitle[count]}
            </h1>
            <p id='text'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis mollitia impedit vero dolorum amet unde nemo sed incidunt quas delectus, harum a nam quae iure cumque repellendus vitae provident. Tenetur.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis mollitia impedit vero dolorum amet unde nemo sed incidunt quas delectus, harum a nam quae iure cumque repellendus vitae provident. Tenetur.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis mollitia impedit vero dolorum amet unde nemo sed incidunt quas delectus, harum a nam quae iure cumque repellendus vitae provident. Tenetur.
            </p>
            <div className='w-[45%] flex justify-between'>
            <button onClick={() => handleNext()} >
                <FaArrowLeft/>
            </button>
            <button onClick={() => handelBack()}>
                <FaArrowRight/>
            </button>
            </div>
        </div>
        <div className='w-full flex items-center justify-center  overflow-hidden'>
            <Image id='imageSlider' ref={imageAni} src={photos[count]} width={500} className='imageAni  filter drop-shadow-2xl' height={500} alt='' /> 
        </div>
    </div>
    </div>
  )
}

export default Carousel