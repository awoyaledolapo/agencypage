import Link from 'next/link'
import React from 'react'
import img from "@/public/icons/icon-facebook.svg"
import img2 from "@/public/icons/icon-pinterest.svg"
import img3 from "@/public/icons/icon-twitter.svg"
import img4 from "@/public/icons/icon-instagram.svg"
import Image from 'next/image'
 const socialsIcons=[{
 icon:img
 },{
 icon:img2
 },{
 icon:img3
 },{
 icon:img4
 }]
const Footer = () => {
  return (
    <section>
    <div className='bg-[#5cc5bb] items-center flex flex-col justify-center gap-10 py-20 px-6 '>
      <Link href="/">
        <h2 className='text-[#037e71] font-semibold text-[40px] heading-font'> Scavos Side </h2>
      </Link>
      <div className=' flex justify-between items-center gap-7'>
        <span className='flex gap-9'>
          <ul className='flex gap-5 text-[#037e71] text-[16px] lg:text-[24px]'>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/project">Project</Link></li>
          </ul>

        </span>
      </div>
        <div className='flex gap-5'>
          {socialsIcons.map((item,index)=>(
            <Image src= {item.icon} alt="icons" key={index}/>
         
          
          ))}
        </div>
    </div>
    </section>
  )
};

export default Footer