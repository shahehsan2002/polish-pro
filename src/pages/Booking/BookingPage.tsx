// // BookingPage.js
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';

// const servicesData = [
//   {
//     id: 1,
//     title: 'Basic Wash',
//     price: '$10',
//   },
//   {
//     id: 2,
//     title: 'Deluxe Wash',
//     price: '$25',
//   },
//   {
//     id: 3,
//     title: 'Premium Wash',
//     price: '$50',
//   },
// ];

// const BookingPage = () => {
//   const { id, time } = useParams();
//   const service = servicesData.find((service) => service.id === parseInt(id));

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would handle the booking logic (e.g., redirecting to AAMARPAY)
//     alert(`Booking confirmed for ${name} on ${time} for ${service.title}.`);
//     // Add redirection logic here
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h2 className="text-3xl font-bold text-center mb-8">Confirm Your Booking</h2>
//       <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
//         <div className="mb-4">
//           <h3 className="text-xl font-semibold">{service.title}</h3>
//           <p className="text-lg text-gray-600">Time Slot: {time}</p>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Name:</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email:</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//             />
//           </div>
//           <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
//             Pay Now
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BookingPage;


// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const servicesData = [
//   { id: 1, title: 'Basic Wash', price: '$10' },
//   { id: 2, title: 'Deluxe Wash', price: '$25' },
//   { id: 3, title: 'Premium Wash', price: '$50' },
// ];

// const BookingPage = () => {
//   const { id, time } = useParams();
//   const service = servicesData.find((service) => service.id === parseInt(id));
//   const navigate = useNavigate(); // Hook for navigation

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Here, you would implement the logic for redirecting to AAMARPAY.
//     // This is a placeholder for that logic.
//     alert(`Redirecting to AAMARPAY for payment...`);

//     // Simulating a successful payment (replace this with real payment logic)
//     setTimeout(() => {
//       // Mark the slot as booked (you may want to do this in your backend)
//       // Redirect to the success page
//       navigate('/success');
//     }, 2000);
//   };

//   return (
//     <div className="flex p-6 bg-gray-100 min-h-screen">
//       {/* Left Side: Service and Time Slot Display */}
//       <div className="w-1/2 pr-4">
//         <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-3xl font-bold text-center mb-4">Your Booking Details</h2>
//           <div className="mb-4">
//             <h3 className="text-xl font-semibold">{service.title}</h3>
//             <p className="text-lg text-gray-600">Time Slot: {time}</p>
//             <p className="text-lg text-gray-600">Price: {service.price}</p>
//           </div>
//         </div>
//       </div>

//       {/* Right Side: User Information Form */}
//       <div className="w-1/2 pl-4">
//         <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-3xl font-bold text-center mb-4">Confirm Your Booking</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-gray-700">Name:</label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Email:</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Selected Time:</label>
//               <input
//                 type="text"
//                 value={time}
//                 readOnly
//                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-100"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
//             >
//               Pay Now
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingPage;

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const servicesData = [
  { id: 1, title: 'Basic Wash', price: '$10' },
  { id: 2, title: 'Deluxe Wash', price: '$25' },
  { id: 3, title: 'Premium Wash', price: '$50' },
];

const BookingPage = () => {
  const { id, time } = useParams();
  const service = servicesData.find((service) => service.id === parseInt(id));
  const navigate = useNavigate();

  // State for user and vehicle information
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [vehicleBrand, setVehicleBrand] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [manufacturingYear, setManufacturingYear] = useState('');
  const [registrationPlate, setRegistrationPlate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare booking data
    const bookingData = {
      service: id,
      slot: time,
      vehicleType,
      vehicleBrand,
      vehicleModel,
      manufacturingYear,
      registrationPlate,
      customerName: name,
      email,
    };

    // Here, you would implement the logic for redirecting to AAMARPAY.
    alert(`Redirecting to AAMARPAY for payment...`);

    // Simulating a successful payment (replace this with real payment logic)
    setTimeout(() => {
      navigate('/success');
    }, 2000);
  };

  return (
    <div className="flex p-6 bg-gray-100 min-h-screen">
      {/* Left Side: Service and Time Slot Display */}
      <div className="w-1/2 pr-4 animate-fade-in">
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
          <h2 className="text-3xl font-bold text-center mb-4">Your Booking Details</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-lg text-gray-600">Time Slot: {time}</p>
            <p className="text-lg text-gray-600">Price: {service.price}</p>
          </div>
        </div>
      </div>

      {/* Right Side: User and Vehicle Information Form */}
      <div className="w-1/2 pl-4 animate-fade-in">
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
          <h2 className="text-3xl font-bold text-center mb-6">Confirm Your Booking</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md transition duration-300 ease-in-out focus:ring focus:ring-blue-300 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md transition duration-300 ease-in-out focus:ring focus:ring-blue-300 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Selected Time:</label>
              <input
                type="text"
                value={time}
                readOnly
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
              />
            </div>
            {/* Vehicle Information Fields */}
            <div className="mb-4">
              <label className="block text-gray-700">Vehicle Type:</label>
              <select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md transition duration-300 ease-in-out focus:ring focus:ring-blue-300 focus:outline-none"
              >
                <option value="">Select Vehicle Type</option>
                <option value="car">Car</option>
                <option value="truck">Truck</option>
                <option value="SUV">SUV</option>
                <option value="van">Van</option>
                <option value="motorcycle">Motorcycle</option>
                <option value="bus">Bus</option>
                <option value="electricVehicle">Electric Vehicle</option>
                <option value="hybridVehicle">Hybrid Vehicle</option>
                <option value="bicycle">Bicycle</option>
                <option value="tractor">Tractor</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Vehicle Brand:</label>
              <input
                type="text"
                value={vehicleBrand}
                onChange={(e) => setVehicleBrand(e.target.value)}
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md transition duration-300 ease-in-out focus:ring focus:ring-blue-300 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Vehicle Model:</label>
              <input
                type="text"
                value={vehicleModel}
                onChange={(e) => setVehicleModel(e.target.value)}
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md transition duration-300 ease-in-out focus:ring focus:ring-blue-300 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Manufacturing Year:</label>
              <input
                type="number"
                value={manufacturingYear}
                onChange={(e) => setManufacturingYear(e.target.value)}
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md transition duration-300 ease-in-out focus:ring focus:ring-blue-300 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Registration Plate:</label>
              <input
                type="text"
                value={registrationPlate}
                onChange={(e) => setRegistrationPlate(e.target.value)}
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md transition duration-300 ease-in-out focus:ring focus:ring-blue-300 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
