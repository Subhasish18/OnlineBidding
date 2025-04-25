"use client";
import React from "react";

const Hero = () => {
  return (
    <section className="relative py-14 md:py-22 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-auction-accent/30 via-white to-white -z-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-auction-accent/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-auction-primary/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="max-w-xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-auction-dark leading-tight mb-6">
              Bid, Win, and <span className="text-auction-primary">Celebrate</span> Your Next Treasure
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Join thousands of enthusiasts in the most exciting online auction marketplace. From rare collectibles to exclusive items, your next prized possession is just a bid away.
            </p>
           

            <div className="mt-10 flex items-center space-x-6">
              <div>
                <p className="text-3xl font-bold text-auction-primary">12k+</p>
                <p className="text-sm text-gray-600">Active Auctions</p>
              </div>
              <div className="h-10 w-px bg-gray-200"></div>
              <div>
                <p className="text-3xl font-bold text-auction-primary">99%</p>
                <p className="text-sm text-gray-600">Satisfied Bidders</p>
              </div>
              <div className="h-10 w-px bg-gray-200"></div>
              <div>
                <p className="text-3xl font-bold text-auction-primary">15M+</p>
                <p className="text-sm text-gray-600">Items Sold</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square md:aspect-[4/5] bg-white rounded-2xl shadow-xl overflow-hidden relative">
              <img 
                src="./LuxuryWatch.png" 
                alt="Luxury watch auction" 
                className="h-full w-full object-cover"
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