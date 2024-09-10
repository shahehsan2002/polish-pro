import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaLock } from 'react-icons/fa';
import LoginIllustration from '@/assets/Mobile login-rafiki.svg'; // Adjust the path as necessary

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    setSuccess('Login successful!');
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-3xl font-bold text-center mb-8"
          >
            Login
          </motion.h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full p-4 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300"
              />
              <FaUser className="absolute top-3 left-3 text-gray-400" />
            </div>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full p-4 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300"
              />
              <FaLock className="absolute top-3 left-3 text-gray-400" />
            </div>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-red-500 text-center"
              >
                {error}
              </motion.div>
            )}
            {success && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-green-500 text-center"
              >
                {success}
              </motion.div>
            )}
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
            >
              Login
            </button>
          </form>
          <div className="mt-6 text-center">
            <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
          </div>
        </div>

        {/* SVG Illustration Section */}
        <div className="w-full md:w-1/2 bg-blue-50 p-8 flex items-center justify-center">
          <img src={LoginIllustration} alt="Login Illustration" className="w-full max-w-md" />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
