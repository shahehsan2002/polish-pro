import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const contactVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ContactPage = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    // Simulate form submission
    console.log(data);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 3000); // Hide success message after 3 seconds
  };

  return (
    <div className="container mx-auto py-16 px-4">
      {/* Heading Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={contactVariants}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-extrabold text-gray-900">
          Get in <span className="text-yellow-500">Touch</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          We would love to hear from you. Please reach out to us using the contact form below or via our contact details.
        </p>
      </motion.div>

      {/* Contact Form */}
      <div className="flex flex-col md:flex-row gap-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={contactVariants}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:w-1/2 bg-white shadow-lg rounded-lg p-8 border border-gray-200"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Us</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Name is required' })}
                className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-transform transform hover:scale-105"
                placeholder="Your Name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                {...register('email', { required: 'Email is required' })}
                className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-transform transform hover:scale-105"
                placeholder="Your Email"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-semibold text-gray-700">Message</label>
              <textarea
                id="message"
                rows="4"
                {...register('message', { required: 'Message is required' })}
                className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-transform transform hover:scale-105"
                placeholder="Your Message"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition-transform transform hover:scale-105"
            >
              Send Message
            </button>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-4 p-4 bg-green-100 text-green-800 border border-green-200 rounded-lg"
              >
                <p className="text-center">Your message has been sent successfully!</p>
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Contact Details */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={contactVariants}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="md:w-1/2 bg-white shadow-lg rounded-lg p-8 border border-gray-200"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Details</h2>
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-yellow-500 text-2xl mr-4 transition-transform transform hover:scale-110" />
            <p className="text-lg text-gray-700">123 Fitness St, Gym City, FC 56789</p>
          </div>
          <div className="flex items-center mb-4">
            <FaPhoneAlt className="text-yellow-500 text-2xl mr-4 transition-transform transform hover:scale-110" />
            <p className="text-lg text-gray-700">(123) 456-7890</p>
          </div>
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-yellow-500 text-2xl mr-4 transition-transform transform hover:scale-110" />
            <p className="text-lg text-gray-700">info@strengthzone.com</p>
          </div>
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={contactVariants}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="my-16"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Find Us</h2>
        <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31373.929846914257!2d-122.4306726768595!3d37.77287049661251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b8139c0a5%3A0x9c8d21b18a1ea1dc!2sFitness%20St%2C%20San%20Francisco%2C%20CA%2094154!5e0!3m2!1sen!2sus!4v1616577116521!5m2!1sen!2sus"
            className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
