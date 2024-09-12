

// import React from "react";
// import { Minus, Plus, Trash2 } from "lucide-react";
// import { useAppDispatch } from "../redux/hooks";
// import { updateQuantity, removeFromCart } from "../redux/features/cartSlice";

// const CartDetails = ({ product }: any) => {
//   const dispatch = useAppDispatch();

//   const handleQuantity = (type: string, id: string) => {
//     const newQuantity =
//       type === "increment" ? product.quantity + 1 : product.quantity - 1;

//     if (type === "increment" && newQuantity > product.stock) {
//       alert("Cannot increase quantity. Stock is out.");
//       return;
//     }

//     const payload = { type, id };
//     dispatch(updateQuantity(payload));
//   };

//   const handleRemove = (id: string) => {
//     const confirmed = window.confirm(
//       "Are you sure you want to remove this item from the cart?"
//     );
//     if (confirmed) {
//       dispatch(removeFromCart({ id }));
//     }
//   };

//   return (
//     <div className="flex items-center justify-between p-4 border rounded-lg bg-gradient-to-r from-gray-50 to-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl w-full max-w-lg mx-auto">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-24 h-24 object-cover rounded-lg border-2 border-gray-200 shadow-md transition-transform transform hover:scale-105"
//       />
//       <div className="flex-grow mx-4">
//         <h3 className="text-xl font-semibold text-gray-800 truncate mb-1 hover:text-green-600 transition-colors duration-300">
//           {product.name}
//         </h3>
//         <p className="text-lg font-medium text-gray-700">${product.price}</p>
//         {product.quantity >= product.stock && (
//           <p className="text-red-600 text-sm mt-2">Stock Out</p>
//         )}
//       </div>
//       <div className="flex items-center space-x-3">
//         <button
//           onClick={() => handleQuantity("decrement", product.id)}
//           className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
//         >
//           <Minus size={20} />
//         </button>
//         <span className="text-lg font-medium">{product.quantity}</span>
//         <button
//           onClick={() => handleQuantity("increment", product.id)}
//           disabled={product.quantity >= product.stock}
//           className={`bg-green-600 text-white p-3 rounded-full ${
//             product.quantity >= product.stock
//               ? "cursor-not-allowed opacity-50"
//               : "hover:bg-green-700"
//           } transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105`}
//         >
//           <Plus size={20} />
//         </button>
//       </div>
//       <button
//         onClick={() => handleRemove(product.id)}
//         className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
//       >
//         <Trash2 size={20} />
//       </button>
//     </div>
//   );
// };

// export default CartDetails;

import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useAppDispatch } from "../redux/hooks";
import { updateQuantity, removeFromCart } from "../redux/features/cartSlice";

const CartDetails = ({ product }: any) => {
  const dispatch = useAppDispatch();

  const handleQuantity = (type: string, id: string) => {
    const newQuantity =
      type === "increment" ? product.quantity + 1 : product.quantity - 1;

    if (type === "increment" && newQuantity > product.stock) {
      alert("Cannot increase quantity. Stock is out.");
      return;
    }

    const payload = { type, id };
    dispatch(updateQuantity(payload));
  };

  const handleRemove = (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this item from the cart?"
    );
    if (confirmed) {
      dispatch(removeFromCart({ id }));
    }
  };

  return (
    <div className="flex items-center justify-between p-4 border rounded-lg bg-white shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-24 h-24 object-cover rounded-lg"
      />
      <div className="flex-grow mx-4">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-lg">${product.price}</p>
        {product.quantity >= product.stock && (
          <p className="text-red-600">Stock Out</p>
        )}
      </div>
      <div className="flex items-center space-x-3">
        <button
          onClick={() => handleQuantity("decrement", product.id)}
          className="bg-green-600 text-white p-3 rounded-full"
        >
          <Minus size={20} />
        </button>
        <span>{product.quantity}</span>
        <button
          onClick={() => handleQuantity("increment", product.id)}
          disabled={product.quantity >= product.stock}
          className={`bg-green-600 text-white p-3 rounded-full ${
            product.quantity >= product.stock ? "cursor-not-allowed" : ""
          }`}
        >
          <Plus size={20} />
        </button>
      </div>
      <button
        onClick={() => handleRemove(product.id)}
        className="bg-red-600 text-white p-3 rounded-full"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
};

export default CartDetails;
