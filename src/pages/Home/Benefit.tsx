import { motion } from 'framer-motion';
import { FaWater, FaClock, FaLeaf, FaDollarSign } from 'react-icons/fa';

const benefitsData = [
  {
    id: 1,
    title: 'Convenient Scheduling',
    description: 'Book your car wash anytime, anywhere with just a few clicks.',
    icon: <FaClock />,
  },
  {
    id: 2,
    title: 'High-Quality Service',
    description: 'We use premium products and techniques to ensure a spotless finish.',
    icon: <FaWater />,
  },
  {
    id: 3,
    title: 'Eco-Friendly Solutions',
    description: 'Our water-saving and eco-friendly methods protect the planet.',
    icon: <FaLeaf />,
  },
  {
    id: 4,
    title: 'Affordable Pricing',
    description: 'Get the best value with competitive rates and special discounts.',
    icon: <FaDollarSign />,
  },
];

const BenefitsSection = () => {
  return (
    <section className="relative py-16 px-6 bg-gradient-to-r from-blue-50 via-green-50 to-gray-200 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[radial-gradient(circle,_rgba(255,255,255,0.5)_50%,_rgba(200,200,200,0.1)_100%)] opacity-20"></div>
      </div>

      {/* Container */}
      <div className="relative mx-auto container max-w-4xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Why Choose Our Car Wash Service?
          </h2>
          <p className="text-md md:text-lg text-gray-600">
            Enjoy a hassle-free car wash experience with unmatched convenience and quality.
          </p>
        </motion.div>

        {/* Benefits List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {benefitsData.map((benefit) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * benefit.id, ease: 'easeOut' }}
              className="relative bg-white shadow-md rounded-md p-6 text-center transform hover:shadow-lg transition-shadow duration-200 ease-in-out"
            >
              <div className="text-primary-500 text-4xl mb-4 mx-auto">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>

              {/* Subtle Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-100 to-green-100 opacity-10 rounded-md"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
