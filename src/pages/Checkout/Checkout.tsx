import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    if (paymentMethod === 'cash') {
      // Update stock and handle success
      navigate('/success');
    } else {
      // Handle other payment methods
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input type="text" className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input type="tel" className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Delivery Address</label>
          <textarea className="w-full p-2 border rounded" required />
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Payment Method</h2>
          <div>
            <label className="inline-flex items-center">
              <input type="radio" name="paymentMethod" value="cash" checked={paymentMethod === 'cash'} onChange={() => setPaymentMethod('cash')} />
              <span className="ml-2">Cash on Delivery</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input type="radio" name="paymentMethod" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} />
              <span className="ml-2">Credit Card</span>
            </label>
          </div>
        </div>

        <button type="button" onClick={handlePlaceOrder} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
