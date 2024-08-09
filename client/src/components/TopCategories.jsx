import React, { useState } from 'react';

const categories = [
  {
    id: 1,
    name: 'Electronics',
    products: [
      { id: 1, name: 'Smartphone', price: '$699' },
      { id: 2, name: 'Laptop', price: '$999' },
      { id: 3, name: 'Headphones', price: '$199' },
      { id: 4, name: 'Smartwatch', price: '$299' },
      { id: 5, name: 'Camera', price: '$799' },
    ],
  }
];

const TopCategories = () => {
  const [expandedCategoryId, setExpandedCategoryId] = useState(null);


  const toggleShowMore = (categoryId) => {
    setExpandedCategoryId(
      expandedCategoryId === categoryId ? null : categoryId
    );
  };

  return (
    <div className="p-6 bg-gray-100">

      <div className='flex flex-row items-center justify-around'>
        <h1 className="text-4xl font-bold mb-6">Our Top Categories</h1>
        {categories.map((category) => (
          <button
            onClick={() => toggleShowMore(category.id)}
            className=" bg-blue-500 text-white hover:bg-blue-600 transition h-6 w-24 rounded-lg"
          >
            {expandedCategoryId === category.id ? 'Show Less' : 'Show More'}
          </button>
        ))}
      </div>

      <div>
        {categories.map((category) => (
          <div key={category.id} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
            <div className="flex flex-wrap gap-4">
              {category.products
                .slice(0, expandedCategoryId === category.id ? undefined : 3)
                .map((product) => (
                  <div
                    key={product.id}
                    className="bg-white p-4 rounded-full shadow-lg w-32 h-32 flex items-center justify-center"
                  >
                    <strong className="block text-base mb-2">{product.name}</strong>
                    {/* <span className="block text-gray-500">{product.price}</span> */}
                  </div>
                ))}
            </div>


          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;

