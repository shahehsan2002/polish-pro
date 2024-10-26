import React, { useState } from 'react';
import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi';

const UserManagement = () => {
  // Temporary fake data for testing
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Inactive' },
    { id: 3, name: 'Mark Johnson', email: 'mark@example.com', role: 'Moderator', status: 'Active' },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  // Open modal to add or edit user
  const openModal = (user = null) => {
    setEditingUser(user);
    setModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setEditingUser(null);
    setModalOpen(false);
  };

  // Handle add or edit user submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, role, status } = e.target.elements;

    const newUser = {
      id: editingUser ? editingUser.id : Date.now(),
      name: name.value,
      email: email.value,
      role: role.value,
      status: status.value,
    };

    if (editingUser) {
      // Update existing user
      setUsers(users.map((user) => (user.id === editingUser.id ? newUser : user)));
    } else {
      // Add new user
      setUsers([...users, newUser]);
    }

    closeModal();
  };

  // Delete user
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">User Management</h2>

      {/* Add User Button */}
      <button
        onClick={() => openModal()}
        className="mb-4 px-4 py-2 flex items-center bg-blue-500 text-white rounded-md"
      >
        <FiPlus className="mr-2" />
        Add User
      </button>

      {/* User Table */}
      <table className="w-full bg-white rounded-md shadow-md">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Role</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.role}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 rounded ${
                    user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td className="px-4 py-2 flex items-center space-x-2">
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => openModal(user)}
                >
                  <FiEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(user.id)}
                >
                  <FiTrash2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Add/Edit User */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-md p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold mb-4">
              {editingUser ? 'Edit User' : 'Add New User'}
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={editingUser?.name || ''}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={editingUser?.email || ''}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="role">
                  Role
                </label>
                <select
                  name="role"
                  defaultValue={editingUser?.role || 'User'}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="Admin">Admin</option>
                  <option value="Moderator">Moderator</option>
                  <option value="User">User</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-1" htmlFor="status">
                  Status
                </label>
                <select
                  name="status"
                  defaultValue={editingUser?.status || 'Active'}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
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
                  {editingUser ? 'Update' : 'Add'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
