import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: 'What is your return policy?',
    answer: 'Our return policy is 30 days. You can return products within 30 days of receipt for a full refund or exchange.',
  },
  {
    question: 'How do I track my order?',
    answer: 'Once your order has shipped, you will receive an email with tracking information. You can use this information to track your order on the carrier’s website.',
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we offer international shipping to many countries. Shipping costs and delivery times vary by destination.',
  },
  {
    question: 'How can I contact customer service?',
    answer: 'You can contact our customer service team via email at support@example.com or through our contact form on the website.',
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 px-4">
      <div className="relative mx-auto container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Find answers to some of our most common questions.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`relative bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 ease-in-out cursor-pointer overflow-hidden border border-gray-200 hover:border-blue-500 hover:shadow-xl ${
                activeIndex === index ? 'border-blue-500 shadow-xl' : ''
              }`}
              onClick={() => handleToggle(index)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index, ease: 'easeOut' }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{faq.question}</h3>
                <motion.div
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  {activeIndex === index ? (
                    <FaChevronUp className="w-6 h-6 text-gray-500" />
                  ) : (
                    <FaChevronDown className="w-6 h-6 text-gray-500" />
                  )}
                </motion.div>
              </div>
              <motion.div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>

              {/* Interactive Background Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-200 opacity-20"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.5 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
