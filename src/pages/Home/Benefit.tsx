import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const benefitsData = [
  {
    id: 1,
    title: 'Top Quality',
    description: 'We provide top-quality products that meet the highest standards.',
  },
  {
    id: 2,
    title: 'Affordable Prices',
    description: 'Enjoy competitive prices and great value for your money.',
  },
  {
    id: 3,
    title: '24/7 Support',
    description: 'Our dedicated team is available around the clock to assist you.',
  },
  {
    id: 4,
    title: 'Fast Delivery',
    description: 'Experience swift delivery with our efficient logistics network.',
  },
];

const BenefitsSection = () => {
  return (
    <section className="relative py-16 px-4 bg-gradient-to-r from-blue-100 to-green-100 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[radial-gradient(circle,_rgba(0,0,0,0)_50%,_rgba(0,0,0,0.1)_100%)] opacity-20"></div>
      </div>

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
            Why Choose Us?
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Discover the exceptional benefits we offer to our customers.
          </p>
        </motion.div>

        {/* Benefits List */}
        <div className="flex flex-wrap justify-center gap-8">
          {benefitsData.map((benefit) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 * benefit.id, ease: 'easeOut' }}
              className="relative bg-white shadow-lg rounded-lg p-6 w-full sm:w-80 text-center transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 * benefit.id, ease: 'easeOut' }}
                className="text-green-500 text-5xl mb-4 mx-auto"
              >
                <FaCheckCircle />
              </motion.div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-red-300 opacity-20 rounded-lg"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.4 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
