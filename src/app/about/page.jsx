"use client"

import React, { useRef } from 'react'
import { motion, useInView, useScroll } from 'framer-motion';
import Brain from '@/components/Brain';

const AboutPage = () => {

const containerRef = useRef();

  const {scrollYProgress} = useScroll({container: containerRef});

  const skillRef = useRef();

  const isSkillRefInView = useInView(skillRef);


  const experienceRef = useRef();
  const isExperienceInView = useInView(experienceRef);


  return (
    <motion.div 
    className="h-full" 
    initial={{ y: "-200vh" }} 
    animate={{ y: "0%" }} 
    transition={{duration: 1}}>

    {/* CONTAINER */}
    <div className='h-full overflow-scroll lg:flex' ref={containerRef}>
      {/* TEXT CONTAINER */}
      <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-60 lg:w-2/3 lg:pr-0 xl:w-1/2'>
        {/* BIOGRAPHY CONTAINER */}
        <div className='flex flex-col gap-12 justify-center'>
          {/* BIOGRAPHY TITLE */}
          <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
          {/* BIOGRAPHY DESC */}
          <p className='text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quasi magnam, totam voluptate dolor sequi quia numquam suscipit
            debitis nobis, eveniet corrupti voluptatem ipsum ratione at harum, 
            architecto odio dolore obcaecati!
          </p>
          {/* BIOGRAPHY QUOTE */}
          <span className='italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
          {/* BIOGRAPHY SIGN SVG*/}
          <div className="self-end">
          <svg width="217" height="78" viewBox="0 0 217 78" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.4873 62.4218C17.9145 62.9872 17.9862 58.2339 17.8796 57.5521C17.4293 54.6734 16.9862 51.7789 16.5175 48.9002C16.1325 46.5351 16.3727 44.1507 16.0146 41.7848C15.7573 40.0843 15.0926 38.7018 15.0926 36.986C15.0926 34.2557 14.9042 31.8465 15.7632 29.3269C17.0763 25.4754 23.8764 28.198 25.9262 29.1614C27.9406 30.1083 27.8756 34.2759 27.4768 36.3005C26.8663 39.4 23.4498 41.7566 20.939 42.423C19.8814 42.7037 16.6041 43.5169 17.6281 44.9761C18.5519 46.2925 20.0443 47.2163 21.1276 48.3801C23.1137 50.514 24.2943 52.3206 27.1206 53.2025C32.5543 54.898 39.4166 52.2788 42.5432 46.9145C45.6913 41.5134 46.75 31.2457 44.01 25.4501C42.0859 21.38 38.4334 17.5834 34.9367 15.238C32.6274 13.689 30.5018 13.3105 27.9169 12.5431C21.0683 10.5099 14.2547 10.372 8.70145 15.5925C5.14262 18.9382 2.98793 21.974 2.45697 27.3649C1.89999 33.0198 1.76065 39.8257 2.56174 45.4489C3.87223 54.6477 13.3079 62.2979 21.0857 63.2728C24.7803 63.7359 29.0049 65.8009 31.4582 61.4053C33.0363 58.5778 35.3417 53.1841 38.3732 52.0442C40.1258 51.3852 42.572 51.2811 44.4291 51.3587C45.4478 51.4012 44.1968 52.5163 43.9681 52.8479C42.7775 54.5749 41.3683 54.8836 40.3639 56.7957C39.6475 58.1595 39.7198 61.3951 40.0706 62.9419C40.5131 64.8932 43.203 66.2993 44.8692 66.4168C46.0747 66.5018 46.6684 63.983 46.8599 62.9891C47.4886 59.7265 47.8477 57.2275 47.5304 54.0062C47.2723 51.3852 43.5184 50.3531 42.0613 51.9969C40.6865 53.5478 41.0913 55.1573 41.4745 57.103C41.8984 59.2546 47.6076 58.3123 48.9972 57.5285C51.2551 56.2549 52.4338 51.6056 52.4338 49.0184C52.4338 46.3763 52.6808 51.7926 52.7272 52.3042C52.8497 53.6554 52.8488 56.2726 54.0264 57.1266C56.1039 58.6333 60.0771 58.6797 62.2825 57.4103C63.3984 56.768 62.8408 55.2633 63.3721 54.1244C63.8372 53.1276 63.928 51.8451 63.5607 50.7677C62.867 48.7329 62.995 44.9796 62.995 50.0112C62.995 52.8033 63.1395 53.4413 65.8448 53.4862C66.8496 53.5029 67.8753 53.6959 68.7365 53.0607C70.7368 51.5853 72.8836 49.3323 73.6399 46.7726C74.1321 45.1068 74.5489 43.6347 75.5887 42.2812C76.8029 40.7007 78.7386 44.4493 79.13 45.4961C79.8902 47.5289 79.822 49.9085 80.534 51.9969C80.9276 53.1513 80.7075 48.1642 80.7226 47.2454C80.7607 44.9216 82.49 38.1119 85.2488 37.7661C87.1542 37.5273 91.6304 37.2417 92.0171 40.2955C92.3665 43.0542 93.2818 45.7557 94.1126 48.3801C95.4139 52.4905 102.51 46.5951 104.066 44.9997C105.935 43.0825 106.59 38.5371 105.91 35.8513C105.535 34.3703 104.516 33.9129 103.291 33.9129C100.301 33.9129 99.5652 34.0628 98.073 37.0333C97.471 38.2319 94.821 43.5104 97.1929 43.5104C100.28 43.5104 102.173 42.289 104.234 39.9646C104.897 39.2164 105.182 38.5062 105.26 37.4824C105.607 32.9807 107.014 38.9345 107.67 40.3664C109.646 44.6755 115.553 44.8443 118.944 42.5885C123.624 39.4749 123.916 32.5298 123.177 27.1521C122.885 25.029 122.314 21.688 120.914 20.1076C119.256 18.2375 119.21 23.6817 119.195 24.6464C119.114 29.9686 118.789 33.8801 122.192 37.7188C123.298 38.9665 125.525 40.2786 125.901 42.0921C126.361 44.3089 127.081 46.4381 127.514 48.6401C127.872 50.4564 128.36 52.0165 128.248 53.9117C128.135 55.8206 127.457 50.1889 126.969 48.3565C126.357 46.0542 126.739 43.182 126.739 40.8156C126.739 39.4882 126.362 38.3484 126.362 37.0806C126.362 35.8693 125.772 34.6919 126.068 33.4874C126.48 31.8144 128.095 30.9058 129.295 30.0834C131.455 28.604 133.923 28.9197 134.576 32.0691C135.217 35.1589 136.066 41.2339 133.612 43.5104C132.57 44.4771 130.648 46.1773 129.379 46.6545C129.159 46.7372 126.78 47.4792 126.99 46.8199C127.791 44.311 132.376 45.1931 134.199 44.5506C135.53 44.0814 136.71 44.3181 138.055 44.1014C140.279 43.7429 142.41 43.6996 144.697 43.6996C145.373 43.6996 151.968 44.7745 151.968 45.638C151.968 47.4893 149.019 49.2547 147.945 50.0821C144.385 52.8253 140.624 55.1185 136.986 57.7176C132.955 60.5978 129.379 64.1598 125.482 67.2442C125.177 67.4857 123.082 68.8066 124.015 67.2678C126.097 63.8341 129.775 61.6533 132.942 59.7742C139.111 56.1127 144.906 51.8616 150.9 47.8601C151.17 47.6795 154.897 45.8593 154.86 46.1108C154.638 47.6147 152.741 49.2314 151.885 50.224C150.069 52.328 148.295 54.4345 146.793 56.8429C144.825 59.9974 144.589 63.171 143.335 66.6059C142.191 69.7403 140.405 72.4845 139.06 75.5179C138.149 77.5746 142.121 72.4802 143.628 70.9319C153.9 60.3792 164.99 51.168 176.36 42.1866C186.874 33.8806 198.588 25.9704 207.142 14.9779C210.171 11.086 212.497 6.31901 215 2" stroke="black" stroke-width="3" stroke-linecap="round"/>
</svg>
          </div>
          {/* BIOGRAPHY SCROLL SVG */}
          <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
        </div>
        {/* SKILLS CONTAINER */}
        <div className='flex flex-col gap-12 justify-center' ref={skillRef}>
          {/* SKILL TITLE */}
          <motion.h1 
          initial={{x:"-300px" }} 
          animate={isSkillRefInView ? {x:0} : {}}
          transition={{ delay: 0.2 }}
          className='font-bold text-2xl'>SKILLS</motion.h1>
          {/* SKILL LIST */}
          <motion.div 
          initial={{x:"-300px" }} 
          animate={isSkillRefInView ? {x:0} : {}}
          transition={{ delay: 0.2 }}
          className='flex gap-4 flex-wrap'>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Flutter</div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Node.js</div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Next.js</div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>AWS</div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>MY SQL</div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Tailwind CSS</div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Mongo DB</div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Express.js</div>
          </motion.div>
          {/* SKILL SCROLL SVG */}
          <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
        {/* EXPERIENCE CONTAINER */}
        <div className='flex flex-col gap-12 justify-center pb-48' ref={experienceRef}>
          {/* EXPERIENCE TITLE */}
          <motion.h1 
          initial={{ x: "-300px"}}
          animate={isExperienceInView ? {x:0} : {}}
          transition={{ delay: 0.2 }}
          className='font-bold text-2xl' >EXPERIENCE</motion.h1>
          {/* EXPEIRENCE LIST */}
          <motion.div 
           initial={{ x: "-300px"}}
           animate={isExperienceInView ? {x:0} : {}}
           transition={{ delay: 0.2 }}
          className=''>
            {/* EXPERIENCE LIST ITEM */}
            
            {/* 1 ROW */}
            <div className='flex justify-between h-48'>
              {/* LEFT */}
              <div className='w-1/3'>
                {/* JOB TITLE */}
                <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Senior Javascript Engineer</div>
                {/* JOB DESC */}
                <div className='p-3 text-sm italic'>My current employment. Way better than the position before!</div>
                {/* JOB DATE */}
                <div className='p-3 text-red-400 text-sm font-semibold'>2024 - Present</div>
                {/* JOB COMPANY */}
                <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>Apple</div>
              </div>
              {/* CENTER */}
              <div className='w-1/6 '>
                {/* LINE */}
                <div className='w-1 h-full bg-gray-600 rounded relative'>
                  {/* LINE CIRCLE */}
                  <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className='w-1/3'></div>
            </div>

            {/* 2 ROW */}
            <div className='flex justify-between h-48'>
              {/* LEFT */}
              <div className='w-1/3'></div>
              {/* CENTER */}
              <div className='w-1/6 '>
                {/* LINE */}
                <div className='w-1 h-full bg-gray-600 rounded relative'>
                  {/* LINE CIRCLE */}
                  <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className='w-1/3'>
                {/* JOB TITLE */}
                <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Senior Javascript Engineer</div>
                {/* JOB DESC */}
                <div className='p-3 text-sm italic'>My current employment. Way better than the position before!</div>
                {/* JOB DATE */}
                <div className='p-3 text-red-400 text-sm font-semibold'>2024 - Present</div>
                {/* JOB COMPANY */}
                <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>Apple</div>
              </div>
            </div>

            {/* 3 ROW */}
            <div className='flex justify-between h-48'>
              {/* LEFT */}
              <div className='w-1/3'>
                {/* JOB TITLE */}
                <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Senior Javascript Engineer</div>
                {/* JOB DESC */}
                <div className='p-3 text-sm italic'>My current employment. Way better than the position before!</div>
                {/* JOB DATE */}
                <div className='p-3 text-red-400 text-sm font-semibold'>2024 - Present</div>
                {/* JOB COMPANY */}
                <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>Apple</div>
              </div>
              {/* CENTER */}
              <div className='w-1/6 '>
                {/* LINE */}
                <div className='w-1 h-full bg-gray-600 rounded relative'>
                  {/* LINE CIRCLE */}
                  <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className='w-1/3'></div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* SVG CONTAINER */}
      <div className='hidden lg:block w-1/3 sticky  top-0 z-30 xl:w-1/2'>
        <Brain scrollYProgress={scrollYProgress} />
      </div>
    </div>
    </motion.div>
  )
}

export default AboutPage