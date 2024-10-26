// ServiceItem.js
import React from 'react';

const ServiceItem = ({ service }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-bold">{service.name}</h2>
      <p>{service.description}</p>
      <p className="text-lg font-semibold">${service.price} | {service.duration} min</p>
    </div>
  );
};

export default ServiceItem;
