import Link from 'next/link'
import React from 'react'

export default function Bread() {
  return (
    <div>
       <section className="relative">
      <div className="py-6 border-t border-neutral-200">
        <div className="mx-auto px-4">
          <div className="flex items-center">
            <Link className="inline-block text-black" href="/">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.51699 2.36667L3.02533 5.86667C2.27533 6.45 1.66699 7.69167 1.66699 8.63334V14.8083C1.66699 16.7417 3.24199 18.325 5.17533 18.325H14.8253C16.7587 18.325 18.3337 16.7417 18.3337 14.8167V8.75C18.3337 7.74167 17.6587 6.45 16.8337 5.875L11.6837 2.26667C10.517 1.45 8.64199 1.49167 7.51699 2.36667Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M10 14.9917V12.4917"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </Link>
            <span className="inline-block mx-4">
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.83341 4.23333L2.00841 0.408327C1.85228 0.253118 1.64107 0.166 1.42091 0.166C1.20076 0.166 0.989548 0.253118 0.833413 0.408327C0.755306 0.485797 0.693311 0.577964 0.651003 0.679513C0.608696 0.781063 0.586914 0.889984 0.586914 0.999994C0.586914 1.11 0.608696 1.21893 0.651003 1.32047C0.693311 1.42202 0.755306 1.51419 0.833413 1.59166L4.66675 5.40833C4.74485 5.4858 4.80685 5.57796 4.84916 5.67951C4.89146 5.78106 4.91324 5.88998 4.91324 5.99999C4.91324 6.11 4.89146 6.21893 4.84916 6.32048C4.80685 6.42202 4.74485 6.51419 4.66675 6.59166L0.833413 10.4083C0.676493 10.5641 0.587897 10.7759 0.587116 10.997C0.586335 11.2182 0.673432 11.4306 0.829247 11.5875C0.985061 11.7444 1.19683 11.833 1.41797 11.8338C1.6391 11.8346 1.85149 11.7475 2.00841 11.5917L5.83341 7.76666C6.30158 7.29791 6.56455 6.6625 6.56455 5.99999C6.56455 5.33749 6.30158 4.70208 5.83341 4.23333Z"
                  fill="black"
                ></path>
              </svg>
            </span>
            <Link className="inline-block text-black" href="/contact">
             Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
