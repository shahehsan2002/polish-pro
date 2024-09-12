

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import { useSpring, animated } from '@react-spring/web';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',  // Added image field
    description: '',  // Added description field
    stock: '',
    category: '',  // Added category field
  });
  const [filterTerm, setFilterTerm] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Animation for product list
  const listProps = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(20px)' },
  });

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleEdit = (product) => {
    setEditingProduct(product);
    setIsEditing(true);
    setSuccessMessage('');
  };

  const handleDelete = async (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`http://localhost:5000/api/products/${productId}`);
        setProducts(products.filter((product) => product._id !== productId));
        setSuccessMessage('Product deleted successfully!');
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  const handleAddProduct = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/products', newProduct);
      setProducts([...products, response.data]);
      setNewProduct({
        name: '',
        price: '',
        image: '',  // Reset image field
        description: '',  // Reset description field
        stock: '',
        category: '',  // Reset category field
      });
      setSuccessMessage('Product added successfully!');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleUpdateProduct = async () => {
    try {
      await axios.put(`http://localhost:5000/api/products/${editingProduct._id}`, editingProduct);
      setProducts(
        products.map((product) =>
          product._id === editingProduct._id ? editingProduct : product
        )
      );
      setEditingProduct(null);
      setIsEditing(false);
      setSuccessMessage('Product updated successfully!');
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (isEditing) {
      setEditingProduct({ ...editingProduct, [name]: value });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filterTerm.toLowerCase())
  );

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Success Message */}
        {successMessage && (
          <animated.div className="p-4 bg-green-500 text-white rounded-lg mb-4" style={listProps}>
            {successMessage}
          </animated.div>
        )}

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
            className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-4 flex items-center gap-2 hover:bg-blue-600 transition"
          >
            <FaPlus /> Add New Product
          </button>
          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-4">
                  No Products Available
                </h2>
                <p className="text-gray-700">
                  It looks like there are no products in the inventory.
                </p>
                <div className="mt-4 animate-bounce">
                  <FaPlus size={40} className="text-blue-500" />
                </div>
              </div>
            </div>
          ) : (
            <animated.table className="w-full bg-white border border-gray-200 rounded-lg shadow-lg" style={listProps}>
              <thead>
                <tr>
                  <th className="p-4 border-b">Name</th>
                  <th className="p-4 border-b">Price</th>
                  <th className="p-4 border-b">Stock</th>
                  <th className="p-4 border-b">Category</th>
                  <th className="p-4 border-b">Image</th> {/* New Image Column */}
                  <th className="p-4 border-b">Description</th> {/* New Description Column */}
                  <th className="p-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <animated.tr key={product._id} style={listProps}>
                    <td className="p-4 border-b">{product.name}</td>
                    <td className="p-4 border-b">${product.price.toFixed(2)}</td>
                    <td className="p-4 border-b">{product.stock}</td>
                    <td className="p-4 border-b">{product.category}</td>
                    <td className="p-4 border-b">
                      <img src={product.image} alt={product.name} className="h-16 w-16 object-cover rounded-lg" />
                    </td>
                    <td className="p-4 border-b">{product.description}</td> {/* Show Description */}
                    <td className="p-4 border-b flex gap-2">
                      <button
                        onClick={() => handleEdit(product)}
                        className="bg-yellow-500 text-white py-1 px-3 rounded-lg hover:bg-yellow-600 transition"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </animated.tr>
                ))}
              </tbody>
            </animated.table>
          )}
        </div>

        {/* Add/Edit Product Form */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">
            {isEditing ? 'Edit Product' : 'Add New Product'}
          </h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">
                  Product Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={isEditing ? editingProduct.name : newProduct.name}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                />
              </div>
              <div>
                <label htmlFor="price" className="block text-gray-700">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={isEditing ? editingProduct.price : newProduct.price}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                />
              </div>
              <div>
                <label htmlFor="stock" className="block text-gray-700">
                  Stock
                </label>
                <input
                  type="number"
                  id="stock"
                  name="stock"
                  value={isEditing ? editingProduct.stock : newProduct.stock}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                />
              </div>
              <div>
                <label htmlFor="category" className="block text-gray-700">
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={isEditing ? editingProduct.category : newProduct.category}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                />
              </div>
              <div>
                <label htmlFor="image" className="block text-gray-700">
                  Image URL
                </label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  value={isEditing ? editingProduct.image : newProduct.image}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-gray-700">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={isEditing ? editingProduct.description : newProduct.description}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                />
              </div>
            </div>
            <button
              type="button"
              onClick={isEditing ? handleUpdateProduct : handleAddProduct}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              {isEditing ? 'Update Product' : 'Add Product'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProductManagement;
