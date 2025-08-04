"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

// Desktop and mobile images
import img1 from "@/public/image-stand-out.jpg";
import img1Mobile from "@/public/mobile/image-stand-out.jpg";
import img2 from "@/public/image-transform.jpg";
import img2Mobile from "@/public/mobile/image-transform.jpg";
import img3 from "@/public/image-photography.jpg";
import img3Mobile from "@/public/mobile/image-photography.jpg";
import img4 from "@/public/image-graphic-design.jpg";
import img4Mobile from "@/public/mobile/image-graphic-design.jpg";

// Top info — image or content
const topMarketInfo = [
  {
    title: "Transform your brand",
    text: "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
    link: "Learn more.",
    image: null,
  },
  {
    image: img2,
    image2: img2Mobile,
  },
  {
    image: img1,
    image2: img1Mobile,
  },
  {
    title: "Stand out to the right audience",
    text: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.",
    link: "Learn more.",
    image: null,
  },
];

// Bottom info — always background images
const bottomMarketInfo = [
  {
    title: "Graphic Design",
    text: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention.",
    image: img4,
    image2: img4Mobile,
    color: "#04574f",
  },
  {
    title: "Photography",
    text: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
    image: img3,
    image2: img3Mobile,
    color: "#030859",
  },
];

const Markets = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind 'md'
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* Top Market Info */}
      {topMarketInfo.map((item, index) => {
  const isImageBlock = !!item.image;

  return (
    <div
      key={index}
      className={`w-full ${
        isImageBlock
          ? '' // Let image take natural height
          : 'flex flex-col justify-center items-start text-left min-h-[60vh] md:min-h-[30vh] lg:min-h-[50vh] px-6 md:px-12'
      }`}
    >
      {isImageBlock ? (
        <>
          {/* Mobile image */}
          <Image
            src={item.image2}
            alt="Mobile Visual"
            className="w-full object-cover block md:hidden"
          />
          {/* Desktop image */}
          <Image
            src={item.image}
            alt="Desktop Visual"
            className="w-full object-cover hidden md:block"
          />
        </>
      ) : (
        <>
          <h2 className="text-[24px] md:text-[32px] lg:text-[42px] font-bold mb-5 heading-font max-w-[450px]">
            {item.title}
          </h2>
          <p className="text-gray-400 text-[16px] md:text-[18px] lg:text-[20px] max-w-[535px] mb-5">
            {item.text}
          </p>
          <span className="text-[20px] underline underline-offset-4 text-yellow-500 font-semibold">
            {item.link}
          </span>
        </>
      )}
    </div>
  );
})}


      {/* Bottom Market Info */}
      {bottomMarketInfo.map((item, index) => (
        <div
          key={index}
          className="pt-70 lg:pt-70 md:pt-60 px-6 flex flex-col justify-center items-center min-h-[80vh] md:min-h-[30vh] lg:min-h-[70vh] bg-cover bg-center text-white"
          style={{
            backgroundImage: `url(${isMobile ? item.image2.src : item.image.src})`,
            color: item.color,
          }}
        >
          <h2 className="text-2xl lg:text-[34px] font-bold mb-3 heading-font  " style={{ color: item.color}}>{item.title}</h2>
          <p className="text-sm lg:text-[17px] text-gray-200 text-center max-w-[300px]" style={{ color: item.color}}>
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Markets;
