import React, { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useCreteOrderMutation } from "../../redux/api/api";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const [createOrder] = useCreteOrderMutation();
  const navigate = useNavigate();

  // State for user input
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // State for payment method
  const [paymentMethod, setPaymentMethod] = useState("cash");

  // Replace with your Redux selector to get cart items
  const cartItems = useAppSelector((store) => store.cart.products);

  // Handle input changes
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // const handlePlaceOrder = async (e) => {
  //   e.preventDefault();

  //   const orderData = {
  //     user,
  //     products: cartItems.map((item) => ({
  //       product: item._id,
  //       quantity: item.quantity,
  //     })),
  //     paymentMethod,
  //   };


  const handlePlaceOrder = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    try {
      // Simulate updating stock and handling order placement
      const res = await createOrder(orderData).unwrap();
      if (res.success) {
        // On successful order creation with cash payment
        navigate("/success");
      } else {
        console.error("Order creation failed:", res.message);
      }
    } catch (error) {
      console.log("Order submission error:", error);
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>
  
      <form onSubmit={handlePlaceOrder}>
        {/* User Information Section */}
        <div className="mb-8 border p-5 rounded">
          <h3 className="text-xl font-semibold mb-4">User Information</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={user.address}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>
        </div>
  
        {/* Order Summary Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-sm">
                  Product
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm">
                  Quantity
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item._id} className="border-b">
                  <td className="py-3 px-4">{item.name}</td>
                  <td className="py-3 px-4">{item.quantity}</td>
                  <td className="py-3 px-4">${item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {/* Payment Method Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="cash"
              name="paymentMethod"
              value="cash"
              checked={true}
              readOnly
              className="mr-2"
            />
            <label htmlFor="cash">Cash on Delivery</label>
          </div>
        </div>
  
        {/* Submit Order Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}    