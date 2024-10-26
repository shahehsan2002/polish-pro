// // ServicesPage.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const servicesData = [
//   {
//     id: 1,
//     title: 'Basic Wash',
//     description: 'A quick wash to keep your car looking fresh.',
//     price: '$10',
//     duration: '30 min',
//   },
//   {
//     id: 2,
//     title: 'Deluxe Wash',
//     description: 'Thorough cleaning with waxing for extra shine.',
//     price: '$25',
//     duration: '60 min',
//   },
//   {
//     id: 3,
//     title: 'Premium Wash',
//     description: 'Complete detailing and interior cleaning.',
//     price: '$50',
//     duration: '90 min',
//   },
// ];

// const ServicesPage = () => {
//   const [search, setSearch] = useState('');

//   const filteredServices = servicesData.filter(service =>
//     service.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h2 className="text-3xl font-bold text-center mb-8">Car Wash Services</h2>
//       <input
//         type="text"
//         placeholder="Search services..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="mb-6 p-2 border border-gray-300 rounded w-full"
//       />
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredServices.map((service) => (
//           <div
//             key={service.id}
//             className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-xl"
//           >
//             <div className="p-4">
//               <h3 className="text-xl font-semibold">{service.title}</h3>
//               <p className="text-gray-600">{service.description}</p>
//               <p className="text-lg font-bold mt-2">{service.price}</p>
//               <p className="text-sm text-gray-500">Duration: {service.duration}</p>
//               <Link
//                 to={`/services/${service.id}`}
//                 className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
//               >
//                 View Details
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServicesPage;

// ServicesPage.js
import React, { useState } from 'react';
import ServiceList from './ServiceList';
import SearchBar from './SearchBar';
import FilterOptions from './FilterOptions';

// Sample data for services
const servicesData = [
  { id: 1, name: 'Basic Wash', description: 'A simple wash for your car.', price: 15, duration: 30 },
  { id: 2, name: 'Premium Wash', description: 'A comprehensive wash including waxing.', price: 30, duration: 60 },
  { id: 3, name: 'Interior Cleaning', description: 'Deep cleaning of the interior.', price: 20, duration: 45 },
  // Add more services as needed
];

const ServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPrice, setFilterPrice] = useState('');
  const [sortOption, setSortOption] = useState('');

  // Filter services based on search term and price
  const filteredServices = servicesData.filter(service => 
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterPrice === '' || service.price <= filterPrice)
  );

  // Sort services based on selected option
  const sortedServices = filteredServices.sort((a, b) => {
    if (sortOption === 'price') return a.price - b.price;
    if (sortOption === 'duration') return a.duration - b.duration;
    return 0;
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Our Services</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterOptions filterPrice={filterPrice} setFilterPrice={setFilterPrice} sortOption={sortOption} setSortOption={setSortOption} />
      <ServiceList services={sortedServices} />
    </div>
  );
};

export default ServicesPage;
