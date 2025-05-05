"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

interface ItemPageProps {
  imageUrl?: string;
}

export default function ItemPage({ imageUrl }: ItemPageProps) {
  const [bidAmount, setBidAmount] = useState('');
  const [message, setMessage] = useState('');
  const currentHighestBid = 150;
  const defaultImageUrl = "/w1.jpg";
  const itemImage = imageUrl || defaultImageUrl;

  const handleBidChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const bidNumber = parseFloat(value);

    if (value === '' || bidNumber > currentHighestBid) {
      setMessage('');
    } else {
      setMessage(`Your bid must be a number greater than $${currentHighestBid}`);
    }

    setBidAmount(value);
  };

  const handleBidSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const bidNumber = Math.round(parseFloat(bidAmount) * 100) / 100; 
    if (isNaN(bidNumber) || bidNumber <= currentHighestBid) {
      setMessage(`Your bid must be a number greater than $${currentHighestBid}`);
    } else {
      setMessage(`Bid of $${bidNumber.toFixed(2)} placed successfully!`);
      setBidAmount('');
    }
  };

  return (
  <section id="items" className="relative overflow-hidden">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen bg-white text-blue-900 flex items-center justify-center p-2">
      <div className="max-w-4xl w-full bg-blue-50 rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-6">
        <motion.div
          className="flex-1"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <img
            src={itemImage}
            alt="Auction Item"
            className="rounded-lg w-full object-cover shadow-md"
          />
        </motion.div>

        <motion.div
          className="flex-1 flex flex-col justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div>
            <h1 className="text-3xl font-bold mb-3">Vintage Wristwatch</h1> 
            <p className="mb-4 text-blue-800"> 
              A beautifully preserved vintage wristwatch from the 1950s. Perfect for collectors and enthusiasts.
            </p>
            <div className="mb-4">
              <span className="text-lg font-semibold">Current Highest Bid: </span>
              <span className="text-xl font-bold text-blue-600">${currentHighestBid.toFixed(2)}</span>
            </div>
          </div>

          <form onSubmit={handleBidSubmit} className="flex flex-col sm:flex-row items-center gap-3"> 
            <input
              type="number"
              step="0.01"
              placeholder={`Enter bid > $${currentHighestBid}`}
              value={bidAmount}
              onChange={handleBidChange}
              className="rounded-md border border-blue-400 px-4 py-2 w-full sm:w-auto text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              min={currentHighestBid + 0.01}
              aria-label="Enter your bid amount"
            />
            <motion.button
              type="submit"
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 text-white font-semibold rounded-md px-6 py-2 transition"
              aria-label="Place your bid"
            >
              Place Bid
            </motion.button>
          </form>
          {message && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`mt-3 text-sm font-medium ${message.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}
            >
              {message}
            </motion.p>
          )}
        </motion.div>
      </div>
    </motion.div>
  </section>
);
}