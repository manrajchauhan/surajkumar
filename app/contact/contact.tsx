'use client'
import React, { useState, FormEvent, ChangeEvent } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    subject: 'What can we help you with?',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm('service_0buimpi', 'template_hj3krmh', e.target as HTMLFormElement, 'dh9BK8lYDA0kXVdrb')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          subject: 'What can we help you with?',
          message: ''
        });
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <section className="py-12 md:py-20 bg-coolGray-50">
      <div className="mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 xl:w-5/12 px-4 mb-16 lg:mb-0">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h1 className="font-heading text-6xl xs:text-8xl sm:text-9xl xl:text-10xl tracking-tighter mb-20">Let's talk</h1>
              <div className="sm:flex mb-10">
                <div className="flex h-12 w-12 items-center justify-center border border-coolGray-400 rounded-2xl">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M15.9945 11H16.0035" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M11.9945 11H12.0035" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M7.99451 11H8.00349" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <div className="mt-6 sm:mt-0 sm:ml-6">
                  <span className="block text-lg font-medium mb-5">Drop us a line or send us an email.</span>
                  <p className="text-lg text-neutral-900 mb-1">contact@earlyeffects.com</p>
                  {/* <span className="text-lg font-medium">help@earlyeffects.com</span> */}
                </div>
              </div>
              <div className="sm:flex mb-10">
                <div className="flex h-12 w-12 items-center justify-center border border-coolGray-400 rounded-2xl">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"></path>
                  </svg>
                </div>
                <div className="mt-6 sm:mt-0 sm:ml-6">
                  <span className="block text-lg font-medium mb-5">Call us</span>
                  <span className="text-lg font-medium">+91 86899 22709</span>
                </div>
              </div>
              <div className="sm:flex">
                <div className="flex h-12 w-12 items-center justify-center border border-coolGray-400 rounded-2xl">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9989 13.4299C13.722 13.4299 15.1189 12.0331 15.1189 13.4299C15.1189 10.3099C15.1189 8.58681 13.722 7.18994 11.9989 7.18994C10.2758 7.18994 8.87891 8.58681 8.87891 10.3099C8.87891 12.0331 10.2758 13.4299 11.9989 13.4299Z" stroke="black" strokeWidth="1.5"></path>
                    <path d="M3.62166 8.49C5.59166 -0.169998 18.4217 -0.159997 20.3817 8.5C21.5317 13.58 18.3717 17.88 15.6017 20.54C13.5917 22.48 10.4117 22.48 8.39166 20.54C5.63166 17.88 2.47166 13.57 3.62166 8.49Z" stroke="black" strokeWidth="1.5"></path>
                  </svg>
                </div>
                <div className="mt-6 sm:mt-0 sm:ml-6">
                  <span className="block text-lg font-medium mb-5">Visit us</span>
                  <span className="block mb-0.5 text-lg font-medium">Sec-15, Plot 22/23, Near D-Mart,</span>
                  <span className="text-lg font-medium">Kalamboli, Navi Mumbai, Raigad,</span>
                  <p className="text-lg font-medium">Maharashtra, India - 410218</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-7/12 px-4">
            <div className="max-w-lg lg:max-w-none mx-auto py-12 px-8 md:px-10 bg-white rounded-4xl">
              <h3 className="text-3xl tracking-tight mb-8">Contact Us</h3>
              <form onSubmit={handleSubmit}>
                <input
                  className="block w-full py-4 px-8 h-16 mb-6 text-coolGray-500 bg-white border border-coolGray-400 rounded-full"
                  type="text"
                  placeholder="First Name*"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  className="block w-full py-4 px-8 h-16 mb-6 text-coolGray-500 bg-white border border-coolGray-400 rounded-full"
                  type="text"
                  placeholder="Last Name*"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                <input
                  className="block w-full py-4 px-8 h-16 mb-6 text-coolGray-500 bg-white border border-coolGray-400 rounded-full"
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  className="block w-full py-4 px-8 h-16 mb-6 text-coolGray-500 bg-white border border-coolGray-400 rounded-full"
                  type="text"
                  placeholder="Phone number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                <div className="relative">
                  <span className="absolute top-1/2 right-0 mr-10 transform -translate-y-1/2">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.33203 1.66439L5.9987 6.33105L10.6654 1.66439" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                  <select
                    className="relative block w-full py-4 px-8 h-16 mb-6 text-coolGray-500 bg-transparent border border-coolGray-400 rounded-full appearance-none outline-none"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option disabled value="What can we help you with?">What can we help you with?</option>
                    <option value="Services">Services</option>
                    <option value="Products">Products</option>
                  </select>
                </div>
                <textarea
                  className="w-full h-52 py-5 px-8 text-coolGray-500 bg-white border border-coolGray-400 rounded-3xl resize-none mb-8"
                  placeholder="Message"
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <div className="sm:text-right">
                  <button
                    className="inline-block w-full sm:w-auto py-5 px-8 sm:px-24 text-center font-medium text-white leading-none bg-black hover:bg-neutral-50 hover:border hover:border-neutral-900 hover:text-neutral-900 rounded-full transition duration-150"
                    type="submit"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
