"use client";


import React from "react";
import {motion} from 'framer-motion'


const Hero = () => {
  return (
    <section className="relative py-12 md:py-22 overflow-hidden">  
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="max-w-xl animate-fade-in">
            <motion.div
              className='flex flex-col gap-6 mt-6 text-6xl font-bold text-black max-w-[560px] w-auto h-auto'
            >
              <span>
              Bid, Win, and
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-600'>  Celebrate  </span>
              Your Next Treasure
              </span>
            </motion.div>
            <motion.p
            className='text-lg text-black-400 my-5 max-w-[600px]'
            >
              Join thousands of enthusiasts in the most exciting online auction marketplace. From rare collectibles to exclusive items, your next prized possession is just a bid away.
            </motion.p>
            <div className="mt-10 flex items-center space-x-6">
              <div>
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-emerald-600">12k+</p>
                <p className="text-sm text-purple-600">Active Auctions</p>
              </div>
              <div className="h-10 w-px bg-gray-200"></div>
              <div>
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-emerald-600">99%</p>
                <p className="text-sm text-purple-600">Satisfied Bidders</p>
              </div>
              <div className="h-10 w-px bg-gray-200"></div>
              <div>
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-emerald-600">15M+</p>
                <p className="text-sm text-purple-600">Items Sold</p>
              </div>
            </div>
            <br />
            <button
              type="submit"
              className="relative flex justify-center gap-2 items-center ml-0 mr-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold border-2 border-gray-50 px-6 py-2 rounded-full overflow-hidden group custom-button"
            >
              Explore Auctions
              <svg
                className="w-8 h-8 group-hover:rotate-90 group-hover:bg-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-gray-800 group-hover:fill-black"
                />
              </svg>
            </button>
          </div>
          
          <div className="relative">
            <div className="aspect-square md:aspect-[4/5] bg-white rounded-2xl shadow-xl overflow-hidden relative h-[600px] w-full">
              <img 
                src="./LuxuryWatch.png" 
                alt="Luxury watch auction" 
                className="h-[600px] w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-white text-lg font-semibold">Luxury Timepiece Collection</p>
                    <p className="text-white/80 text-sm">Current Bid: $24,500</p>
                  </div>    
                </div>
              </div>
            </div>
            <div className="absolute -z-10 -bottom-6 -left-6 w-48 h-48 bg-auction-secondary/20 rounded-full blur-md"></div>
            <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 bg-auction-primary/10 rounded-full blur-md"></div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;