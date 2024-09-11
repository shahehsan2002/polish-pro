// FeaturedSection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const featuredItems = [
  {
    id: 1,
    name: 'Ultimate Treadmill',
    image: 'https://i.postimg.cc/x1Zg8W0h/treadmill.jpg',
    description: 'Top-rated treadmill for home use with various features.',
    link: '/products/1'
  },
  {
    id: 2,
    name: 'Yoga Mat Deluxe',
    image: 'https://i.postimg.cc/ZnXw5GRh/yoga-mat.jpg',
    description: 'Comfortable and durable yoga mat for all levels.',
    link: '/products/2'
  },
  {
    id: 3,
    name: 'Adjustable Dumbbells',
    image: 'https://i.postimg.cc/sXPLKxFs/dumbbells.jpg',
    description: 'Space-saving adjustable dumbbells for your home gym.',
    link: '/products/3'
  }
];

const FeaturedSection = () => {
  const navigate = useNavigate();

  const handleItemClick = (link) => {
    navigate(link);
  };

  return (
    <section className="py-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>
      <div className="flex flex-wrap gap-4 px-4 justify-center">
        {featuredItems.map((item) => (
          <div
            key={item.id}
            className="relative cursor-pointer w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            onClick={() => handleItemClick(item.link)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover rounded-lg transform transition duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4 rounded-lg opacity-0 hover:opacity-100 transition duration-300">
              <h3 className="text-white text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-white mb-2">{item.description}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
