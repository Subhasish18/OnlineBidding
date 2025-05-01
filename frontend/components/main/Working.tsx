"use client";

import React from 'react';
import { Card, CardContent } from '@mui/material';

const steps = [
  {
    id: 1,
    title: 'Create an Account',
    description: 'Register for free and set up your bidder profile in just a few minutes.',
    icon: '👤'
  },
  {
    id: 2,
    title: 'Browse Auctions',
    description: 'Explore thousands of items across different categories.',
    icon: '🔍'
  },
  {
    id: 3,
    title: 'Place Your Bid',
    description: 'Find an item you love? Place a bid and compete with other bidders.',
    icon: '💰'
  },
  {
    id: 4,
    title: 'Win & Collect',
    description: 'Won an auction? Pay securely and arrange for shipping or pickup.',
    icon: '🏆'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">How It Works</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            BidStar makes online bidding simple and secure. Here's how to get started
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 -translate-y-1/2 z-0"></div> 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.id} className="relative z-10">
                <Card className="transition-all duration-300 hover:shadow-xl">
                  <CardContent className="pt-8 px-6 pb-6 text-center">
                    <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full text-3xl mx-auto mb-6 relative">
                      {step.icon}
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {step.id}
                      </div>
                    </div>
                    <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                    <p className="text-gray-500">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;