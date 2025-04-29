"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import Search from './Search';
import ShareThing from './sharething';
import Dropdown from "@/components/main/Dropdown";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#home" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/NavLogo.png"
            alt="Logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin object-contain"
          />
          <span className='font-bold ml-[20px] hidden md:block text-black-300'>
                <a className="underline decoration-purple-500 decoration-4 font-bold italictext-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">BidStar</a>
            </span>
        </a>

        <div className="flex items-center justify-between gap-4">
          <div className="hidden md:flex items-center justify-between w-[300px] h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-300">
            <a href="#home" className="cursor-pointer">Home</a>
            <a href="#items" className="cursor-pointer">Items</a>
            <a href="#watchlist" className="cursor-pointer">Watchlist</a>
          </div>

          <Search />

          <ShareThing />

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 12.121A3 3 0 018 11h8a3 3 0 012.879 1.121M16 11a4 4 0 11-8 0 4 4 0 018 0zM12 15a5 5 0 00-5 5h10a5 5 0 00-5-5z"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 z-50">
                <Dropdown onClose={() => setIsDropdownOpen(false)} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;