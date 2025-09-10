import React from 'react';
import data_product from '../Assets/data';
import Item from '../Item/Item';

const Popular = () => {
  return (
    <section className="w-full px-6 py-10 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">POPULAR IN WOMEN</h1>
        <hr className="w-24 mx-auto border-red-500 mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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

export default Popular;