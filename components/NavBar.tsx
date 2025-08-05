'use client'
import Link from 'next/link'
import React from 'react'
import {  useState ,useEffect} from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect (()=>{
    const handleScroll=()=>{
      setIsScrolled(window.scrollY>10)};
      window.addEventListener("scroll",handleScroll) ;
return ()=>window.removeEventListener("scroll",handleScroll);
   
  },[])
  return (
    <div className={`fixed  bg-cover bg-center top-0 left-0 right-0 z-50 ${
  isScrolled ? "fixed top-0 w-full h-[80px] z-40 bg-gradient-to-b from-black/15 to-transparent text-white" : "bg-transparent text-white"
}`}>
      <header className='bg-transparent'>
            <div className='absolute inset-0 bg-[#0067fd]/2 backdrop-blur-sm'></div>
            {/* <div className="fixed top-0 w-full h-[80px] z-40 bg-gradient-to-b from-black/15 to-transparent" /> */}
        <nav className="relative py-3 md:px-10 lg:px-16 px-3 flex justify-between z-50  transition-all duration-300 items-center heading-font lg:mt-5">
          <Link href="/">
            <h2 className=' font-semibold text-[30px]'> Scavos Side </h2>
          </Link>
             <div className='  flex justify-between items-center    gap-7'>
                 <span className=' gap-9 hidden lg:inline md:hidden '>
            <ul className='flex gap-9 '>
              <li><Link href="/about-us " className='hover:text-gray-200'>About </Link></li>
              <li><Link href="/services" className='hover:text-gray-200'>Services</Link></li>
              <li><Link href="/project" className='hover:text-gray-200'>Projects</Link></li>
            </ul>
          
          </span>
            
            <div className="flex items-center gap-4 lg:gap-0">
              <Link
                href='/contact-us'
                className="hidden text-[12px] lg:inline-block md:inline-block  hover:text-white bg-white hover:bg-white/20 hover:backdrop-blur-md text-black py-3 px-8 rounded-[28px] font-semibold"
              >
                CONTACT
              </Link>

              <button
                className="lg:hidden text-amber-50 "
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <FiX size={24} className="" /> : <FiMenu size={34} className="" />}
              </button>
            
            </div>
             </div>
        </nav>

              {isOpen && (
  <div className="relative w-full flex justify-end mt-4 lg:hidden px-4">
  
    <div className="absolute top-0 right-8 w-4 h-4 bg-white rotate-45 translate-y-[-50%] z-0" />

   
    <div className="bg-white w-[100%] px-6 py-8 rounded-md shadow-md z-10">
      <ul className="flex flex-col gap-6 text-center text-gray-500 font-semibold">
        <li><Link href="/about-us">About</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/project">Projects</Link></li>
      </ul>

      
      <div className="flex justify-center mt-8">
        <Link
          href="/contact-us"
          className="bg-yellow-400 text-black font-bold text-sm px-8 py-3 rounded-full tracking-wide"
        >
          CONTACT
        </Link>
      </div>
    </div>
  </div>
)}

      </header>

    </div>
  )
}

export default NavBar