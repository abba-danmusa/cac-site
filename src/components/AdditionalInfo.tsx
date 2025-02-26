'use client';
import React, { useState} from 'react';
// import Image from 'next/image';
import Link from 'next/link';
// import { useInView } from 'react-intersection-observer';

const AdditionalInfo = () => {
  // const [ref, inView] = useInView({ threshold: 0.2 });
  const [activeAccordion, setActiveAccordion] = useState<number>();

  const toggleAccordion = (index: number) => {
    setActiveAccordion(index);
  };

  const accordionItems = [
    {
      title: 'Our Revised Service Timelines',
      href: '/revised',
      content: 'View our updated service timelines.',
    },
    {
      title: 'Summary of Our Service Fees',
      href: '/fees',
      content: 'Get a summary of our service fees.',
    },
    {
      title: 'How to Use Our Company Registration Portal',
      href: '/reg',
      content: 'Learn how to navigate and use our company registration portal.',
    },
  ];

  return (
    <section className="py-16 text-black px-4 md:px-8 w-full">
      <div className="flex flex-col md:flex-row w-full">
        {/* <div className="w-full md:w-7/12 flex items-start mb-8 md:mb-0">
          <div className="relative">
            <div className="absolute top-0 left-0" style={{ transform: 'translateY(70%)', zIndex: 1 }}>
              <Image
                src="https://cdn.prod.website-files.com/632d92031c0baf8864f9163f/63e3663c8bcb22a8ac76ac89_CAC-Logo.jpg" // Replace with your image path
                alt="Image 1"
                width={386}
                height={400}
                className="scale-100 transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative z-20">
              <Image
                src="https://cdn.prod.website-files.com/632d92031c0baf8864f9163f/63e3663c8bcb22a8ac76ac89_CAC-Logo.jpg" // Replace with your image path
                alt="Image 2"
                width={810}
                height={512}
                className="scale-100 transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 right-0" style={{ transform: 'translateY(50%)', zIndex: 1 }}>
              <Image
                src="https://cdn.prod.website-files.com/632d92031c0baf8864f9163f/63e3663c8bcb22a8ac76ac89_CAC-Logo.jpg" // Replace with your image path
                alt="Image 3"
                width={386}
                height={500}
                className="scale-100 transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div> */}
        <div className="w-full md:w-5/12 flex flex-col items-start">
          <h2 className="text-4xl font-bold mb-8">Additional Information</h2> {/* Changed title here */}
          <div className="w-full">
            <dl className="space-y-4">
              {accordionItems.map((item, index: number) => (
                <div key={index} className="border-b border-gray-300 pb-2">
                  <dt
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="text-lg">{item.title}</span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        activeAccordion === index ? 'transform rotate-90' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </dt>
                  {activeAccordion === index && (
                    <dd className="mt-2 text-gray-600">{item.content}</dd>
                  )}
                </div>
              ))}
            </dl>
          </div>
          <Link
            href="/main-pages-contact-1"
            className="mt-8 bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            <span>START A PROJECT</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo;