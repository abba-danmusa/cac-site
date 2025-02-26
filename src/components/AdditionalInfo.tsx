// 'use client';
// import React, { useState} from 'react';
// // import Image from 'next/image';
// import Link from 'next/link';
// // import { useInView } from 'react-intersection-observer';

// const AdditionalInfo = () => {
//   // const [ref, inView] = useInView({ threshold: 0.2 });
//   const [activeAccordion, setActiveAccordion] = useState<number>();

//   const toggleAccordion = (index: number) => {
//     setActiveAccordion(index);
//   };

//   const accordionItems = [
//     {
//       title: 'Our Revised Service Timelines',
//       href: '/revised',
//       content: 'View our updated service timelines.',
//     },
//     {
//       title: 'Summary of Our Service Fees',
//       href: '/fees',
//       content: 'Get a summary of our service fees.',
//     },
//     {
//       title: 'How to Use Our Company Registration Portal',
//       href: '/reg',
//       content: 'Learn how to navigate and use our company registration portal.',
//     },
//   ];

//   return (
//     <section className="py-16 text-black px-4 md:px-8 w-full">
//       <div className="flex flex-col md:flex-row w-full">
//         {/* <div className="w-full md:w-7/12 flex items-start mb-8 md:mb-0">
//           <div className="relative">
//             <div className="absolute top-0 left-0" style={{ transform: 'translateY(70%)', zIndex: 1 }}>
//               <Image
//                 src="https://cdn.prod.website-files.com/632d92031c0baf8864f9163f/63e3663c8bcb22a8ac76ac89_CAC-Logo.jpg" // Replace with your image path
//                 alt="Image 1"
//                 width={386}
//                 height={400}
//                 className="scale-100 transition-transform duration-300 hover:scale-105"
//               />
//             </div>
//             <div className="relative z-20">
//               <Image
//                 src="https://cdn.prod.website-files.com/632d92031c0baf8864f9163f/63e3663c8bcb22a8ac76ac89_CAC-Logo.jpg" // Replace with your image path
//                 alt="Image 2"
//                 width={810}
//                 height={512}
//                 className="scale-100 transition-transform duration-300 hover:scale-105"
//               />
//             </div>
//             <div className="absolute bottom-0 right-0" style={{ transform: 'translateY(50%)', zIndex: 1 }}>
//               <Image
//                 src="https://cdn.prod.website-files.com/632d92031c0baf8864f9163f/63e3663c8bcb22a8ac76ac89_CAC-Logo.jpg" // Replace with your image path
//                 alt="Image 3"
//                 width={386}
//                 height={500}
//                 className="scale-100 transition-transform duration-300 hover:scale-105"
//               />
//             </div>
//           </div>
//         </div> */}
//         <div className="w-full md:w-5/12 flex flex-col items-start">
//           <h2 className="text-4xl font-bold mb-8">Additional Information</h2> {/* Changed title here */}
//           <div className="w-full">
//             <dl className="space-y-4">
//               {accordionItems.map((item, index: number) => (
//                 <div key={index} className="border-b border-gray-300 pb-2">
//                   <dt
//                     className="flex justify-between items-center cursor-pointer"
//                     onClick={() => toggleAccordion(index)}
//                   >
//                     <span className="text-lg">{item.title}</span>
//                     <svg
//                       className={`w-5 h-5 transition-transform duration-300 ${
//                         activeAccordion === index ? 'transform rotate-90' : ''
//                       }`}
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M9 5l7 7-7 7"
//                       ></path>
//                     </svg>
//                   </dt>
//                   {activeAccordion === index && (
//                     <dd className="mt-2 text-gray-600">{item.content}</dd>
//                   )}
//                 </div>
//               ))}
//             </dl>
//           </div>
//           <Link
//             href="/main-pages-contact-1"
//             className="mt-8 bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
//           >
//             <span>START A PROJECT</span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AdditionalInfo;


// import Image from "next/image"
import Link from "next/link";

const AdditionalInfo = () => {
  return (
    <div className=" flex flex-col px-[2rem] md:px-0 md:flex-row md:justify-around space-y-16 md:mt-[3rem]  py-8 relative overflow-hidden">
      {/* <div className="flex flex-row absolute -right-8 -top-4 ">
        <Image src="/assests/clips.svg" alt="info" className="hidden md:block  " width={665} height={570} />
      </div> */}
      <div className="flex flex-col w-auto z-10 justify-between items-start  border-2 border-black p-4 md:w-[374px] md:h-[471px] rounded-md   transition duration-300 ">
        <h3 className="text-xl md:text-[33px] lg:text-[43px] leading-[62px] font-merriweather  font-bold text-black group-hover:text-primary">Additional Information</h3>
        <p className="text-[#4D6C4A] font-roboto md:text-[20px] group-hover:text-primary">
          Have some questions? {" "}
          <br/>
          see if the additional  information helps
        </p> 
      </div>
      <div className="bg-white border shadow-md flex flex-col  z-10 md:w-auto  p-3 md:p-4">
        <ul className="list-disc   md:pl-5 py-10 space-y-8 text-black">
          <Link href='/revised' className="flex gradient-hover font-merriweather md:h-[5rem] md:text-[20px] lg:text-[25px] md:leading-10 px-4 group cursor-pointer text-lg justify-between items-center">
            <div className="h-4 w-4 rounded-full mr-4 bg-secondary group-hover:bg-primary"/>
            Our Revised Service Timelines <span>→</span>
          </Link>
          <Link href='/fees' className="flex gradient-hover font-merriweather  md:text-[20px] lg:text-[25px] md:leading-10 md:h-[5rem] px-4 group cursor-pointer text-[16px] justify-between items-center">
          <div className="h-4 w-4 rounded-full mr-4 bg-secondary group-hover:bg-primary"/>
            Summary of Our Service Fees <span>→</span>
          </Link>
          <Link href='/reg' className="flex gradient-hover font-merriweather  md:text-[20px] lg:text-[25px] md:leading-10 md:h-[5rem]  px-4 group cursor-pointer text-[16px] justify-between items-center">
          <div className="h-4 w-4 rounded-full mr-4 bg-secondary group-hover:bg-primary"/>
            How to Use Our Company <br /> Registration Portal <span>→</span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default AdditionalInfo