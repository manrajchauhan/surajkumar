'use client'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    imgSrc: '/img/cube.png',
    category: 'Electronics Engineering',
    title: 'Exploring the World of Integrated Circuits',
    link: '#'
  },
  {
    id: 2,
    imgSrc: '/img/cube.png',
    category: 'Electronics Engineering',
    title: 'Understanding Microcontrollers: A Beginner\'s Guide',
    link: '#'
  },
  {
    id: 3,
    imgSrc: '/img/cube.png',
    category: 'Communication Engineering',
    title: 'The Evolution of Wireless Communication',
    link: '#'
  },
  {
    id: 4,
    imgSrc: '/img/cube.png',
    category: 'Communication Engineering',
    title: 'Introduction to 5G Technology',
    link: '#'
  },
  {
    id: 5,
    imgSrc: '/img/cube.png',
    category: 'Robotics',
    title: 'Advancements in Robotic Automation',
    link: '#'
  },
  {
    id: 6,
    imgSrc: '/img/cube.png',
    category: 'Robotics',
    title: 'The Future of Humanoid Robots',
    link: '#'
  }
];

export default function Blog() {
  return (
    <section className="px-8 mb-8">
      <div className="flex flex-wrap -m-4">
        {blogPosts.map(post => (
          <div key={post.id} className="w-full lg:w-1/3 p-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative mb-8 w-full"
              style={{ height: '380px' }}
            >
              <Image className="absolute inset-0 object-cover object-right-bottom rounded-2xl w-full h-full" src={post.imgSrc} alt="" layout="fill" />
              <div className="absolute bottom-0 right-0">
                <Link href={post.link}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gray-50 rounded-2xl flex items-center justify-center w-20 h-20 hover:bg-gray-400 text-black hover:text-white transition duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M21.875 7V18.375C21.875 18.6071 21.7828 18.8296 21.6187 18.9937C21.4546 19.1578 21.2321 19.25 21 19.25C20.7679 19.25 20.5454 19.1578 20.3813 18.9937C20.2172 18.8296 20.125 18.6071 20.125 18.375V9.11203L7.61906 21.6191C7.45488 21.7832 7.23219 21.8755 7 21.8755C6.7678 21.8755 6.54512 21.7832 6.38094 21.6191C6.21675 21.4549 6.12451 21.2322 6.12451 21C6.12451 20.7678 6.21675 20.5451 6.38094 20.3809L18.888 7.875H9.625C9.39293 7.875 9.17037 7.78281 9.00628 7.61872C8.84219 7.45462 8.75 7.23206 8.75 7C8.75 6.76794 8.84219 6.54538 9.00628 6.38128C9.17037 6.21719 9.39293 6.125 9.625 6.125H21C21.2321 6.125 21.4546 6.21719 21.6187 6.38128C21.7828 6.54538 21.875 6.76794 21.875 7Z" fill="currentColor"></path>
                    </svg>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
            <span className="inline-block rounded-full px-2 py-1 border border-gray-200 text-gray-700 text-sm font-medium tracking-tight mb-4">{post.category}</span>
            <Link href={post.link}>
              <motion.div
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="tracking-tight text-2xl font-semibold max-w-sm hover:underline block"
              >
                {post.title}
              </motion.div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
