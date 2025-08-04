import Image from 'next/image'
import React from 'react'
import img1 from '@/public/image-emily.jpg'
import img2 from '@/public/image-thomas.jpg'
import img3 from '@/public/image-jennie.jpg'
const testimonialsInfo = [
  {
    image: img1,
    description: "We put our trust in Scavoside and they delivered,making sure our need are met and deadlines were always hit  ",
    name: " Emily R.",
    position: "Marketing Director"
  },
  {
    image: img2,
    description: " Scavoside enthusiasm coupled with their keen interes in our brand's sucess made it a satisfying and enjoyable experience",
    name: "Thomas",
    position: "Cheif Operating Officer "
  },
  {
    image: img3,
    description: " Incredible end result! Our sales increased over 400% when we worked with scavoside .highly recommended! ",
    name: "Jennie F.",
    position: "Business Owner"
  }
]
const Testimonials = () => {
  return (
    <div className=' bg-[#ffffff] flex flex-col items-center justify-center py-30'>
      <h2 className='text-gray-400 heading-font mb-15 text- '> CLIENTS TESTIMONIALS</h2>
      <div className=' gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

        {
          testimonialsInfo.map((item, index) => (
            <div key={index} className={`${index===2 ? "md:col-span-2 md:flex md:justify-center lg:col-span-1 lg:justify-start":""} p-5 gap-10 flex flex-col items-center justify-center`}>
              <div>
                <Image
                  alt="img"
                  src={item.image}
                  className="rounded-full w-20 h-20 object-cover"
                />
              </div>
              <p className='text-gray-500 max-w-[300px] text-center'>{item.description}</p>
              <div>
                <h3 className=' font-bold text-[20px] heading-font text-center'>{item.name}</h3>
                <p className='text-gray-500'>{item.position}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Testimonials