
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import '../../ProductManagement.css'; // Import custom CSS for animations

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([
    { _id: 'strength', name: 'Strength' },
    { _id: 'yoga', name: 'Yoga' },
    { _id: 'recovery', name: 'Recovery' },
    { _id: 'cardio', name: 'Cardio' },
    { _id: 'accessories', name: 'Accessories' },
    { _id: 'core', name: 'Core' },
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    category: '',
    image: '',
    description: '',
    stock: '',
  });
  const [filterTerm, setFilterTerm] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Fetch products from the backend
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    // Fetch categories from the backend
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchProducts();
    fetchCategories();
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
        category: '',
        image: '',
        description: '',
        stock: '',
      });
      setSuccessMessage('Product added successfully!');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleUpdateProduct = async () => {
    try {
      await axios.put(`http://localhost:5000/api/products/${editingProduct._id}`, editingProduct);
      setProducts(products.map((product) =>
        product._id === editingProduct._id ? editingProduct : product
      ));
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
          <div className="p-4 bg-green-500 text-white rounded-lg mb-4">
            {successMessage}
          </div>
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
            className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-4"
          >
            <FaPlus /> Add New Product
          </button>
          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-4">No Products Available</h2>
                <p className="text-gray-700">It looks like there are no products in the inventory.</p>
                <div className="mt-4 animate-bounce">
                  <FaPlus size={40} className="text-blue-500" />
                </div>
              </div>
            </div>
          ) : (
            <table className="w-full bg-white border border-gray-200 rounded-lg shadow-lg">
              <thead>
                <tr>
                  <th className="p-4 border-b">Name</th>
                  <th className="p-4 border-b">Price</th>
                  <th className="p-4 border-b">Category</th>
                  <th className="p-4 border-b">Stock</th>
                  <th className="p-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product._id}>
                    <td className="p-4 border-b">{product.name}</td>
                    <td className="p-4 border-b">${product.price.toFixed(2)}</td>
                    <td className="p-4 border-b">{product.category.name}</td>
                    <td className="p-4 border-b">{product.stock}</td>
                    <td className="p-4 border-b">
                      <button
                        onClick={() => handleEdit(product)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <FaEdit /> Edit
                      </button>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="text-red-500 hover:text-red-700 ml-4"
                      >
                        <FaTrash /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Product Form */}
        <div className="p-6 bg-gray-50">
          <h2 className="text-lg font-semibold mb-4">{isEditing ? 'Edit Product' : 'Add New Product'}</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Product Name</label>
              <input
                type="text"
                name="name"
                value={isEditing ? editingProduct.name : newProduct.name}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg py-2 px-4 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Price</label>
              <input
                type="number"
                name="price"
                value={isEditing ? editingProduct.price : newProduct.price}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg py-2 px-4 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Category</label>
              <select
                name="category"
                value={isEditing ? editingProduct.category : newProduct.category}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg py-2 px-4 w-full"
                required
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Image URL</label>
              <input
                type="text"
                name="image"
                value={isEditing ? editingProduct.image : newProduct.image}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg py-2 px-4 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Description</label>
              <textarea
                name="description"
                value={isEditing ? editingProduct.description : newProduct.description}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg py-2 px-4 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Stock</label>
              <input
                type="number"
                name="stock"
                value={isEditing ? editingProduct.stock : newProduct.stock}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg py-2 px-4 w-full"
                required
              />
            </div>
            {isEditing ? (
              <button
                type="button"
                onClick={handleUpdateProduct}
                className="bg-green-500 text-white py-2 px-4 rounded-lg"
              >
                Update Product
              </button>
            ) : (
              <button
                type="button"
                onClick={handleAddProduct}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg"
              >
                Add Product
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProductManagement;
