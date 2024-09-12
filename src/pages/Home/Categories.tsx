
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const categories = [
//   {
//     id: 1,
//     name: 'Strength',
//     image: 'https://i.postimg.cc/1X7nq8LR/ryan-de-hamer-WIPIAJW2-P8-unsplash.jpg',
//   },
//   {
//     id: 2,
//     name: 'Cardio',
//     image: 'https://i.postimg.cc/Pxr5QtbC/gastro-editorial-v-Cz-RMEDMZus-unsplash.jpg',
//   },
//   {
//     id: 3,
//     name: 'Yoga',
//     image: 'https://i.postimg.cc/g07SD8BQ/juan-miguel-agudo-d-Cd1l-xta-BA-unsplash.jpg',
//   },
//   {
//     id: 4,
//     name: 'Recovery',
//     image: 'https://i.postimg.cc/NFdTkJrc/61-QUu-Uu-Ll-KL.jpg',
//   },
//   {
//     id: 5,
//     name: 'Accessories',
//     image: 'https://i.postimg.cc/7Y7G5smH/protein-shaker-bottle.jpg',
//   },
// ];

// const CategoriesSection = () => {
//   const navigate = useNavigate();

//   const handleCategoryClick = (category) => {
//     navigate(`/products?category=${category}`);
//   };

//   return (
//     <section className="py-8">
//       <h2 className="text-3xl font-bold text-center mb-6">Categories</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4">
//         {categories.map((category) => (
//           <div
//             key={category.id}
//             className="group relative cursor-pointer"
//             onClick={() => handleCategoryClick(category.name)}
//           >
//             <img
//               src={category.image}
//               alt={category.name}
//               className="w-full h-48 object-cover rounded-lg transform group-hover:scale-105 transition duration-300"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center rounded-lg opacity-0 group-hover:opacity-100 transition duration-300">
//               <span className="text-white text-xl font-semibold">{category.name}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CategoriesSection;


import React from "react";
import { Link } from "react-router-dom";

const CategoriesSection = () => {
  const categories = ["Strength", "Yoga", "Recovery", "Cardio", "Accessories", "Core"];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
      <div className="flex flex-wrap gap-6">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/products?category=${category}`}
            className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
