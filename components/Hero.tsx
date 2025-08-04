import React from 'react'
import img from "@/public/icons/icon-arrow-down.svg"
import Image from 'next/image'

const Hero = () => {

  return (
   <div className='lg:bg-[url("/image-header.jpg")]  md:bg-[url("/image-header.jpg")] bg-[url("/mobile/image-header.jpg")] bg-center bg-no-repeat bg-cover  flex justify-center py-45 min-h-[90vh]'>
      <div className="text-center  lg:mt-[4rem]">
        <h1 className='text-white lg:tracking-[1rem] tracking-[0.2rem] text-[40px] lg:text-[70px] md:text-[50px] font-extrabold heading-font '>
          WE ARE CREATIVES
        </h1>
        <div className='flex justify-center mt-[3rem] lg:mt-[4rem]'>
          <Image src={img} alt='arrow-img'/>
        </div>
      </div>
    </div>
  )
}

export default Hero