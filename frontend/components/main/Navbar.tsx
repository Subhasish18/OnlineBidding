import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#about-me" className='h-auto w-auto flex flex-row items-center'>
            <Image
                src="/NavLogo.png"
                alt="Logo"
                width={70}
                height={70}
                className='cursor-pointer hover:animateslowspin object-contain'
            />

            <span className='font-bold ml-[20px] hidden md:block text-black-300'>
                <a className="underline decoration-pink-500 decoration-4 font-bold italic">Alpha Bidding</a>
            </span>
    </a>

        <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
            <div className='flex items-center justify-between w-full h-auto  border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-black-300'>
              <a href="#home" className='cursor-pointer'>
                  Home
              </a>
              <a href="#items" className='cursor-pointer'>
                  Items
              </a>
              <a href="#watchlist" className='cursor-pointer'>
                  Watchlist
              </a>
            </div>
        </div>


      </div>
    </div>
  )
}

export default Navbar

