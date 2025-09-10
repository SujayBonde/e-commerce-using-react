import React, { useContext, useState } from 'react';
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 py-3 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
        <p className="text-xl font-bold text-gray-800">StyleBySujay</p>
      </div>

      {/* Navigation Menu */}
      <ul className="flex flex-wrap gap-4 mt-3 md:mt-0 md:gap-8 text-gray-700 font-medium">
        <li onClick={() => setMenu("shop")} className="cursor-pointer">
          <Link to="/" className="hover:text-red-500">Shop</Link>
          {menu === "shop" && <hr className="border-red-600 mt-1" />}
        </li>
        <li onClick={() => setMenu("mens")} className="cursor-pointer">
          <Link to="/mens" className="hover:text-red-500">Men</Link>
          {menu === "mens" && <hr className="border-red-600 mt-1" />}
        </li>
        <li onClick={() => setMenu("womens")} className="cursor-pointer">
          <Link to="/womens" className="hover:text-red-500">Women</Link>
          {menu === "womens" && <hr className="border-red-600 mt-1" />}
        </li>
        <li onClick={() => setMenu("kids")} className="cursor-pointer">
          <Link to="/kids" className="hover:text-red-500">Kids</Link>
          {menu === "kids" && <hr className="border-red-600 mt-1" />}
        </li>
      </ul>

      {/* Login & Cart Section */}
      <div className="flex items-center gap-4 mt-3 md:mt-0">
        <Link to="/login">
          <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-blue-700 transition">Sign Up</button>
        </Link>
        <Link to="/cart" className="relative">
          <img src={cart_icon} alt="Cart" className="h-6 w-6" />
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
            {getTotalCartItems()}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;