// import  { useState } from "react";
// import Modal from "../components/Modal";
// import { useAppDispatch } from '../redux/hooks'
// import { addToCart } from "../redux/features/cartSlice";
// const ProductCart = ({ product }: { product: any }) => {
//   const dispatch = useAppDispatch()
//   const [showModal, setShowModal] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState<any>(null);

//   const handleShowModal = (product: any) => {
//     setSelectedProduct(product);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedProduct(null);
//     setShowModal(false);
//   };
//   const handleAddToCart=(product)=>{
//     dispatch(addToCart(product))
//   }

//   return (
//     <div className="relative">
//     {showModal && (
//       <Modal
//         product={selectedProduct}
//         onClose={handleCloseModal}
//         handleAddToCart={() => handleAddToCart(selectedProduct!)}
//       />
//     )}

//     <div
//       onClick={() => handleShowModal(product)}
//       className="border border-gray-200 rounded-xl shadow-lg overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col h-full cursor-pointer"
//     >
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-full h-56 object-cover transition-opacity duration-300 hover:opacity-80"
//       />
//       <div className="p-6 flex flex-col flex-grow">
//         <h3 className="text-2xl font-bold text-gray-800 mb-3">
//           {product.name}
//         </h3>
//         <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
//         <p className="text-xl font-semibold text-green-600 mb-5">{product.price}</p>
//         <button
//           onClick={(e) => {
//             e.stopPropagation();
//             handleAddToCart(product);
//           }}
//           className="bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-600 hover:to-orange-300 transition duration-300 shadow-lg hover:shadow-xl"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   </div>
//   );
// };

// export default ProductCart;

// import { useState } from "react";
// import Modal from "../components/Modal";
// import { useAppDispatch } from "../redux/hooks";
// import { addToCart } from "../redux/features/cartSlice";

// const ProductCart = ({ product }: { product: any }) => {
//   const dispatch = useAppDispatch();
//   const [showModal, setShowModal] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState<any>(null);

//   const handleShowModal = (product: any) => {
//     setSelectedProduct(product);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedProduct(null);
//     setShowModal(false);
//   };

//   const handleAddToCart = (product: any) => {
//     dispatch(addToCart(product));
//   };

//   return (
//     <div className="relative">
//       {showModal && (
//         <Modal
//           product={selectedProduct}
//           onClose={handleCloseModal}
//           handleAddToCart={() => handleAddToCart(selectedProduct!)}
//         />
//       )}

//       <div
//         onClick={() => handleShowModal(product)}
//         className="border border-gray-200 rounded-xl shadow-lg overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col h-full cursor-pointer"
//       >
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full h-56 object-cover transition-opacity duration-300 hover:opacity-80"
//         />
//         <div className="p-6 flex flex-col flex-grow">
//           <h3 className="text-2xl font-bold text-gray-800 mb-3">{product.name}</h3>
//           <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
//           <p className="text-xl font-semibold text-green-600 mb-5">{product.price}</p>
//           <button
//             onClick={(e) => {
//               e.stopPropagation(); // Prevent parent click event
//               handleShowModal(product);
//             }}
//             className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 shadow-lg hover:shadow-xl"
//           >
//             View Details
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCart;


import { useState } from "react";
import Modal from "../components/Modal";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/features/cartSlice";

const ProductCart = ({ product }: { product: any }) => {
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const handleShowModal = (product: any) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="relative">
      {showModal && (
        <Modal
          product={selectedProduct}
          onClose={handleCloseModal}
          handleAddToCart={() => handleAddToCart(selectedProduct!)}
        />
      )}

      <div
        onClick={() => handleShowModal(product)}
        className="border border-gray-300 rounded-xl shadow-lg overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer relative"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/40 to-transparent opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="p-6 flex flex-col h-full justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2 transition-transform transform hover:translate-x-1">
              {product.name}
            </h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-xl font-semibold text-green-600 mb-5">
              ${product.price}
            </p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent parent click event
              handleShowModal(product);
            }}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-blue-700 transition duration-300 shadow-md hover:shadow-lg"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
