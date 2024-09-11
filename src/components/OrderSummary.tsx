import React from 'react';
import { CreditCard, Trash2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { clearCart } from "../redux/features/cartSlice";
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { tax, taxRate, grandTotal, totalPrice, selectedItems } = useAppSelector((store) => store.cart);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleProceedCheckout = () => {
    navigate('/checkout');
  };

  return (
    <section className="lg:w-80 w-full h-auto mt-10 rounded-lg bg-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-500 relative">
      <div className="p-6 space-y-4 text-center">
        <h1 className="text-3xl font-bold text-gray-800 tracking-tight animate-fade-in-up">
          Order Summary
        </h1>

        <div className="space-y-2 animate-fade-in-up delay-75">
          <p className="text-sm text-gray-700 font-medium">
            Selected Items: <span className="font-semibold text-gray-900">{selectedItems}</span>
          </p>
          <p className="text-sm text-gray-700 font-medium">
            Total Price: <span className="font-semibold text-gray-900">${totalPrice.toFixed(2)}</span>
          </p>
          <p className="text-sm text-gray-700 font-medium">
            Tax ({(taxRate * 100).toFixed(0)}%): <span className="font-semibold text-gray-900">${tax.toFixed(2)}</span>
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-4 animate-fade-in-up delay-100">
          Grand Total: <span className="font-bold text-gray-900">${grandTotal.toFixed(2)}</span>
        </h3>
      </div>

      <div className="px-6 pb-6 space-y-4 animate-fade-in-up delay-150 relative">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClearCart();
          }}
          className="w-full bg-red-500 text-white px-4 py-2 rounded-lg text-sm flex justify-between items-center hover:bg-red-600 hover:scale-105 transition-transform duration-300 ease-in-out shadow-md"
        >
          <span>Clear Cart</span>
          <Trash2 width={20} height={20} />
        </button>

        <button
          onClick={handleProceedCheckout}
          className="w-full bg-green-600 text-white px-4 py-2 rounded-lg text-sm flex justify-between items-center hover:bg-green-700 hover:scale-105 transition-transform duration-300 ease-in-out shadow-md"
        >
          <span>Proceed Checkout</span>
          <CreditCard width={20} height={20} />
        </button>
      </div>
    </section>
  );
};

export default OrderSummary;
