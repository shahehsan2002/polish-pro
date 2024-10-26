// ServiceDetailsPage.js
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// Sample data for time slots
const timeSlotsData = {
  1: ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM'],
  2: ['9:30 AM', '10:30 AM', '12:00 PM', '1:30 PM', '3:00 PM'],
  3: ['10:00 AM', '12:00 PM', '1:00 PM', '3:00 PM', '4:30 PM'],
};

const servicesData = [
  {
    id: 1,
    title: 'Basic Wash',
    description: 'A quick wash to keep your car looking fresh.',
    price: '$10',
    duration: '30 min',
  },
  {
    id: 2,
    title: 'Deluxe Wash',
    description: 'Thorough cleaning with waxing for extra shine.',
    price: '$25',
    duration: '60 min',
  },
  {
    id: 3,
    title: 'Premium Wash',
    description: 'Complete detailing and interior cleaning.',
    price: '$50',
    duration: '90 min',
  },
];

const ServiceDetailsPage = () => {
  const { id } = useParams();
  const service = servicesData.find((service) => service.id === parseInt(id));
  const [selectedTime, setSelectedTime] = useState('');

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4">
          <h2 className="text-2xl font-bold">{service.title}</h2>
          <p className="text-lg text-gray-600 mt-2">{service.description}</p>
          <p className="text-lg font-bold mt-2">{service.price}</p>
          <h3 className="text-xl font-semibold mt-4">Available Time Slots:</h3>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {timeSlotsData[service.id].map((time) => (
              <button
                key={time}
                className={`w-full py-2 rounded-md border ${
                  selectedTime === time ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
                onClick={() => handleTimeSelect(time)}
                disabled={selectedTime === time} // Disable the button if already selected
              >
                {time}
              </button>
            ))}
          </div>
          <Link
            to={`/booking/${service.id}/${selectedTime}`}
            className={`mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition ${
              !selectedTime ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={(e) => {
              if (!selectedTime) {
                e.preventDefault();
              }
            }}
          >
            Book This Service
          </Link>
        </div>
      </div>
      <Link to="/services" className="mt-4 inline-block text-blue-500 hover:underline">
        Back to Services
      </Link>
    </div>
  );
};

export default ServiceDetailsPage;
