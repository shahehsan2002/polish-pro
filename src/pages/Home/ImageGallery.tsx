import React from 'react';
import { motion } from 'framer-motion';
import exampleImage from '../../assets/BannerPic.jpg'; // Import the image

const images = [
  exampleImage, // Use the imported image
  exampleImage, // Use the imported image
  exampleImage, // Use the imported image
  exampleImage, // Use the imported image
  exampleImage, // Use the imported image
  exampleImage, // Use the imported image
  exampleImage, // Use the imported image
  exampleImage, // Use the imported image
  exampleImage, // Use the imported image
  exampleImage, // Use the imported image
  exampleImage, // Use the imported image
  exampleImage, // Use the imported image
  // Add more local images or URLs
];

const MosaicGallerySection = () => {
  return (
    <section className="py-16 px-4 bg-gray-100 overflow-hidden">
      {/* Container */}
      <div className="relative mx-auto container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Our Gallery
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Explore our collection of stunning images.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={img}
                alt={`Gallery item ${index}`}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MosaicGallerySection;
