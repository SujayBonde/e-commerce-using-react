import React from 'react';
import { Link } from 'react-router-dom';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

export const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-r from-red-50 to-pink-100 py-12 px-6 md:px-16">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            NEW ARRIVALS <span className="text-red-600">ONLY</span>
          </h2>

          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <p className="text-4xl font-semibold text-red-600">New</p>
              <img src={hand_icon} alt="Hand Icon" className="h-10 w-10 animate-bounce" />
            </div>
            <p className="text-2xl font-medium text-gray-700">Collections</p>
            <p className="text-2xl font-medium text-gray-700">for Everyone</p>
          </div>

          <Link to="/collections">
            <button className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-red-700 transition duration-300">
              Latest Collection
              <img src={arrow_icon} alt="Arrow Icon" className="h-5 w-5" />
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={hero_image}
            alt="Hero"
            className="w-full max-w-md md:max-w-lg object-contain drop-shadow-xl animate-slide-in"
          />
        </div>
      </div>
    </section>
  );
};