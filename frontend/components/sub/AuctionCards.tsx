import Image from 'next/image';
import React from 'react';

interface Props {
  src: string;
  title: string;
  description: string;
  currentbid: number;
}

const AuctionCards = ({ src, title, description, currentbid }: Props) => {
  return (
    <div className="flex flex-col w-full max-w-sm min-h-[450px] overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
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
        <h1 className="text-2xl font-semibold text-black">{title}</h1>
        <p className="mt-2 text-gray-500 line-clamp-3">{description}</p>
      </div>
      <div className="flex flex-col p-4">
            <p className="text-sm text-gray-500">Current Bid</p>
            <p className="font-semibold">${currentbid.toLocaleString()}</p>
          </div>
    </div>
  );
};

export default AuctionCards;