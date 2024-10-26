// ServiceList.js
import React from 'react';
import ServiceItem from './ServiceItem';

const ServiceList = ({ services }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.length > 0 ? (
        services.map(service => <ServiceItem key={service.id} service={service} />)
      ) : (
        <p>No services found.</p>
      )}
    </div>
  );
};

export default ServiceList;
