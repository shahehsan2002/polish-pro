// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaTrashAlt } from 'react-icons/fa';

// // Sample cart items (this could be replaced with state from a global store or context)
// const cartItems = [
//   { id: 1, name: 'Product 1', price: 29.99, quantity: 2 },
//   { id: 2, name: 'Product 2', price: 49.99, quantity: 1 },
//   { id: 3, name: 'Product 3', price: 19.99, quantity: 3 },
// ];

// const Cart = () => {
//   // Calculate the total price
//   const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <section className="py-16 px-4 bg-gray-100">
//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
//         <div className="p-6 border-b border-gray-200">
//           <h2 className="text-3xl font-bold text-gray-800">Your Cart</h2>
//         </div>
        
//         <div className="p-6">
//           {/* Cart Items */}
//           {cartItems.length === 0 ? (
//             <p className="text-center text-gray-500">Your cart is empty.</p>
//           ) : (
//             <ul className="space-y-4">
//               {cartItems.map(item => (
//                 <motion.li
//                   key={item.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3, delay: 0.1 * item.id }}
//                   className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-md relative"
//                 >
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-700">{item.name}</h3>
//                     <p className="text-gray-500">Price: ${item.price.toFixed(2)}</p>
//                     <p className="text-gray-500">Quantity: {item.quantity}</p>
//                   </div>
//                   <div className="text-gray-500 text-xl cursor-pointer hover:text-red-500 transition-colors duration-300">
//                     <FaTrashAlt />
//                   </div>
//                 </motion.li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Cart Summary */}
//         <div className="p-6 border-t border-gray-200">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-xl font-bold text-gray-800">Total Price</h3>
//             <p className="text-xl font-semibold text-gray-800">${totalPrice.toFixed(2)}</p>
//           </div>
//           <button className="w-full py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
//             Checkout
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Cart;

import OrderSummary from "@/components/OrderSummary";
import CartDetails from "@/components/CartDetails";
import { useAppSelector } from "../../redux/hooks"; // Ensure correct path to hooks

const Cart = () => {
  const products = useAppSelector((store) => store.cart.products);

  return (
    <div className="container mt-10 mx-auto">
      <div className="flex lg:flex-row flex-col-reverse justify-center lg:space-x-40">
        <div className="space-y-5 lg:mt-0 mt-5">
          {products.length ? (
            products.map((product) => (
              <CartDetails key={product.id} product={product} />
            ))
          ) : (
            <p className="text-2xl text-red-500">No products found</p>
          )}
        </div>
        <OrderSummary />
      </div>
    </div>
  );
};

export default Cart;