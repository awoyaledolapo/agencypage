import React from 'react'
import img1 from '@/public/image-gallery-milkbottles.jpg'
import img2 from '@/public/image-gallery-orange.jpg'
import img3 from '@/public/image-gallery-cone.jpg'
import img4 from '@/public/image-gallery-sugarcubes.jpg'
import Image from 'next/image'


const galleryImg=[
    {
     image:img1
    },
    {
     image:img2
    },
    {
     image:img3
    },
    {
     image:img4
    }

]

const Gallery = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
        {
            galleryImg.map((item,index)=>(
                <div key={ index}  className="flex flex-col  min-h-[40vh]">
                  <Image alt="gallery-img" src={item.image}/>
                </div>
            ))
        }

    </div>
  )
}

export default Gallery