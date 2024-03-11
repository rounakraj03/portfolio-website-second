"use client"

import Image from "next/image";
import {motion} from 'framer-motion';

export default function Home() {
  return (
    <motion.div 
    className="h-full" 
    initial={{ y: "-200vh" }} 
    animate={{ y: "0%" }} 
    transition={{duration: 1}}>
    <div className="flex flex-col lg:flex-row h-full gap -4 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
      {/* IMAGE CONTAINER */}
      <div className = "h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/hero.png" alt="hero" fill className="object-contain"></Image>
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold">Crafting Digital Experiences, Designing Tomorrow.</h1>
        {/* DESC */}
        <p className="md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Non et iure delectus, officiis itaque nam sequi quia molestiae minus nesciunt 
        facilis nostrum distinctio tempore iusto laboriosam architecto ipsum rerum a?</p>
        {/* BUTTONS */}
        <div className="w-full flex gap-4 justify-start">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
          <button className="p-4 rounded-lg ring-1 ring-black ">Contact Me</button>
        </div>
      </div>
    </div>
    </motion.div>
  );
}
