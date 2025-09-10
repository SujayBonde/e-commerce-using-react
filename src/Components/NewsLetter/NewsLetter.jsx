import React from 'react';

export const NewsLetter = () => {
  return (
    <section className="w-full bg-red-50 py-12 px-4 sm:px-6 md:px-10">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Get Exclusive Offers on Your Email
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Subscribe to our newsletter and stay updated
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Your Email ID"
            className="w-full sm:w-2/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;