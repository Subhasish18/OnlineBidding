import React from 'react';

const Input: React.FC = () => {
  return (
    <div className="relative w-auto font-mono">
      <input
        type="text"
        placeholder="SEARCH HERE"
        className="brutalist-input smooth-type w-full p-4 text-lg font-bold text-black bg-white border-4 border-black outline-none relative overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] shadow-[5px_5px_0_#000,10px_10px_0_#4a90e2] placeholder:text-gray-500 focus:placeholder:text-transparent focus:border-blue-500"
      />
    </div>
  );
};

export default Input;
