import React, { useContext } from 'react';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

export const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <section className="w-full px-4 sm:px-6 md:px-10 py-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Section */}
        <div className="space-y-6">
          {/* Thumbnail List */}
          <div className="grid grid-cols-4 gap-3">
            {[...Array(4)].map((_, i) => (
              <img
                key={i}
                src={product.image}
                alt={`thumb-${i}`}
                className="w-full h-24 object-cover rounded-md border hover:scale-105 transition"
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="w-full">
            <img
              src={product.image}
              alt="Main Product"
              className="w-full h-auto object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold text-gray-900">{product.name}</h1>

          {/* Star Ratings */}
          <div className="flex items-center gap-2">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={star_icon} alt="star" className="w-5 h-5" />
            ))}
            <img src={star_dull_icon} alt="star" className="w-5 h-5" />
            <p className="text-sm text-gray-500">(122 reviews)</p>
          </div>

          {/* Prices */}
          <div className="flex gap-4 items-center">
            <span className="text-lg text-gray-500 line-through">${product.old_price}</span>
            <span className="text-2xl font-bold text-red-600">${product.new_price}</span>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-base leading-relaxed">
            Elevate your wardrobe with this stylish piece. Crafted with premium fabric and designed for comfort, it's perfect for both casual and semi-formal occasions.
          </p>

          {/* Size Selection */}
          <div>
            <h2 className="text-lg font-medium mb-2">Select Size</h2>
            <div className="flex gap-3 flex-wrap">
              {["S", "M", "L", "XL", "XXL"].map(size => (
                <button
                  key={size}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:border-red-500 hover:bg-red-50 transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(product.id)}
            className="w-full sm:w-auto px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-300"
          >
            Add to Cart
          </button>

          {/* Category & Tags */}
          <div className="text-sm text-gray-600 space-y-1">
            <p><span className="font-medium">Category:</span> Women, T-Shirt, Crop Top</p>
            <p><span className="font-medium">Tags:</span> Modern, Latest</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;