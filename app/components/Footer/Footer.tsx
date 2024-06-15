import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <section className="py-12 md:py-20 border-t ">
            <div className="mx-auto px-4">
                <div className="flex flex-wrap -mx-4 mb-24">
                    <div className="w-full xl:w-4/12 px-4 mb-12 xl:mb-0">
                        <Link className="inline-block" href="/">
                            <Image className="block h-10" src="/logo.svg" alt="" width={400} height={400}/>
                        </Link>
                    </div>
                    <div className="w-1/2 md:w-1/4 xl:w-2/12 px-4 mb-8 md:mb-0">
                        <h5 className="text-sm font-medium text-coolGray-500 mb-4">About</h5>
                        <ul>
                            <li className="mb-2"><Link className="inline-block text-lg text-black" href="/contact">Contact</Link></li>
                            <li className="mb-2"><Link className="inline-block text-lg text-black" href="/blog">Blog</Link></li>

                        </ul>
                    </div>
                    <div className="w-1/2 md:w-1/4 xl:w-2/12 px-4 mb-8 md:mb-0">
                        <h5 className="text-sm font-medium text-coolGray-500 mb-4">Company</h5>
                        <ul>
                        <li className="mb-2"><Link className="inline-block text-lg text-black" href="/about">Our Story</Link></li>
                            <li>
                                <Link className="inline-block text-lg text-black" href="/careers">
                                    <span className="mr-2">Careers</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-1/2 md:w-1/4 xl:w-2/12 px-4">
                        <h5 className="text-sm font-medium text-coolGray-500 mb-4">Explore</h5>
                        <ul>
                            <li className="mb-2"><Link className="inline-block text-lg text-black" href="#">How We Works</Link></li>
                            <li className="mb-2"><Link className="inline-block text-lg text-black" href="#">Services</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4 items-center relative">
                    <div className="w-full xl:w-4/12 px-4 mb-8 xl:mb-0">
                        <div className="md:flex items-center justify-between">
                            <div className="flex mb-6 md:mb-0 md:mr-12 items-center">
                                <span className="inline-block">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 17.4727C4.32819 17.4727 0.527344 13.6718 0.527344 9C0.527344 4.32819 4.32819 0.527346 9 0.527346C13.6718 0.527346 17.4727 4.32819 17.4727 9C17.4727 13.6718 13.6718 17.4727 9 17.4727Z" stroke="black" strokeWidth="0.9375" strokeMiterlimit="10"></path>
                                        <path d="M9 17.4727C11.0578 17.4727 13.3594 13.6718 13.3594 9C13.3594 4.32819 11.0578 0.527347 9 0.527347" stroke="black" strokeWidth="0.9375" strokeMiterlimit="10"></path>
                                        <path d="M9 17.4727C6.94216 17.4727 4.64062 13.6718 4.64062 9C4.64062 4.32819 6.94216 0.527347 9 0.527347" stroke="black" strokeWidth="0.9375" strokeMiterlimit="10"></path>
                                        <path d="M0.527344 9H17.4727" stroke="black" strokeWidth="0.9375" strokeMiterlimit="10"></path>
                                        <path d="M2.76953 3.2634C4.31887 4.25621 6.53814 4.95667 8.99908 4.95667C11.4601 4.95667 13.6794 4.25618 15.2288 3.26333" stroke="black" strokeWidth="0.9375" strokeMiterlimit="10"></path>
                                        <path d="M15.2288 14.7365C13.6794 13.7437 11.4602 13.0432 8.99922 13.0432C6.53821 13.0432 4.3189 13.7437 2.76953 14.7366" stroke="black" strokeWidth="0.9375" strokeMiterlimit="10"></path>
                                        <path d="M9 0.527347V17.4727" stroke="black" strokeWidth="0.9375" strokeMiterlimit="10"></path>
                                    </svg>
                                </span>
                                <span className='ml-1'>English</span>
                            </div>
                            <div className="-mb-2">
                                <Link className="inline-block text-sm mb-2 mr-12 text-coolGray-500" href="#">Terms of Use</Link>
<Link className="inline-block text-sm mb-2 text-coolGray-500 hover:text-coolGray-600" href="#">Privacy Policy</Link>
</div>
</div>
</div>
<div className="hidden md:block md:w-1/2 xl:w-4/12 px-4 xl:text-center mb-8 md:mb-0">
                        <span className="text-sm text-coolGray-500">© 2024 Early Effects Engineering </span>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-4/12 px-4">
                        <div className="flex flex-col xs:flex-row -mb-3 xs:items-center md:justify-end">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;