import React from 'react';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pinterest_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-10 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 text-center">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center gap-2">
          <img src={footer_logo} alt="StyleBySujay Logo" className="h-12 sm:h-16" />
          <p className="text-xl font-bold text-gray-800">StyleBySujay</p>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm sm:text-base text-gray-600 font-medium">
          <li className="hover:text-red-500 cursor-pointer transition">Company</li>
          <li className="hover:text-red-500 cursor-pointer transition">Products</li>
          <li className="hover:text-red-500 cursor-pointer transition">Offices</li>
          <li className="hover:text-red-500 cursor-pointer transition">About</li>
          <li className="hover:text-red-500 cursor-pointer transition">Contact</li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-6">
          <img src={instagram_icon} alt="Instagram" className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
          <img src={pinterest_icon} alt="Pinterest" className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
          <img src={whatsapp_icon} alt="WhatsApp" className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
        </div>

        {/* Copyright */}
        <div className="w-full border-t pt-4 text-sm text-gray-500">
          <p>© 2025 StyleBySujay — All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;