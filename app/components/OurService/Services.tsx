'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const servicesData = [
  {
    title: 'Electronic Design Services',
    description: 'We develop high-performance electronics based on modern SoCs and ARM Cortex-A series processors for various application fields. Our engineering team...',
    services: [
      'FPGA design',
      'PCB design',
      'Preparing for manufacturing',
      'Certification',
      'Prototyping'
    ],
    GoTo: '/electronic'
  },
  {
    title: 'Embedded Software Design & Development Services',
    description: 'We design, code, and test software for embedded systems. Firmware development, software development for single board computers (SBC) and board support package (BSP) development – these are the types of...',
    services: [
      'Software Development',
      'Board support package development',
      'Prototyping with SBC',
      'RTOS'
    ],
    GoTo: '/embedded'
  },
  {
    title: 'Kernel and Driver Development',
    description: 'We create or modify user-space kernel modules and drivers that handle custom devices for Linux, Windows, macOS, Android, and other operating systems. We implement device driver development projects for Linux, Windows, and macOS and develop Linux kernel modules for embedded devices. The team can...',
    services: [
      'Linux',
      'macOS',
      'Windows',
      'Android'
    ],
    GoTo: '/kernel'
  },
  {
    title: 'System and Application Software Development',
    description: 'We develop application software using a multitude of high-level languages and various software toolkits. Using our low-level programming skills, we develop system services, middleware programs, and other software tools to facilitate the resource...',
    services: [
      'Middleware',
      'BSP',
      'Utilities',
      'Drivers',
      'Qt',
      'C/C++'
    ],
    GoTo: '/system'
  },
  {
    title: 'Computer Vision Development Services',
    description: 'Integra Sources provides custom software development services for video and image analysis based on computer vision and artificial intelligence. Computer vision is one of the most useful technologies applied in many industries, from entertainment to manufacturing and healthcare. With...',
    services: [
      'Image and video processing',
      'Face recognition',
      'Edge computing',
      'Object tracking'
    ],
    GoTo: '/vision'
  },
  {
    title: 'IoT Solutions',
    description: 'Looking to build the entire IoT solution in one company? We\'d glad to help! From smart gadgets to a Cloud infrastructure for managing connected...',
    services: [
      'Industrial IoT',
      'Industry 4.0',
      'AWS IoT',
      'M2M',
      'Predictive maintenance',
      'Digital transformation',
      'Azure IoT'
    ],
    GoTo: '/iot'
  }
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <section className="py-12 md:py-24 bg-coolGray-50 overflow-hidden" id='services'>
      <div className="mx-auto px-4">
        <h1 className="font-medium text-6xl xs:text-8xl sm:text-10xl tracking-tighter mb-20">OUR EXPERTISE</h1>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-5/12 px-4 order-last lg:order-first">
            <img className="block h-135 w-full max-w-lg mx-auto lg:mx-0 rounded-4xl object-cover" src="/img/service.jpeg" alt="service logo" />
          </div>
          <div className="w-full lg:w-7/12 px-4 mb-20 lg:mb-0 self-center">
            <div className="max-w-lg xl:max-w-none mx-auto lg:mr-0">
              {servicesData.map((service, index) => (
                <div key={index} className="mb-8">
                  <button className="group block text-left w-full pb-6 mb-8 border-b" onClick={() => toggleAccordion(index)}>
                    <div className="flex items-center">
                      <span className="inline-block mr-8 text-sm">{`0${index + 1}`}</span>
                      <li className="inline-block text-2xl lg:text-3xl xl:text-4xl">{service.title}</li>
                      <span className={`ml-auto inline-block transform ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.8223 15.0312L12.4993 21.3542L6.17643 15.0313" stroke="black" strokeWidth="1.61806" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M12.5 3.646L12.5 21.1772" stroke="black" strokeWidth="1.61806" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </span>
                    </div>
                    <div style={{ height: openIndex === index ? 'auto' : '0' }} className="overflow-hidden duration-500">
                      <div className="mt-6 pr-10 ">
                        <p>{service.description}</p>

                        <ul className='flex flex-col gap-2 mt-4'>
                          {service.services.map((item, i) => (
                            <li className='font-bold' key={i}>• {item}</li>
                          ))}
                        </ul>

                      </div>
                    </div>

                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end">
        <Link href="/Services">
          <div className="group inline-block">
            <div className="flex items-center flex-wrap gap-1">
              <span className="text-neutral-800 text-sm group-hover:text-opacity-80 transition duration-200">VIEW ALL SERVICES</span>
              <div className="text-neutral-800 group-hover:text-opacity-80 transition duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.35147 8.75137C6.8201 8.28275 7.5799 8.28275 8.04853 8.75137L12 12.7028L15.9515 8.75137C16.4201 8.28275 17.1799 8.28275 17.6485 8.75137C18.1172 9.22 18.1172 9.9798 17.6485 10.4484L12.8485 15.2484C12.3799 15.7171 11.6201 15.7171 11.1515 15.2484L6.35147 10.4484C5.88284 9.9798 5.88284 9.22 6.35147 8.75137Z" fill="currentColor"></path>
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </div>
      </div>
    </section>
  );
}
