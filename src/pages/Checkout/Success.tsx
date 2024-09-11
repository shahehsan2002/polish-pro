import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="p-6 max-w-md mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">Order Placed Successfully!</h1>
      <p className="text-lg mb-4">Thank you for your order. You will receive a confirmation email shortly.</p>
      <button onClick={handleGoHome} className="bg-green-600 text-white px-4 py-2 rounded">
        Go to Home
      </button>
    </div>
  );
};

export default SuccessPage;
