"use client";

import React from 'react';
import styled from "@emotion/styled";

const Card = styled.div``;
const CardContent = styled.div``;

const categories = [
  {
    id: 'jewelry',
    name: 'Jewelry & Watches',
    icon: '💎',
    count: 12,
    color: 'bg-gradient-to-br from-purple-500 to-pink-500'
  },
  {
    id: 'art',
    name: 'Art & Collectibles',
    icon: '🎨',
    count: 11,
    color: 'bg-gradient-to-br from-amber-500 to-orange-500'
  },
  {
    id: 'fashion',
    name: 'Fashion',
    icon: '👔',
    count: 7,
    color: 'bg-gradient-to-br from-pink-500 to-red-600'
  },

];

const Categories = () => {
  return (
    <section className="py-1">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
                Popular Categories
        </h1>
          <p className="text-black-500 max-w-2xl mx-auto text-[20px]">
                Browse through our most popular auction categories with several active listings.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
           
              <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-0">
                  <div className={`flex items-center p-6 ${category.color} group-hover:scale-105 transition-transform duration-300`}>
                    <div className="w-16 h-16 flex items-center justify-center bg-white/30 rounded-full text-3xl">
                      {category.icon}
                    </div>
                    <div className="ml-5 text-white">
                      <h3 className="font-bold text-xl">{category.name}</h3>
                      <p className="text-white/80 text-sm">{category.count} active auctions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;