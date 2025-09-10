import React from 'react';

export const DescriptionBox = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-10 py-10 bg-white">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Tab Navigation */}
        <div className="flex gap-4 border-b pb-2 text-sm sm:text-base font-medium text-gray-600">
          <button className="border-b-2 border-red-500 text-red-600 pb-1">Description</button>
          <button className="hover:text-red-500 transition">Reviews (122)</button>
        </div>

        {/* Description Content */}
        <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo reiciendis voluptatibus suscipit alias necessitatibus. Ab pariatur atque molestias eius et numquam illum voluptate sequi reprehenderit corporis. Amet, quos facilis voluptates voluptatibus delectus modi exercitationem reiciendis qui nihil excepturi? Ullam neque suscipit deserunt odit facere, aut consectetur illo similique sequi qui.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae dolore mollitia debitis, et, sit rerum, exercitationem in atque saepe tempore ratione hic. Ea, officiis! Alias aperiam perferendis facere quo itaque.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DescriptionBox;