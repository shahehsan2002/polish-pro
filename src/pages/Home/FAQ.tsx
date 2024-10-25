import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const benefits = [
  {
    title: 'Convenient Online Booking',
    description: 'Schedule a car wash anytime, from anywhere, with our simple online booking system.',
  },
  {
    title: 'Professional Service',
    description: 'Our team is trained to provide high-quality services ensuring your car is spotless.',
  },
  {
    title: 'Eco-Friendly Products',
    description: 'We use eco-friendly cleaning products that are safe for both your car and the environment.',
  },
  {
    title: 'Flexible Payment Options',
    description: 'Pay securely with various payment methods, including credit card and digital wallets.',
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-50 via-green-50 to-gray-200 overflow-hidden">
      <div className="container mx-auto max-w-4xl bg-white bg-opacity-60 rounded-xl shadow-2xl p-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-3">Why Choose Us?</h2>
          <p className="text-lg text-gray-600">
            Discover the benefits of booking your car wash with us.
          </p>
        </motion.div>

        {/* Benefits List */}
        <div className="space-y-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 ease-in-out hover:shadow-xl hover:border-green-400 border border-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index, ease: 'easeOut' }}
            >
              <div className="flex items-start">
                <FaCheckCircle className="w-8 h-8 text-green-500 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>

              {/* Subtle Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-300 to-blue-400 opacity-10 rounded-lg pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.2 }}
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
