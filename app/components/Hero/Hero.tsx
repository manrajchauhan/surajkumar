'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <motion.div
    initial={{opacity:0, y:20}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:1.0, delay:0.6}}
     className='rounded-2xl px-4 md:px-14 pb-16 bg-center bg-no-repeat bg-cover relative' style={{ backgroundImage: "url('/img/hero1.jpg')" }}>
      <div className="pt-80">
        <motion.h1
         initial={{opacity:0, y:20}}
         whileInView={{opacity:1, y:0}}
         transition={{duration:1.0, delay:0.8}}
         className="font-heading tracking-tight text-5xl md:text-7xl text-white font-medium max-w-xs md:max-w-3xl mb-6">
        Custom Hardware Design & Software Development Company
        </motion.h1>
        <motion.p
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1.0, delay:1.2}}
         className="tracking-tight text-white text-lg mb-8 max-w-md">
        Do you need an electronic design? And/Or software programming? You're in the right place! We offer full-cycle software and hardware development services.
        </motion.p>
        <Link href="#">
          <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:1.0, delay:1.4}}
          className="rounded-full border border-gray-200 bg-white px-6 py-4 h-16 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 inline-flex items-center justify-center gap-2 transition duration-200 cursor-pointer">
            <span className="font-bold tracking-tight">See Our Projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14 6.66666H7.33333C4.38781 6.66666 2 9.05447 2 12V13.3333M14 6.66666L10 10.6667M14 6.66666L10 2.66666" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </motion.div>
        </Link>
      </div>
      <div className="flex justify-end">
        <Link href="#services">
          <div className="group inline-block">
            <div className="flex items-center flex-wrap gap-1">
              <span className="text-white text-sm group-hover:text-opacity-80 transition duration-200">SCROLL DOWN</span>
              <div className="text-white group-hover:text-opacity-80 transition duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.35147 8.75137C6.8201 8.28275 7.5799 8.28275 8.04853 8.75137L12 12.7028L15.9515 8.75137C16.4201 8.28275 17.1799 8.28275 17.6485 8.75137C18.1172 9.22 18.1172 9.9798 17.6485 10.4484L12.8485 15.2484C12.3799 15.7171 11.6201 15.7171 11.1515 15.2484L6.35147 10.4484C5.88284 9.9798 5.88284 9.22 6.35147 8.75137Z" fill="currentColor"></path>
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}
