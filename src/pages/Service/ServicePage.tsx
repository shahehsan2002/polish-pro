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

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    id: 1,
    title: 'Basic Wash',
    description: 'A quick wash to keep your car looking fresh.',
    price: 10, // Change price to number for easier sorting
    duration: '30 min',
  },
  {
    id: 2,
    title: 'Deluxe Wash',
    description: 'Thorough cleaning with waxing for extra shine.',
    price: 25,
    duration: '10 min',
  },
  {
    id: 3,
    title: 'Premium Wash',
    description: 'Complete detailing and interior cleaning.',
    price: 50,
    duration: '90 min',
  },
];

const ServicesPage = () => {
  const [search, setSearch] = useState('');
  const [filterPrice, setFilterPrice] = useState('');
  const [sortOption, setSortOption] = useState('');

  const filteredServices = servicesData.filter(service =>
    service.title.toLowerCase().includes(search.toLowerCase()) &&
    (filterPrice === '' || service.price <= filterPrice)
  );

  const sortedServices = [...filteredServices].sort((a, b) => {
    if (sortOption === 'price') return a.price - b.price;
    if (sortOption === 'duration') return parseInt(a.duration) - parseInt(b.duration);
    return 0;
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8">Car Wash Services</h2>
      
      <input
        type="text"
        placeholder="Search services..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 p-2 border border-gray-300 rounded w-full"
      />

      <div className="flex mb-4">
        <select
          value={filterPrice}
          onChange={(e) => setFilterPrice(e.target.value)}
          className="mr-4 p-2 border border-gray-300 rounded"
        >
          <option value="">Filter by Price</option>
          <option value="10">Up to $10</option>
          <option value="25">Up to $25</option>
          <option value="50">Up to $50</option>
        </select>

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">Sort by</option>
          <option value="price">Price</option>
          <option value="duration">Duration</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedServices.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-xl"
          >
            <div className="p-4">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <p className="text-lg font-bold mt-2">${service.price}</p>
              <p className="text-sm text-gray-500">Duration: {service.duration}</p>
              <Link
                to={`/services/${service.id}`}
                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
