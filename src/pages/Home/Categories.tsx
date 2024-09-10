import React from 'react';
import { useHistory } from 'react-router-dom';

// Sample category data
const categories = [
  { name: 'Cardio', image: 'https://via.placeholder.com/100x100' },
  { name: 'Strength', image: 'https://via.placeholder.com/100x100' },
  { name: 'Yoga', image: 'https://via.placeholder.com/100x100' },
  { name: 'Flexibility', image: 'https://via.placeholder.com/100x100' },
];

const CategoriesSection = () => {
  const history = useHistory();

  const handleCategoryClick = (category) => {
    history.push(`/products?category=${category}`);
  };

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Explore Our Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              onClick={() => handleCategoryClick(category.name)}
              className="cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
