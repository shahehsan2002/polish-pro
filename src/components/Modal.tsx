

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
// import Rating from "./Ratings";
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";

const Modal = ({ product, onClose, handleAddToCart }: any) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const nodeRef = useRef(null); // For the transition reference

  const handleAddToCartWithFeedback = (e: React.MouseEvent) => {
    e.preventDefault();
    handleAddToCart(product);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000); // Hide after 3 seconds
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
        className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-lg flex items-center justify-center animate-pulse backdrop-animation"
      >
        <div className="relative w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto transform transition-transform duration-500 ease-out scale-95 hover:scale-100">
          <div className="bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all duration-500 ease-in-out hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)] sm:grid sm:grid-cols-[2fr_1fr]">
            {/* Image Section */}
            <div className="relative sm:order-2">
              <img
                className="w-full h-full object-cover rounded-t-lg sm:rounded-none transition-transform duration-300 hover:scale-105"
                src={product?.images?.[0]}
                alt={product?.name}
              />
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Content Section */}
            <div className="p-6 lg:p-11 space-y-5">
              <h2 className="text-3xl lg:text-[50px] font-bold text-green-700 mb-2">
                {product?.name}
              </h2>
              <p className="text-gray-600 text-sm lg:text-base mb-4">
                {product?.description}
              </p>
              <p className="text-gray-500 text-sm lg:text-base">
                <strong>Category:</strong> {product?.category}
              </p>
              <p className="text-gray-500 text-sm lg:text-base">
                <strong>Stock Quantity:</strong> {product?.stock}
              </p>

              {/* Rating */}
              {/* <div className="flex items-center space-x-2 mb-4">
                <Rating value={product?.ratings} />
              </div> */}

              {/* Seller */}
              <p className="text-sm lg:text-base font-semibold text-gray-800 mb-8 lg:mb-16">
                Sold by: {product?.seller}
              </p>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  className="bg-green-600 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 font-semibold text-sm hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={handleAddToCartWithFeedback}
                >
                  <ShoppingCart />
                  <span>${product?.price} | Add to Cart</span>
                </button>
                <button
                  onClick={onClose}
                  className="bg-red-100 text-red-600 py-3 px-6 rounded-lg font-semibold text-sm hover:bg-red-200 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Cancel
                </button>
              </div>

              {/* Success Message */}
              {showSuccessMessage && (
                <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg shadow-lg">
                  <p className="text-center font-semibold">Item added to cart!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
