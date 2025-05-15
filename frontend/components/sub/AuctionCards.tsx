"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

interface Props {
  src: string;
  title: string;
  description: string;
  currentbid: number;
  startTime: string;
}

const AuctionCards = ({ src, title, description, currentbid, startTime }: Props) => {
  const [bidAmount, setBidAmount] = useState('');
  const [message, setMessage] = useState('');
  const [timeLeft, setTimeLeft] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [forceStopped, setForceStopped] = useState(false);

  const endTime = new Date(new Date(startTime).getTime() + 24 * 60 * 60 * 1000);

  useEffect(() => {
    if (forceStopped) {
      setIsActive(false);
      setTimeLeft("00:00:00");
      return;
    }

    const interval = setInterval(() => {
      const now = new Date();
      const diff = endTime.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft("00:00:00");
        setIsActive(false);
        clearInterval(interval);
      } else {
        const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
        const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
        const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
        setTimeLeft(`${hours}:${minutes}:${seconds}`);
        setIsActive(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime, forceStopped]);

  const handleBidChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const bidNumber = parseFloat(value);
    if (value === '' || bidNumber > currentbid) {
      setMessage('');
    } else {
      setMessage(`Your bid must be greater than $${currentbid}`);
    }
    setBidAmount(value);
  };

  const handleBidSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const bidNumber = parseFloat(bidAmount);
    if (isNaN(bidNumber) || bidNumber <= currentbid) {
      setMessage(`Your bid must be greater than $${currentbid}`);
    } else {
      setMessage(`Bid of $${bidNumber.toFixed(2)} placed successfully!`);
      setBidAmount('');
    }
  };

  return (
    <div className="flex flex-col w-full max-w-sm min-h-[590px] overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <div className="relative w-full h-120">
        <Image
          src={src}
          alt={title}
          fill
          className="absolute inset-0 w-full h-full transition-transform duration-300 transform hover:scale-105 object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="flex flex-col flex-grow p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-black">{title}</h1>
          <span className={`px-3 py-1 text-sm rounded-full font-semibold ${isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {isActive ? 'Active' : 'Sold'}
          </span>
        </div>
        <p className="mt-2 text-gray-500 line-clamp-3">{description}</p>

        <div className="mt-4 flex flex-col gap-1">
          <p className="text-sm text-gray-500">Current Bid</p>
          <div className="flex items-center justify-between">
            <p className="font-semibold">${currentbid.toLocaleString()}</p>
            <p className="text-sm text-blue-600 font-medium">Bid ends in: {timeLeft}</p>
          </div>
        </div>

        <form onSubmit={handleBidSubmit} className="mt-4 flex flex-col gap-2">
          <input
            type="number"
            step="0.01"
            placeholder={`Enter bid > $${currentbid}`}
            value={bidAmount}
            onChange={handleBidChange}
            className="rounded-md border border-gray-400 px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            min={currentbid + 0.01}
            disabled={!isActive}
          />
          <button
            type="submit"
            className={`font-semibold rounded-md px-4 py-2 transition ${
              isActive ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-400 text-white cursor-not-allowed'
            }`}
            disabled={!isActive}
          >
            {isActive ? 'Place Bid' : 'Bidding Closed'}
          </button>
        </form>

        <button
          onClick={() => setForceStopped(true)}
          className="mt-2 text-sm text-red-600 font-semibold underline hover:text-red-800 disabled:opacity-50"
          disabled={!isActive}
        >
          Stop Auction
        </button>

        {message && (
          <p
            className={`text-sm font-medium ${
              message.includes('successfully') ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default AuctionCards;
