'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.section
    initial={{opacity:0, y:20}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:1.0}}
    className="overflow-hidden">
      <div className="px-4 mx-auto">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center gap-6">
            <div className="pr-6 border-r-2 border-transparent lg:border-gray-200">
              <Link href="/">
              <Image
              src="/logo.svg"
              alt="Brand Logo"
              width={200}
              height={100}
              priority
            />
              </Link>
            </div>
            <ul className="hidden lg:flex items-center gap-4">
              <li>
                <Link href="#">
                  <div className="flex items-center flex-wrap gap-2 group cursor-pointer">
                    <span className="group-hover:text-opacity-70 transition duration-200">Services</span>
                    <div className="group-hover:text-opacity-70 transition duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13 5.5L8 10.5L3 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="hover:text-opacity-70 transition duration-200 hover:bg-neutral-100 px-4 py-1 rounded-full">
                <Link href="#">
                  Projects
                </Link>
              </li>
              <li className="hover:text-opacity-70 transition duration-200 hover:bg-neutral-100 px-4 py-1 rounded-full">
                <Link href="#">
                  Company
                </Link>
              </li>
              <li>
                <Link href="#">
                  <div className="flex items-center flex-wrap gap-2 group cursor-pointer">
                    <span className="group-hover:text-opacity-70 transition duration-200">How We Works</span>
                    <div className="group-hover:text-opacity-70 transition duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13 5.5L8 10.5L3 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="hover:text-opacity-70 transition duration-200 hover:bg-neutral-100 px-4 py-1 rounded-full">
                <Link href="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/contact">
           <div className="hidden lg:inline-block py-3 px-5 rounded-full  border border-gray-300 shadow text-sm font-semibold text-neutral-800 focus:ring focus:ring-neutral-800 transition duration-200 cursor-pointer">
              GET IN TOUCH
            </div>
          </Link>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg className="bg-gray-200 p-2 rounded-full" width="51" height="51" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="56" height="56" rx="28" fill="none"></rect>
                <path d="M37 32H19M37 24H19" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
            <nav className="relative z-10 px-9 py-8 h-full overflow-y-auto bg-white flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <Link href="#">
                <Image
              src="/logo.svg"
              alt="Brand Logo"
              width={150}
              height={100}
              priority
            />
                </Link>
                <button onClick={toggleMenu} className="navbar-burger focus:outline-none bg-gray-200 p-2 rounded-full">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </button>
              </div>
              <ul className="flex flex-col gap-12 py-12">
                <li>
                  <Link href="#">
                    <div className="flex items-center flex-wrap gap-2 group cursor-pointer">
                      <span className="group-hover:text-opacity-70 transition duration-200">Services</span>
                      <div className="group-hover:text-opacity-70 transition duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M13 5.5L8 10.5L3 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="hover:text-opacity-70 transition duration-200">
                  <Link href="#">
                    Projects
                  </Link>
                </li>
                <li className="hover:text-opacity-70 transition duration-200">
                  <Link href="#">
                    Company
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <div className="flex items-center flex-wrap gap-2 group cursor-pointer">
                      <span className="group-hover:text-opacity-70 transition duration-200">How We Works</span>
                      <div className="group-hover:text-opacity-70 transition duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M13 5.5L8 10.5L3 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="hover:text-opacity-70 transition duration-200">
                  <Link href="/blog">
                    Blog
                  </Link>
                </li>
              </ul>
              <Link href="/contact">
              <div className="block text-center py-3 px-5 rounded-full  border border-gray-300 shadow text-sm font-semibold text-neutral-800 focus:ring focus:ring-neutral-800 transition duration-200 cursor-pointer">
              GET IN TOUCH
            </div>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </motion.section>
  );
};
