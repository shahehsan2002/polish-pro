import React, { useState } from 'react';
import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi';

const SlotManagementPage = () => {
  // Fake data for testing
  const [slots, setSlots] = useState([
    { id: 1, date: '2024-11-01', time: '10:00 AM - 12:00 PM', status: 'Available' },
    { id: 2, date: '2024-11-02', time: '1:00 PM - 3:00 PM', status: 'Booked' },
    { id: 3, date: '2024-11-03', time: '3:30 PM - 5:30 PM', status: 'Available' },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [editingSlot, setEditingSlot] = useState(null);

  // Open modal to add or edit slot
  const openModal = (slot = null) => {
    setEditingSlot(slot);
    setModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setEditingSlot(null);
    setModalOpen(false);
  };

  // Handle add or edit slot submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { date, time, status } = e.target.elements;

    const newSlot = {
      id: editingSlot ? editingSlot.id : Date.now(),
      date: date.value,
      time: time.value,
      status: status.value,
    };

    if (editingSlot) {
      // Update existing slot
      setSlots(slots.map((slot) => (slot.id === editingSlot.id ? newSlot : slot)));
    } else {
      // Add new slot
      setSlots([...slots, newSlot]);
    }

    closeModal();
  };

  // Delete slot
  const handleDelete = (id) => {
    setSlots(slots.filter((slot) => slot.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">Slot Management</h2>

      {/* Add Slot Button */}
      <button
        onClick={() => openModal()}
        className="mb-4 px-4 py-2 flex items-center bg-blue-500 text-white rounded-md"
      >
        <FiPlus className="mr-2" />
        Add Slot
      </button>

      {/* Slot Table */}
      <table className="w-full bg-white rounded-md shadow-md">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">Time</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {slots.map((slot) => (
            <tr key={slot.id} className="border-b">
              <td className="px-4 py-2">{slot.date}</td>
              <td className="px-4 py-2">{slot.time}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 rounded ${
                    slot.status === 'Available' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}
                >
                  {slot.status}
                </span>
              </td>
              <td className="px-4 py-2 flex items-center space-x-2">
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => openModal(slot)}
                >
                  <FiEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(slot.id)}
                >
                  <FiTrash2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Add/Edit Slot */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-md p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold mb-4">
              {editingSlot ? 'Edit Slot' : 'Add New Slot'}
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="date">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  defaultValue={editingSlot?.date || ''}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="time">
                  Time
                </label>
                <input
                  type="text"
                  name="time"
                  defaultValue={editingSlot?.time || ''}
                  placeholder="e.g., 10:00 AM - 12:00 PM"
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-1" htmlFor="status">
                  Status
                </label>
                <select
                  name="status"
                  defaultValue={editingSlot?.status || 'Available'}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="Available">Available</option>
                  <option value="Booked">Booked</option>
                </select>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-300 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  {editingSlot ? 'Update' : 'Add'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SlotManagementPage;
