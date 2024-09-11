// FeaturedSection.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const FeaturedSection = () => {
  const [featuredItems, setFeaturedItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFeaturedItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/featured');
        setFeaturedItems(response.data);
      } catch (error) {
        console.error('Error fetching featured items:', error);
      }
    };

    fetchFeaturedItems();
  }, []);

  const handleItemClick = (link) => {
    navigate(link);
  };

  return (
    <section className="py-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>
      <div className="flex flex-wrap gap-4 px-4 justify-center">
        {featuredItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center text-xl font-semibold text-gray-500 w-full"
          >
            No featured products available at the moment.
          </motion.div>
        ) : (
          featuredItems.map((item) => (
            <motion.div
              key={item.id}
              className="relative cursor-pointer w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              onClick={() => handleItemClick(item.link)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, rotate: -1 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover rounded-lg transform transition duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4 rounded-lg opacity-0 hover:opacity-100 transition duration-300">
                <h3 className="text-white text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-white mb-2">{item.description}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg transform transition-transform hover:scale-110">
                  View Details
                </button>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
};

export default FeaturedSection;
