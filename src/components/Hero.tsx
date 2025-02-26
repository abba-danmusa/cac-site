'use client'
import React, { useState, useEffect } from 'react';
import {  Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownAboutVisible, setDropdownAboutVisible] = useState(false);
  const [dropdownServicesVisible, setDropdownServicesVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      Fixed Background
      <div 
        className="fixed inset-0 z-0" 
        style={{
          backgroundImage: 'url(https://e8wm23is9ki.exactdn.com/wp-content/uploads/2024/05/cac-d.jpg?strip=all&lossy=1&ssl=1)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-30">
        {/* Header */}
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
          <div className=" mx-auto px-4">
            <div className="flex items-center justify-between py-2">
              {/* Logo */}
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="CAC Logo"
                  width={150}
                  height={75}
                  className="w-28 h-auto md:w-40 object-contain"
                />
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? 
                  <X size={28} className={isScrolled ? 'text-gray-800' : 'text-white'} /> : 
                  <Menu size={28} className={isScrolled ? 'text-gray-800' : 'text-white'} />
                }
              </button>

              {/* Navigation */}
              <nav
                className={`${
                  isMenuOpen ? "flex" : "hidden"
                } absolute md:relative px-4 md:px-0 top-full left-0 w-full md:w-auto ${isScrolled ? 'bg-white' : 'bg-white md:bg-transparent'} md:flex md:items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 py-6 md:py-0 shadow-lg md:shadow-none`}
              >
                <Link 
                  href="/" 
                  className={`nav-link text-sm ${isScrolled ? 'text-gray-700 hover:text-green-700' : 'text-gray-700 md:text-white hover:text-green-700 md:hover:text-gray-200'}`}
                  onClick={() => isMenuOpen && setIsMenuOpen(false)}
                >
                  Home
                </Link>

                {/* About Dropdown */}
                <div
                  className="relative group"
                  onMouseEnter={() => !isMenuOpen && setDropdownAboutVisible(true)}
                  onMouseLeave={() => !isMenuOpen && setDropdownAboutVisible(false)}
                >
                  <button 
                    className={`flex w-full items-center nav-link text-sm ${isScrolled ? 'text-gray-700 hover:text-green-700' : 'text-gray-700 md:text-white hover:text-green-700 md:hover:text-gray-200'}`}
                    onClick={() => isMenuOpen && setDropdownAboutVisible(!dropdownAboutVisible)}
                  >
                    About Us <ChevronDown size={16} className="ml-1" />
                  </button>
                  {dropdownAboutVisible && (
                    <div className={`${isMenuOpen ? 'relative w-full' : 'absolute left-0 mt-1 w-48'} bg-white md:border md:shadow-md flex-col flex rounded-md py-2`}>
                      <a href="/who" className="dropdown-item text-sm text-black hover:bg-gray-100 px-4 py-2">Who we are</a>
                      <a href="/board-member" className="dropdown-item text-sm text-black hover:bg-gray-100 px-4 py-2">Board member</a>
                      <a href="/hod" className="dropdown-item text-sm text-black hover:bg-gray-100 px-4 py-2">Head of department</a>
                      <a href="/video" className="dropdown-item text-sm text-black hover:bg-gray-100 px-4 py-2">Organizational Structure</a>
                    </div>
                  )}
                </div>

                <a 
                  href="/news" 
                  className={`nav-link text-sm ${isScrolled ? 'text-gray-700 hover:text-green-700' : 'text-gray-700 md:text-white hover:text-green-700 md:hover:text-gray-200'}`}
                  onClick={() => isMenuOpen && setIsMenuOpen(false)}
                >
                  News
                </a>

                {/* Services Dropdown */}
                <div
                  className="relative group"
                  onMouseEnter={() => !isMenuOpen && setDropdownServicesVisible(true)}
                  onMouseLeave={() => !isMenuOpen && setDropdownServicesVisible(false)}
                >
                  <button 
                    className={`flex items-center w-full nav-link text-sm ${isScrolled ? 'text-gray-700 hover:text-green-700' : 'text-gray-700 md:text-white hover:text-green-700 md:hover:text-gray-200'}`}
                    onClick={() => isMenuOpen && setDropdownServicesVisible(!dropdownServicesVisible)}
                  >
                    Services <ChevronDown size={16} className="ml-1" />
                  </button>
                  {dropdownServicesVisible && (
                    <div className={`${isMenuOpen ? 'relative w-full' : 'absolute left-0 mt-1 w-48'} bg-white md:border md:shadow-md flex-col flex rounded-md py-2`}>
                      <a href="/companies" className="dropdown-item text-sm text-black hover:bg-gray-100 px-4 py-2">Companies</a>
                      <a href="/business" className="dropdown-item text-sm text-black hover:bg-gray-100 px-4 py-2">Business Names</a>
                      <a href="/tr" className="dropdown-item text-sm text-black hover:bg-gray-100 px-4 py-2">Incorporated Trustees</a>
                      <a href="/fees" className="dropdown-item text-sm text-black hover:bg-gray-100 px-4 py-2">Summary of fees</a>
                      <a href="/revised" className="dropdown-item text-sm text-black hover:bg-gray-100 px-4 py-2">Service Timeline</a>
                      <a href="/timeline" className="dropdown-item text-sm text-black hover:bg-gray-100 px-4 py-2">Timeline</a>
                    </div>
                  )}
                </div>

                <a 
                  href="/resources" 
                  className={`nav-link text-sm ${isScrolled ? 'text-gray-700 hover:text-green-700' : 'text-gray-700 md:text-white hover:text-green-700 md:hover:text-gray-200'}`}
                  onClick={() => isMenuOpen && setIsMenuOpen(false)}
                >
                  Resources
                </a>

                <a
                  href="https://reportgov.ng"
                  className="text-white px-5 py-2 rounded-md text-sm bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                >
                  ReportGov.ng
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 min-h-screen">
          <div className="mx-auto px-4 md:px-8  ">
            <div className="flex flex-col lg:flex-row w-full lg:mt-[2rem] lg:items-center justify-between   ">
              <div className="w-full lg:w-1/2 text-white animate-fade-in md:mb-[10rem] lg:mb-0">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover-lift">
                  <Image
                  src="/assests/cac1.png"
                  alt="CAC Logo"
                  width={150}
                  height={75}
                  className="w-28 h-auto md:w-40 object-contain"
                />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">CAC Nigeria</h2>
                    <p className="text-green-300">Corporate Affairs Commission</p>
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Register Your Business in Nigeria
                </h1>
                <p className="text-lg mb-8 text-gray-300">
                  Fast, secure, and efficient business registration process with the Corporate Affairs Commission.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-sm md:text-base text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition animated-button">
                    Start Your Application
                  </button>
                  <button className="border-2 text-sm md:text-base border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition animated-button">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2 w-full mt-10 md:mt-0 animate-scale-in rounded-xl">
                <img className='rounded-xl ' src="https://e8wm23is9ki.exactdn.com/wp-content/uploads/2024/05/cac-d.jpg?strip=all&lossy=1&ssl=1" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HeroSection;