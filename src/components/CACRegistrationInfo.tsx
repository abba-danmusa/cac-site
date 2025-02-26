import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component

const CACRegistrationUI: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row px-4 py-8 md:px-8 md:py-[5rem]  text-white z-10">
      {/* Image Placeholder (Left Side) */}
      <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
        <div className="relative w-full h-80 bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRQkCFwTpnHcOetRlUQUbmcDNfQiCGawGd6g&s" // Replace with your image path
            alt="Layout Image"
            layout="fill"
            objectFit="cover"
            // className="opacity-75" // Optional: Adjust opacity
          />
        </div>
      </div>

      {/* Content (Right Side) */}
      <div className="md:w-1/2">
        {/* <h1 className="text-3xl font-bold mb-6">
          Better way to create stunning layouts.
        </h1> */}

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
          <p className="">
            We believe that a website is the foundation of a successful online
            presence, and our goal is to help businesses establish a strong
            digital presence. Our process begins with understanding your
            business goals.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Our Vision</h2>
          <p className="">
            We then use this information to create a custom website that not
            only reflects your brand but also helps you achieve your business
            objectives. From responsive design to intuitive navigation, we
            focus on every detail.
          </p>
        </div>

        <Link
          href="/learn-more" // Replace with your actual link
          className="flex items-center text-blue-500 hover:text-blue-700 font-semibold"
        >
          Learn more about us <span className="ml-2">→</span>
        </Link>
      </div>
    </div>
  );
};

export default CACRegistrationUI;