import React from 'react';
import exclusive_image from '../Assets/exclusive_image.png';

export const Offers = () => {
  return (
    <section className="w-full bg-gradient-to-r from-red-50 to-pink-100 px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Exclusive</h1>
          <h1 className="text-4xl md:text-5xl font-extrabold text-red-600">Offers For You</h1>
          <p className="text-lg text-gray-700">ONLY ON BEST SELLERS PRODUCTS</p>
          <button className="mt-4 px-6 py-3 bg-red-600 text-white font-semibold rounded-full shadow-md hover:bg-red-700 transition duration-300">
            Check Now
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={exclusive_image}
            alt="Exclusive Offer"
            className="w-3xs max-w-md md:max-w-lg object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};