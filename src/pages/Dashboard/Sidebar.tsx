// Sidebar.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTachometerAlt, FaUserAlt, FaCog,  FaBars, FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarVariants = {
    open: { width: '250px', transition: { duration: 0.3 } },
    closed: { width: '80px', transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      variants={sidebarVariants}
      animate={isOpen ? 'open' : 'closed'}
      className="bg-blue-700 text-white h-screen p-5 pt-8 shadow-lg flex flex-col items-start fixed"
    >
      <button
        onClick={toggleSidebar}
        className="mb-8 text-xl focus:outline-none transition-colors hover:text-blue-400"
      >
        <FaBars />
      </button>

      <div className="space-y-4">
        <SidebarItem isOpen={isOpen} icon={<FaHome />} label="Home" to="/" />
        <SidebarItem isOpen={isOpen} icon={<FaTachometerAlt />} label="Service" to="/dashboard/products" />
        <SidebarItem isOpen={isOpen} icon={<FaUserAlt />} label="Users" to="/dashboard/users" />
        <SidebarItem isOpen={isOpen} icon={<FaCog />} label="Slot" to="/dashboard/slot" />
        {/* <SidebarItem isOpen={isOpen} icon={<FaSignOutAlt />} label="Products" to="/dashboard/products" /> */}
      </div>
    </motion.div>
  );
};

const SidebarItem = ({ icon, label, to, isOpen }) => (
  <NavLink
    to={to}
    className="flex items-center space-x-4 p-2 rounded-lg transition-colors hover:bg-blue-700 cursor-pointer"
  >
    <span className="text-2xl">{icon}</span>
    {isOpen && <span className="text-lg font-semibold">{label}</span>}
  </NavLink>
);

export default Sidebar;
