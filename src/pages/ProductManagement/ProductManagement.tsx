import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

// Sample data
const sampleProducts = [
  { id: 1, name: 'Treadmill', price: 499.99, category: 'Cardio', image: 'https://via.placeholder.com/300x200', description: 'A high-quality treadmill for your home gym.', stock: 10 },
  // Add more products as needed
];

const ProductManagement = () => {
  const [products, setProducts] = useState(sampleProducts);
  const [isEditing, setIsEditing] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '', image: '', description: '', stock: '' });
  const [filterTerm, setFilterTerm] = useState('');

  useEffect(() => {
    // Fetch products from API or use sample data
    // setProducts(fetchedProducts);
  }, []);

  const handleEdit = (product) => {
    setEditingProduct(product);
    setIsEditing(true);
  };

  const handleDelete = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter((product) => product.id !== productId));
    }
  };

  const handleAddProduct = () => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    setNewProduct({ name: '', price: '', category: '', image: '', description: '', stock: '' });
  };

  const handleUpdateProduct = () => {
    setProducts(products.map((product) =>
      product.id === editingProduct.id ? editingProduct : product
    ));
    setEditingProduct(null);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (isEditing) {
      setEditingProduct({ ...editingProduct, [name]: value });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(filterTerm.toLowerCase())
  );

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Search Bar */}
        <div className="p-6 border-b border-gray-200 bg-gray-50 mb-6">
          <input
            type="text"
            placeholder="Search products..."
            value={filterTerm}
            onChange={(e) => setFilterTerm(e.target.value)}
            className="border border-gray-300 rounded-lg py-2 px-4 w-full"
          />
        </div>

        {/* Product List Table */}
        <div className="p-6">
          <button
            onClick={() => setIsEditing(false)}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center space-x-2 hover:bg-blue-600 transition-colors duration-300"
          >
            <FaPlus /> <span>Add New Product</span>
          </button>

          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Category</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td className="py-2 px-4 border-b">{product.name}</td>
                  <td className="py-2 px-4 border-b">${product.price.toFixed(2)}</td>
                  <td className="py-2 px-4 border-b">{product.category}</td>
                  <td className="py-2 px-4 border-b flex space-x-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors duration-300"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add / Update Product Form */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{isEditing ? 'Update Product' : 'Add New Product'}</h2>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={isEditing ? editingProduct.name : newProduct.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg py-2 px-4 w-full"
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={isEditing ? editingProduct.price : newProduct.price}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg py-2 px-4 w-full"
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={isEditing ? editingProduct.category : newProduct.category}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg py-2 px-4 w-full"
            />
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={isEditing ? editingProduct.image : newProduct.image}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg py-2 px-4 w-full"
            />
            <textarea
              name="description"
              placeholder="Description"
              value={isEditing ? editingProduct.description : newProduct.description}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg py-2 px-4 w-full"
            />
            <input
              type="number"
              name="stock"
              placeholder="Stock"
              value={isEditing ? editingProduct.stock : newProduct.stock}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg py-2 px-4 w-full"
            />
            <button
              onClick={isEditing ? handleUpdateProduct : handleAddProduct}
              className={`px-4 py-2 rounded-lg ${isEditing ? 'bg-green-500' : 'bg-blue-500'} text-white hover:bg-${isEditing ? 'green-600' : 'blue-600'} transition-colors duration-300`}
            >
              {isEditing ? 'Update Product' : 'Add Product'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductManagement;
