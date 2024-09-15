import React, { useState } from "react";
import { ShoppingCart, XCircle } from "lucide-react";
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";

const Modal = ({ product, onClose, handleAddToCart }: any) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false); 
  const nodeRef = useRef(null);

  // const handleAddToCartWithFeedback = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   handleAddToCart(product);
  //   setShowSuccessMessage(true);
  //   setIsAddedToCart(true); 
  //   setTimeout(() => setShowSuccessMessage(false), 3000);
  // };

  const handleAddToCartWithFeedback = (e: React.MouseEvent) => {
    e.preventDefault();
    handleAddToCart(product); // Ensure product object has correct id and properties
    setShowSuccessMessage(true);
    setIsAddedToCart(true); 
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };
  

  return (
    <CSSTransition
      in={!!product}
      timeout={400}
      classNames="modal"
      unmountOnExit
      nodeRef={nodeRef}
    >
      <div
        ref={nodeRef}
        className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-md flex items-center justify-center"
      >
        <div className="relative w-full max-w-lg p-6 bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-2xl">
          <div className="relative overflow-hidden rounded-xl">
            <div className="relative">
              <img
                className="w-full h-56 object-cover rounded-lg shadow-md"
                src={product?.image}
                alt={product?.name}
              />
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-bold text-green-700 mb-3">{product?.name}</h2>
              <p className="text-gray-600 text-sm mb-2">{product?.description}</p>
              <p className="text-gray-500 text-sm mb-4">
                <strong>Stock:</strong> {product?.stock}
              </p>
              <p className="text-xl font-semibold text-gray-700 my-2">${product?.price}</p>

              <button
                onClick={handleAddToCartWithFeedback}
                disabled={isAddedToCart}
                className={`w-full flex items-center justify-center py-2 px-4 text-white rounded-full shadow-lg ${
                  isAddedToCart
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-green-700 to-green-500"
                }`}
              >
                <ShoppingCart size={20} />
                <span>
                  {isAddedToCart ? "Already in Cart" : showSuccessMessage ? "Added!" : "Add to Cart"}
                </span>
              </button>

              <button
                onClick={onClose}
                className="absolute top-3 right-3 bg-white text-red-500 hover:text-red-700 rounded-full p-1 shadow-md"
              >
                <XCircle size={28} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
