// // import Home from "@/pages/Home/Home"
// // import { NavLink, Outlet } from "react-router-dom"

// // const Dashboard = () => {
// //   return (
// //     <div className="flex">
// //         <div className="w-64 min-h-full bg-slate-800">
// //             <ul>
// //                 <NavLink to="/dashboard/products">Products</NavLink>
// //             </ul>
// //         </div>
// //         <div className="w-full flex-1">
// //             <Home />
// //         </div>
// //     </div>
// //   )
// // }

// // export default Dashboard

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaTachometerAlt, FaUserAlt, FaCog, FaSignOutAlt, FaBars } from 'react-icons/fa';
// import { Outlet } from 'react-router-dom';
// import Home from '@/pages/Home/Home';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const sidebarVariants = {
//     open: { width: '250px', transition: { duration: 0.3 } },
//     closed: { width: '80px', transition: { duration: 0.3 } },
//   };

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <motion.div
//         variants={sidebarVariants}
//         animate={isOpen ? 'open' : 'closed'}
//         className="bg-blue-900 text-white h-screen p-5 pt-8 shadow-lg flex flex-col items-start fixed"
//       >
//         {/* Toggle Button */}
//         <button
//           onClick={toggleSidebar}
//           className="mb-8 text-xl focus:outline-none transition-colors hover:text-blue-400"
//         >
//           <FaBars />
//         </button>

//         {/* Sidebar Links */}
//         <div className="space-y-4">
//           <SidebarItem isOpen={isOpen} icon={<FaTachometerAlt />} label="Dashboard"  />
//           <SidebarItem isOpen={isOpen} icon={<FaUserAlt />} label="Users" />
//           <SidebarItem isOpen={isOpen} icon={<FaCog />} label="Settings" />
//           <SidebarItem isOpen={isOpen} icon={<FaSignOutAlt />} label="Logout" to="/dashboard/products" />
//         </div>
//       </motion.div>

//       {/* Main Content */}
//       <div className={`flex-1 ${isOpen ? 'ml-[250px]' : 'ml-[80px]'} transition-all duration-300`}>
//         {/* Page content goes here */}
//         <div className="p-8">
//             <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// // Sidebar Item Component
// const SidebarItem = ({ icon, label, isOpen }) => (
//   <motion.div
//     className="flex items-center space-x-4 p-2 rounded-lg transition-colors hover:bg-blue-700 cursor-pointer"
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     transition={{ duration: 0.3 }}
//   >
//     <span className="text-2xl">{icon}</span>
//     {isOpen && <span className="text-lg font-semibold">{label}</span>}
//   </motion.div>
// );

// export default Sidebar;

// Dashboard.js
import Sidebar from '@/pages/Dashboard/Sidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 ml-[250px] transition-all duration-300">
        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
