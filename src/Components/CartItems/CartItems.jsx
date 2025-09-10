import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

export const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <section className="w-full px-4 sm:px-6 md:px-10 py-12 bg-white">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Row */}
        <div className="hidden md:grid grid-cols-6 text-sm font-semibold text-gray-600 border-b pb-2">
          <p>Product</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        {/* Cart Items */}
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id} className="grid grid-cols-2 md:grid-cols-6 items-center gap-4 py-4 border-b">
                <img src={e.image} alt={e.name} className="w-16 h-16 object-cover rounded-md" />
                <p className="text-sm font-medium text-gray-700">{e.name}</p>
                <p className="text-sm text-gray-600">${e.new_price}</p>
                <button className="px-3 py-1 border rounded-md text-sm">{cartItems[e.id]}</button>
                <p className="text-sm font-semibold text-gray-800">${e.new_price * cartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  alt="Remove"
                  onClick={() => removeFromCart(e.id)}
                  className="w-5 h-5 cursor-pointer hover:scale-110 transition"
                />
              </div>
            );
          }
          return null;
        })}

        {/* Totals & Promocode */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mt-10">
          {/* Cart Totals */}
          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Cart Totals</h2>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between font-semibold text-gray-900">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
            </div>
            <button className="mt-4 px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition">
              PROCEED TO CHECKOUT
            </button>
          </div>

          {/* Promocode Section */}
          <div className="w-full lg:w-1/2 space-y-4">
            <p className="text-sm text-gray-600">If you have a promocode, enter it here:</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Enter Promocode"
                className="w-full sm:w-2/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <button className="px-6 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItems;