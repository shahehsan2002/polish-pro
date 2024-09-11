// import React from 'react';
// import { useHistory } from 'react-router-dom';
// import { motion } from 'framer-motion';

// // Sample featured products
// const featuredProducts = [
//   { id: 1, name: 'Treadmill', price: 499.99, image: 'https://via.placeholder.com/300x200' },
//   { id: 2, name: 'Dumbbells', price: 89.99, image: 'https://via.placeholder.com/300x200' },
//   { id: 3, name: 'Yoga Mat', price: 29.99, image: 'https://via.placeholder.com/300x200' },
// ];

// const FeaturedProducts = () => {
//   const history = useHistory();

//   const handleViewDetails = (id) => {
//     history.push(`/products/${id}`);
//   };

//   const handleExploreMore = () => {
//     history.push('/products');
//   };

//   return (
//     <section className="py-16 px-4 bg-gray-100">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-2xl font-bold text-center mb-8">Featured Products</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {featuredProducts.map((product) => (
//             <motion.div
//               key={product.id}
//               className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
//               whileHover={{ scale: 1.05 }}
//             >
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
//                 <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
//                 <p className="text-gray-600">${product.price.toFixed(2)}</p>
//                 <button
//                   onClick={() => handleViewDetails(product.id)}
//                   className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
//                 >
//                   View Details
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//         <div className="text-center mt-8">
//           <button
//             onClick={handleExploreMore}
//             className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
//           >
//             Explore More
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedProducts;
