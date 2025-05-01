"use client";

import React from 'react';
import Navbar from '../../components/main/Navbar';
import Footer from '../../components/main/Footer';
import Link from 'next/link'; 

const Login = () => {
  return (
    <section className="relative py-12 md:py-22 overflow-hidden">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
          <form className="flex flex-col">
            <input
              type="email"
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
              placeholder="Email address"
              required
            />
            <input
              type="password"
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
              placeholder="Password"
              required
            />
            <div className="flex items-center justify-between flex-wrap text-sm mb-2">
              <label htmlFor="remember-me" className="text-gray-900 cursor-pointer">
                <input type="checkbox" id="remember-me" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-2 hover:from-indigo-600 hover:to-blue-600 transition"
            >
              Login
            </button>

            <p className="text-gray-900 mt-4 text-sm text-center">
              Don't have an account?
              <Link href="/register" className="text-blue-500 hover:underline ml-1">
                Sign up
              </Link>
            </p>
          </form>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Login;
