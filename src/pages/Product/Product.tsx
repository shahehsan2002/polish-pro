// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { useLocation } from 'react-router-dom';
// import { FaSearch } from 'react-icons/fa';

// import Products from "@/components/Products"

// // Sample data for products
// const sampleProducts = [
//   { id: 1, name: 'Treadmill', price: 499.99, category: 'Cardio', image: 'https://via.placeholder.com/300x200' },
//   { id: 2, name: 'Dumbbells', price: 89.99, category: 'Strength', image: 'https://via.placeholder.com/300x200' },
//   { id: 3, name: 'Yoga Mat', price: 29.99, category: 'Yoga', image: 'https://via.placeholder.com/300x200' },
//   { id: 4, name: 'Exercise Bike', price: 349.99, category: 'Cardio', image: 'https://via.placeholder.com/300x200' },
//   // Add more products as needed
// ];

// const categories = ['Cardio', 'Strength', 'Yoga', 'Flexibility'];

// const ProductsPage = () => {
//   const location = useLocation();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [priceRange, setPriceRange] = useState([0, 500]);
//   const [sortOrder, setSortOrder] = useState('asc');

//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const category = params.get('category');
//     if (category && categories.includes(category)) {
//       setSelectedCategories([category]);
//     }
//   }, [location.search]);

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleCategoryChange = (category) => {
//     setSelectedCategories((prev) =>
//       prev.includes(category) ? prev.filter((cat) => cat !== category) : [...prev, category]
//     );
//   };

//   const handlePriceRangeChange = (e) => {
//     const { name, value } = e.target;
//     setPriceRange((prev) => (name === 'min' ? [Number(value), prev[1]] : [prev[0], Number(value)]));
//   };

//   const handleSortOrderChange = (order) => {
//     setSortOrder(order);
//   };

//   const filteredProducts = sampleProducts
//     .filter(
//       (product) =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//         (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
//         product.price >= priceRange[0] &&
//         product.price <= priceRange[1]
//     )
//     .sort((a, b) => (sortOrder === 'asc' ? a.price - b.price : b.price - a.price));

//   return (
//     <section className="py-16 px-4 bg-gray-100">
//       <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
//         {/* Filters and Search */}
//         <div className="p-6 border-b border-gray-200 bg-gray-50">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
//             {/* Search Bar */}
//             <div className="flex items-center mb-4 md:mb-0">
//               <input
//                 type="text"
//                 placeholder="Search for products..."
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//                 className="border border-gray-300 rounded-lg py-2 px-4 w-full md:w-64"
//               />
//               <FaSearch className="ml-2 text-gray-500" />
//             </div>

//             {/* Filters */}
//             <div className="flex flex-wrap space-x-4 mb-4">
//               {categories.map((category) => (
//                 <button
//                   key={category}
//                   onClick={() => handleCategoryChange(category)}
//                   className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
//                     selectedCategories.includes(category)
//                       ? 'bg-blue-500 text-white'
//                       : 'bg-gray-200 text-gray-800'
//                   }`}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>

//             {/* Price Range Filter */}
//             <div className="flex items-center mb-4">
//               <input
//                 type="number"
//                 name="min"
//                 placeholder="Min price"
//                 value={priceRange[0]}
//                 onChange={handlePriceRangeChange}
//                 className="border border-gray-300 rounded-lg py-2 px-4 w-32 mr-2"
//               />
//               <span className="text-gray-500 mx-2">-</span>
//               <input
//                 type="number"
//                 name="max"
//                 placeholder="Max price"
//                 value={priceRange[1]}
//                 onChange={handlePriceRangeChange}
//                 className="border border-gray-300 rounded-lg py-2 px-4 w-32"
//               />
//             </div>

//             {/* Clear Filter Button */}
//             <button
//               onClick={() => {
//                 setSearchTerm('');
//                 setSelectedCategories([]);
//                 setPriceRange([0, 500]);
//                 setSortOrder('asc');
//               }}
//               className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
//             >
//               Clear Filters
//             </button>
//           </div>

//           {/* Sorting */}
//           <div className="flex items-center mb-6">
//             <label htmlFor="sort" className="mr-2 text-gray-800">Sort by:</label>
//             <select
//               id="sort"
//               value={sortOrder}
//               onChange={(e) => handleSortOrderChange(e.target.value)}
//               className="border border-gray-300 rounded-lg py-2 px-4"
//             >
//               <option value="asc">Price: Low to High</option>
//               <option value="desc">Price: High to Low</option>
//             </select>
//           </div>
//         </div>

//         {/* Products List */}
//         <div className="p-6">
//           {filteredProducts.length === 0 ? (
//             <p className="text-center text-gray-600">No products found.</p>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {filteredProducts.map((product) => (
//                 <motion.div
//                   key={product.id}
//                   className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-4">
//                     <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
//                     <p className="text-gray-600">${product.price.toFixed(2)}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductsPage;



import Products from "../../components/Products"

const Product = () => {
  return (
    <div className="mt-20">
        <Products/>
    </div>
  )
}

export default Product