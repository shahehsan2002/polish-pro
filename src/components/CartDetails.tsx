

// import React from "react";
// import { Minus, Plus, Trash2 } from "lucide-react";
// import { useAppDispatch } from "../redux/hooks";
// import { updateQuantity, removeFromCart } from "../redux/features/cartSlice";

// interface CartDetailsProps {
//   product: {
//     id: string;
//     image: string;
//     name: string;
//     price: number;
//     quantity: number;
//     stock: number;
//   };
// }

// const CartDetails: React.FC<CartDetailsProps> = ({ product }) => {
//   const dispatch = useAppDispatch();

//   const handleQuantity = (type: "increment" | "decrement", id: string) => {
//     const newQuantity =
//       type === "increment" ? product.quantity + 1 : product.quantity - 1;

//     if (type === "increment" && newQuantity > product.stock) {
//       alert("Cannot increase quantity. Stock is out.");
//       return;
//     }

//     dispatch(updateQuantity({ type, id }));
//   };

//   const handleRemove = (id: string) => {
//     const confirmed = window.confirm(
//       "Are you sure you want to remove this item from the cart?"
//     );
//     if (confirmed) {
//       dispatch(removeFromCart(id));
//     }
//   };

//   return (
//     <div className="flex items-center justify-between p-4 border rounded-lg bg-white shadow-lg">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-24 h-24 object-cover rounded-lg"
//       />
//       <div className="flex-grow mx-4">
//         <h3 className="text-xl font-semibold">{product.name}</h3>
//         <p className="text-lg">${product.price.toFixed(2)}</p>
//         {product.quantity >= product.stock && (
//           <p className="text-red-600">Stock Out</p>
//         )}
//       </div>
//       <div className="flex items-center space-x-3">
//         <button
//           onClick={() => handleQuantity("decrement", product.id)}
//           className="bg-green-600 text-white p-3 rounded-full"
//         >
//           <Minus size={20} />
//         </button>
//         <span>{product.quantity}</span>
//         <button
//           onClick={() => handleQuantity("increment", product.id)}
//           disabled={product.quantity >= product.stock}
//           className={`bg-green-600 text-white p-3 rounded-full ${
//             product.quantity >= product.stock ? "cursor-not-allowed" : ""
//           }`}
//         >
//           <Plus size={20} />
//         </button>
//       </div>
//       <button
//         onClick={() => handleRemove(product.id)}
//         className="bg-red-600 text-white p-3 rounded-full"
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

interface CartDetailsProps {
  product: {
    id: string;
    image: string;
    name: string;
    price: number;
    quantity: number;
    stock: number;
  };
}

const CartDetails: React.FC<CartDetailsProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleQuantity = (type: "increment" | "decrement", id: string) => {
    const newQuantity =
      type === "increment" ? product.quantity + 1 : product.quantity - 1;

    if (type === "increment" && newQuantity > product.stock) {
      alert("Cannot increase quantity. Stock is out.");
      return;
    }

    dispatch(updateQuantity({ type, id }));
  };

  const handleRemove = (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this item from the cart?"
    );
    if (confirmed) {
      dispatch(removeFromCart(id));
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
        <p className="text-lg">${product.price.toFixed(2)}</p>
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
