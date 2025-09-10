import React from 'react';
import data_product from '../Assets/data';
import Item from '../Item/Item';

export const RelatedProducts = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-10 py-12 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Related Products
        </h1>
        <hr className="w-20 sm:w-24 mx-auto border-red-500 mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {data_product.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;