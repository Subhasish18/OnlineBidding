"use client";

import React, { useState } from 'react';

const CartItems: React.FC = () => {
  const [watchQuantity, setWatchQuantity] = useState<number>(1);
  const [necklaceQuantity, setNecklaceQuantity] = useState<number>(1);

  const handleCheckout = () => {
    console.log('Checkout initiated');
  };

  const handleWatchIncrement = () => {
    setWatchQuantity(prev => prev + 1);
  };

  const handleWatchDecrement = () => {
    setWatchQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleNecklaceIncrement = () => {
    setNecklaceQuantity(prev => prev + 1);
  };

  const handleNecklaceDecrement = () => {
    setNecklaceQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  // Price calculations
  const watchPrice = 23.99;
  const necklacePrice = 15.99;
  const watchSubtotal = (watchQuantity * watchPrice).toFixed(2);
  const necklaceSubtotal = (necklaceQuantity * necklacePrice).toFixed(2);
  const subtotal = (parseFloat(watchSubtotal) + parseFloat(necklaceSubtotal)).toFixed(2);
  const shipping = (parseFloat(subtotal) * 0.208).toFixed(2);
  const total = (parseFloat(subtotal) + parseFloat(shipping)).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="grid gap-4 max-w-md w-full animate-[slideUp_0.5s_ease-out]">
        {/* Cart Section */}
        <div className="bg-white rounded-t-2xl rounded-b-lg shadow-lg p-4 animate-[fadeIn_0.5s_ease-out]">
          <h2 className="text-sm font-bold text-gray-600 border-b border-gray-200 pb-2 pl-4">Your Cart</h2>
          <div className="p-2">
            {/* Watch Item */}
            <div className="grid grid-cols-[60px_1fr_80px_1fr] gap-2 items-center mb-4">
              <svg
                viewBox="0 0 512 512"
                height={60}
                width={60}
                xmlns="http://www.w3.org/2000/svg"
                className="hover:scale-105 transition-transform duration-300"
              >
                <path
                  fill="#FFB672"
                  stroke="#FF8413"
                  strokeWidth="30"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M342.7 135.4l-90.5 90.5c-9.4 9.4-9.4 24.6 0 33.9l45.3 45.3c9.4 9.4 24.6 9.4 33.9 0l90.5-90.5c9.4-9.4 9.4-24.6 0-33.9l-45.3-45.3c-9.4-9.4-24.6-9.4-33.9 0z"
                />
                <path
                  fill="none"
                  stroke="#FF8413"
                  strokeWidth="30"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M256 352l-96 96h192l-96-96"
                />
                <path
                  fill="#FFB672"
                  stroke="#FF8413"
                  strokeWidth="30"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M64 448h384"
                />
              </svg>
              <div>
                <span className="block text-sm font-semibold text-gray-800">Watch</span>
                <p className="text-xs font-semibold text-gray-500">Patek Philippe</p>
                <p className="text-xs font-semibold text-gray-500">Grandmaster Chime</p>
              </div>
              <div className="flex items-center border border-gray-200 rounded-md h-8 bg-white shadow-sm">
                <button
                  onClick={handleWatchDecrement}
                  className="w-8 h-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    height={14}
                    width={14}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      stroke="#47484b"
                      d="M20 12L4 12"
                    />
                  </svg>
                </button>
                <span className="w-8 h-full flex items-center justify-center text-sm font-bold text-gray-800">
                  {watchQuantity}
                </span>
                <button
                  onClick={handleWatchIncrement}
                  className="w-8 h-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    height={14}
                    width={14}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      stroke="#47484b"
                      d="M12 4V20M20 12H4"
                    />
                  </svg>
                </button>
              </div>
              <span className="text-sm font-semibold text-gray-800 text-right">${watchPrice.toFixed(2)}</span>
            </div>
            {/* Necklace Item */}
            <div className="grid grid-cols-[60px_1fr_80px_1fr] gap-2 items-center">
              <svg
                viewBox="0 0 512 512"
                height={60}
                width={60}
                xmlns="http://www.w3.org/2000/svg"
                className="hover:scale-105 transition-transform duration-300"
              >
                <path
                  fill="#FFCC99"
                  stroke="#FF8413"
                  strokeWidth="30"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M342.7 135.4l-90.5 90.5c-9.4 9.4-9.4 24.6 0 33.9l45.3 45.3c9.4 9.4 24.6 9.4 33.9 0l90.5-90.5c9.4-9.4 9.4-24.6 0-33.9l-45.3-45.3c-9.4-9.4-24.6-9.4-33.9 0z"
                />
                <path
                  fill="none"
                  stroke="#FF8413"
                  strokeWidth="30"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M256 352l-96 96h192l-96-96"
                />
                <path
                  fill="#FFCC99"
                  stroke="#FF8413"
                  strokeWidth="30"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M64 448h384"
                />
              </svg>
              <div>
                <span className="block text-sm font-semibold text-gray-800">Necklace</span>
                <p className="text-xs font-semibold text-gray-500">Cartier</p>
                <p className="text-xs font-semibold text-gray-500">Love Necklace</p>
              </div>
              <div className="flex items-center border border-gray-200 rounded-md h-8 bg-white shadow-sm">
                <button
                  onClick={handleNecklaceDecrement}
                  className="w-8 h-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    height={14}
                    width={14}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      stroke="#47484b"
                      d="M20 12L4 12"
                    />
                  </svg>
                </button>
                <span className="w-8 h-full flex items-center justify-center text-sm font-bold text-gray-800">
                  {necklaceQuantity}
                </span>
                <button
                  onClick={handleNecklaceIncrement}
                  className="w-8 h-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    height={14}
                    width={14}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      stroke="#47484b"
                      d="M12 4V20M20 12H4"
                    />
                  </svg>
                </button>
              </div>
              <span className="text-sm font-semibold text-gray-800 text-right">${necklacePrice.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Checkout Section */}
        <div className="bg-white rounded-t-lg rounded-b-2xl shadow-lg p-4 animate-[fadeIn_0.5s_ease-out]">
          <h2 className="text-sm font-bold text-gray-600 border-b border-gray-200 pb-2 pl-4">Checkout</h2>
          <div className="grid grid-cols-[3fr_1fr] gap-1 p-2">
            <span className="text-xs font-bold text-gray-500">Your cart subtotal:</span>
            <span className="text-sm font-semibold text-gray-800 text-right">${subtotal}</span>
            <span className="text-xs font-bold text-gray-500">Shipping fees:</span>
            <span className="text-sm font-semibold text-gray-800 text-right">${shipping}</span>
          </div>
          <div className="flex justify-between items-center p-2 bg-gray-100 rounded-b-lg">
            <span className="text-xl font-extrabold text-gray-900">
              $<span>{total}</span>
            </span>
            <button
              onClick={handleCheckout}
              className="h-9 w-36 bg-gradient-to-b from-blue-500 to-blue-700 text-white rounded-md font-semibold text-sm hover:from-blue-600 hover:to-blue-800 transition-all duration-300"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;