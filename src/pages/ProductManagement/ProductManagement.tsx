// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
// import "../../ProductManagement.css"; // Import custom CSS for animations

// const ProductManagement = () => {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([
//     { _id: "strength", name: "Strength" },
//     { _id: "yoga", name: "Yoga" },
//     { _id: "recovery", name: "Recovery" },
//     { _id: "cardio", name: "Cardio" },
//     { _id: "accessories", name: "Accessories" },
//     { _id: "core", name: "Core" },
//   ]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [newProduct, setNewProduct] = useState({
//     name: "",
//     price: "",
//     category: "",
//     image: "",
//     description: "",
//     stock: "",
//   });
//   const [filterTerm, setFilterTerm] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   useEffect(() => {
//     // Fetch products from the backend
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/products");
//         setProducts(response.data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     // Fetch categories from the backend
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:5000/api/categories"
//         );
//         setCategories(response.data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchProducts();
//     fetchCategories();
//   }, []);

//   const handleEdit = (product) => {
//     setEditingProduct(product);
//     setIsEditing(true);
//     setSuccessMessage("");
//   };

//   const handleDelete = async (productId) => {
//     if (window.confirm("Are you sure you want to delete this product?")) {
//       try {
//         await axios.delete(`http://localhost:5000/api/products/${productId}`);
//         setProducts(products.filter((product) => product._id !== productId));
//         setSuccessMessage("Product deleted successfully!");
//       } catch (error) {
//         console.error("Error deleting product:", error);
//       }
//     }
//   };

//   const handleAddProduct = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/products",
//         newProduct
//       );
//       setProducts([...products, response.data]);
//       setNewProduct({
//         name: "",
//         price: "",
//         category: "",
//         image: "",
//         description: "",
//         stock: "",
//       });
//       setSuccessMessage("Product added successfully!");
//     } catch (error) {
//       console.error("Error adding product:", error);
//     }
//   };

//   const handleUpdateProduct = async () => {
//     try {
//       await axios.put(
//         `http://localhost:5000/api/products/${editingProduct._id}`,
//         editingProduct
//       );
//       setProducts(
//         products.map((product) =>
//           product._id === editingProduct._id ? editingProduct : product
//         )
//       );
//       setEditingProduct(null);
//       setIsEditing(false);
//       setSuccessMessage("Product updated successfully!");
//     } catch (error) {
//       console.error("Error updating product:", error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (isEditing) {
//       setEditingProduct({ ...editingProduct, [name]: value });
//     } else {
//       setNewProduct({ ...newProduct, [name]: value });
//     }
//   };

//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(filterTerm.toLowerCase())
//   );

//   return (
//     <section className="py-16 px-4 bg-gray-100">
//       <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
//         {/* Success Message */}
//         {successMessage && (
//           <div className="p-4 bg-green-500 text-white rounded-lg mb-4">
//             {successMessage}
//           </div>
//         )}

//         {/* Search Bar */}
//         <div className="p-6 border-b border-gray-200 bg-gray-50 mb-6">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={filterTerm}
//             onChange={(e) => setFilterTerm(e.target.value)}
//             className="border border-gray-300 rounded-lg py-2 px-4 w-full"
//           />
//         </div>

//         {/* Product List Table */}
//         <div className="p-6">
//           <button
//             onClick={() => setIsEditing(false)}
//             className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-4"
//           >
//             <FaPlus /> Add New Product
//           </button>
//           {filteredProducts.length === 0 ? (
//             <div className="flex flex-col items-center justify-center py-16">
//               <div className="text-center">
//                 <h2 className="text-xl font-semibold mb-4">
//                   No Products Available
//                 </h2>
//                 <p className="text-gray-700">
//                   It looks like there are no products in the inventory.
//                 </p>
//                 <div className="mt-4 animate-bounce">
//                   <FaPlus size={40} className="text-blue-500" />
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <table className="w-full bg-white border border-gray-200 rounded-lg shadow-lg">
//               <thead>
//                 <tr>
//                   <th className="p-4 border-b">Name</th>
//                   <th className="p-4 border-b">Price</th>
//                   <th className="p-4 border-b">Category</th>
//                   <th className="p-4 border-b">Stock</th>
//                   <th className="p-4 border-b">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredProducts.map((product) => (
//                   <tr key={product._id}>
//                     <td className="p-4 border-b">{product.name}</td>
//                     <td className="p-4 border-b">
//                       ${product.price.toFixed(2)}
//                     </td>
//                     <td className="p-4 border-b">{product.category.name}</td>
//                     <td className="p-4 border-b">{product.stock}</td>
//                     <td className="p-4 border-b">
//                       <button
//                         onClick={() => handleEdit(product)}
//                         className="text-blue-500 hover:text-blue-700"
//                       >
//                         <FaEdit /> Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(product._id)}
//                         className="text-red-500 hover:text-red-700 ml-4"
//                       >
//                         <FaTrash /> Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>

//         {/* Product Form */}
//         <div className="p-6 bg-gray-50">
//           <h2 className="text-lg font-semibold mb-4">
//             {isEditing ? "Edit Product" : "Add New Product"}
//           </h2>
//           <form>
//             <div className="mb-4">
//               <label className="block text-gray-700">Product Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={isEditing ? editingProduct.name : newProduct.name}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded-lg py-2 px-4 w-full"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Price</label>
//               <input
//                 type="number"
//                 name="price"
//                 value={isEditing ? editingProduct.price : newProduct.price}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded-lg py-2 px-4 w-full"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Category</label>
//               <select
//                 name="category"
//                 value={
//                   isEditing ? editingProduct.category : newProduct.category
//                 }
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded-lg py-2 px-4 w-full"
//                 required
//               >
//                 <option value="">Select Category</option>
//                 {categories.map((category) => (
//                   <option key={category._id} value={category._id}>
//                     {category.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Image URL</label>
//               <input
//                 type="text"
//                 name="image"
//                 value={isEditing ? editingProduct.image : newProduct.image}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded-lg py-2 px-4 w-full"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Description</label>
//               <textarea
//                 name="description"
//                 value={
//                   isEditing
//                     ? editingProduct.description
//                     : newProduct.description
//                 }
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded-lg py-2 px-4 w-full"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Stock</label>
//               <input
//                 type="number"
//                 name="stock"
//                 value={isEditing ? editingProduct.stock : newProduct.stock}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded-lg py-2 px-4 w-full"
//                 required
//               />
//             </div>
//             {isEditing ? (
//               <button
//                 type="button"
//                 onClick={handleUpdateProduct}
//                 className="bg-green-500 text-white py-2 px-4 rounded-lg"
//               >
//                 Update Product
//               </button>
//             ) : (
//               <button
//                 type="button"
//                 onClick={handleAddProduct}
//                 className="bg-blue-500 text-white py-2 px-4 rounded-lg"
//               >
//                 Add Product
//               </button>
//             )}
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductManagement;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
// import "../../ProductManagement.css"; // Import custom CSS for animations

// const ProductManagement = () => {
//   const [products, setProducts] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [newProduct, setNewProduct] = useState({
//     name: "",
//     price: "",
//     image: "",
//     description: "",
//     stock: "",
//   });
//   const [filterTerm, setFilterTerm] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   useEffect(() => {
//     // Fetch products from the backend
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/products");
//         setProducts(response.data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleEdit = (product) => {
//     setEditingProduct(product);
//     setIsEditing(true);
//     setSuccessMessage("");
//   };

//   const handleDelete = async (productId) => {
//     if (window.confirm("Are you sure you want to delete this product?")) {
//       try {
//         await axios.delete(`http://localhost:5000/api/products/${productId}`);
//         setProducts(products.filter((product) => product._id !== productId));
//         setSuccessMessage("Product deleted successfully!");
//       } catch (error) {
//         console.error("Error deleting product:", error);
//       }
//     }
//   };

//   const handleAddProduct = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/products",
//         newProduct
//       );
//       setProducts([...products, response.data]);
//       setNewProduct({
//         name: "",
//         price: "",
//         image: "",
//         description: "",
//         stock: "",
//       });
//       setSuccessMessage("Product added successfully!");
//     } catch (error) {
//       console.error("Error adding product:", error);
//     }
//   };

//   const handleUpdateProduct = async () => {
//     try {
//       await axios.put(
//         `http://localhost:5000/api/products/${editingProduct._id}`,
//         editingProduct
//       );
//       setProducts(
//         products.map((product) =>
//           product._id === editingProduct._id ? editingProduct : product
//         )
//       );
//       setEditingProduct(null);
//       setIsEditing(false);
//       setSuccessMessage("Product updated successfully!");
//     } catch (error) {
//       console.error("Error updating product:", error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (isEditing) {
//       setEditingProduct({ ...editingProduct, [name]: value });
//     } else {
//       setNewProduct({ ...newProduct, [name]: value });
//     }
//   };

//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(filterTerm.toLowerCase())
//   );

//   return (
//     <section className="py-16 px-4 bg-gray-100">
//       <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
//         {/* Success Message */}
//         {successMessage && (
//           <div className="p-4 bg-green-500 text-white rounded-lg mb-4">
//             {successMessage}
//           </div>
//         )}

//         {/* Search Bar */}
//         <div className="p-6 border-b border-gray-200 bg-gray-50 mb-6">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={filterTerm}
//             onChange={(e) => setFilterTerm(e.target.value)}
//             className="border border-gray-300 rounded-lg py-2 px-4 w-full"
//           />
//         </div>

//         {/* Product List Table */}
//         <div className="p-6">
//           <button
//             onClick={() => {
//               setIsEditing(false);
//               setNewProduct({
//                 name: "",
//                 price: "",
//                 image: "",
//                 description: "",
//                 stock: "",
//               });
//             }}
//             className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-4"
//           >
//             <FaPlus /> Add New Product
//           </button>
//           {filteredProducts.length === 0 ? (
//             <div className="flex flex-col items-center justify-center py-16">
//               <div className="text-center">
//                 <h2 className="text-xl font-semibold mb-4">
//                   No Products Available
//                 </h2>
//                 <p className="text-gray-700">
//                   It looks like there are no products in the inventory.
//                 </p>
//                 <div className="mt-4 animate-bounce">
//                   <FaPlus size={40} className="text-blue-500" />
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <table className="w-full bg-white border border-gray-200 rounded-lg shadow-lg">
//               <thead>
//                 <tr>
//                   <th className="p-4 border-b">Name</th>
//                   <th className="p-4 border-b">Price</th>
//                   <th className="p-4 border-b">Stock</th>
//                   <th className="p-4 border-b">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredProducts.map((product) => (
//                   <tr key={product._id}>
//                     <td className="p-4 border-b">{product.name}</td>
//                     <td className="p-4 border-b">${product.price.toFixed(2)}</td>
//                     <td className="p-4 border-b">{product.stock}</td>
//                     <td className="p-4 border-b">
//                       <button
//                         onClick={() => handleEdit(product)}
//                         className="text-blue-500 hover:text-blue-700"
//                       >
//                         <FaEdit /> Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(product._id)}
//                         className="text-red-500 hover:text-red-700 ml-4"
//                       >
//                         <FaTrash /> Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>

//         {/* Product Form */}
//         <div className="p-6 bg-gray-50">
//           <h2 className="text-lg font-semibold mb-4">
//             {isEditing ? "Edit Product" : "Add New Product"}
//           </h2>
//           <form>
//             <div className="mb-4">
//               <label className="block text-gray-700">Product Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={isEditing ? editingProduct.name : newProduct.name}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded-lg py-2 px-4 w-full"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Price</label>
//               <input
//                 type="number"
//                 name="price"
//                 value={isEditing ? editingProduct.price : newProduct.price}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded-lg py-2 px-4 w-full"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Image URL</label>
//               <input
//                 type="text"
//                 name="image"
//                 value={isEditing ? editingProduct.image : newProduct.image}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded-lg py-2 px-4 w-full"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Description</label>
//               <textarea
//                 name="description"
//                 value={isEditing ? editingProduct.description : newProduct.description}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded-lg py-2 px-4 w-full"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Stock</label>
//               <input
//                 type="number"
//                 name="stock"
//                 value={isEditing ? editingProduct.stock : newProduct.stock}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded-lg py-2 px-4 w-full"
//                 required
//               />
//             </div>
//             {isEditing ? (
//               <button
//                 type="button"
//                 onClick={handleUpdateProduct}
//                 className="bg-green-500 text-white py-2 px-4 rounded-lg"
//               >
//                 Update Product
//               </button>
//             ) : (
//               <button
//                 type="button"
//                 onClick={handleAddProduct}
//                 className="bg-blue-500 text-white py-2 px-4 rounded-lg"
//               >
//                 Add Product
//               </button>
//             )}
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductManagement;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
// import "../../ProductManagement.css"; // Import custom CSS for animations

// const ProductManagement = () => {
//   const [products, setProducts] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [newProduct, setNewProduct] = useState({
//     name: "",
//     price: "",
//     image: "",
//     description: "",
//     stock: "",
//     category: "", // Category input added
//   });
//   const [filterTerm, setFilterTerm] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   useEffect(() => {
//     // Fetch products from the backend
//     const fetchProducts = async () => {
//       try {
//         const productResponse = await axios.get("http://localhost:5000/api/products");
//         setProducts(productResponse.data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleEdit = (product) => {
//     setEditingProduct(product);
//     setIsEditing(true);
//     setSuccessMessage("");
//   };

//   const handleDelete = async (productId) => {
//     if (window.confirm("Are you sure you want to delete this product?")) {
//       try {
//         await axios.delete(`http://localhost:5000/api/products/${productId}`);
//         setProducts(products.filter((product) => product._id !== productId));
//         setSuccessMessage("Product deleted successfully!");
//       } catch (error) {
//         console.error("Error deleting product:", error);
//       }
//     }
//   };

//   const handleAddProduct = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/products",
//         newProduct
//       );
//       setProducts([...products, response.data]);
//       setNewProduct({
//         name: "",
//         price: "",
//         image: "",
//         description: "",
//         stock: "",
//         category: "", // Reset category after adding
//       });
//       setSuccessMessage("Product added successfully!");
//     } catch (error) {
//       console.error("Error adding product:", error);
//     }
//   };

//   const handleUpdateProduct = async () => {
//     try {
//       await axios.put(
//         `http://localhost:5000/api/products/${editingProduct._id}`,
//         editingProduct
//       );
//       setProducts(
//         products.map((product) =>
//           product._id === editingProduct._id ? editingProduct : product
//         )
//       );
//       setEditingProduct(null);
//       setIsEditing(false);
//       setSuccessMessage("Product updated successfully!");
//     } catch (error) {
//       console.error("Error updating product:", error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (isEditing) {
//       setEditingProduct({ ...editingProduct, [name]: value });
//     } else {
//       setNewProduct({ ...newProduct, [name]: value });
//     }
//   };

//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(filterTerm.toLowerCase())
//   );

//   return (
//     <section className="py-16 px-4 bg-gray-100">
//       <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
//         {/* Success Message */}
//         {successMessage && (
//           <div className="p-4 bg-green-500 text-white rounded-lg mb-4">
//             {successMessage}
//           </div>
//         )}

//         {/* Search Bar */}
//         <div className="p-6 border-b border-gray-200 bg-gray-50 mb-6">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={filterTerm}
//             onChange={(e) => setFilterTerm(e.target.value)}
//             className="border border-gray-300 rounded-lg py-2 px-4 w-full"
//           />
//         </div>

//         {/* Product List Table */}
//         <div className="p-6">
//           <button
//             onClick={() => {
//               setIsEditing(false);
//               setNewProduct({
//                 name: "",
//                 price: "",
//                 image: "",
//                 description: "",
//                 stock: "",
//                 category: "", // Reset category
//               });
//             }}
//             className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-4"
//           >
//             <FaPlus /> Add New Product
//           </button>
//           {filteredProducts.length === 0 ? (
//             <div className="flex flex-col items-center justify-center py-16">
//               <div className="text-center">
//                 <h2 className="text-xl font-semibold mb-4">
//                   No Products Available
//                 </h2>
//                 <p className="text-gray-700">
//                   It looks like there are no products in the inventory.
//                 </p>
//                 <div className="mt-4 animate-bounce">
//                   <FaPlus size={40} className="text-blue-500" />
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <table className="w-full bg-white border border-gray-200 rounded-lg shadow-lg">
//               <thead>
//                 <tr>
//                   <th className="p-4 border-b">Name</th>
//                   <th className="p-4 border-b">Price</th>
//                   <th className="p-4 border-b">Stock</th>
//                   <th className="p-4 border-b">Category</th>
//                   <th className="p-4 border-b">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredProducts.map((product) => (
//                   <tr key={product._id}>
//                     <td className="p-4 border-b">{product.name}</td>
//                     <td className="p-4 border-b">${product.price.toFixed(2)}</td>
//                     <td className="p-4 border-b">{product.stock}</td>
//                     <td className="p-4 border-b">{product.category}</td>
//                     <td className="p-4 border-b">
//                       <button
//                         onClick={() => handleEdit(product)}
//                         className="text-blue-500 hover:text-blue-700"
//                       >
//                         <FaEdit /> Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(product._id)}
//                         className="text-red-500 hover:text-red-700 ml-4"
//                       >
//                         <FaTrash /> Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>

//         {/* Product Form */}
//         <div className="p-6 bg-gray-50">
//           <h2 className="text-lg font-semibold mb-4">
//             {isEditing ? "Edit Product" : "Add New Product"}
//           </h2>
//           <form>
//             <div className="mb-4">
//               <label className="block text-gray-700">Product Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={isEditing ? editingProduct.name : newProduct.name}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded-lg py-2 px-4 w-full"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Price</label>
//               <input
//                 type="number"
//                 name="price"
//                 value={isEditing ? editingProduct.price : newProduct.price}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded-lg py-2 px-4 w-full"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Image URL</label>
//               <input
//                 type="text"
//                 name="image"
//                 value={isEditing ? editingProduct.image : newProduct.image}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded-lg py-2 px-4 w-full"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Description</label>
//               <textarea
//                 name="description"
//                 value={isEditing ? editingProduct.description : newProduct.description}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded-lg py-2 px-4 w-full"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Stock</label>
//               <input
//                 type="number"
//                 name="stock"
//                 value={isEditing ? editingProduct.stock : newProduct.stock}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded-lg py-2 px-4 w-full"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Category</label>
//               <input
//                 type="text"
//                 name="category"
//                 value={isEditing ? editingProduct.category : newProduct.category}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded-lg py-2 px-4 w-full"
//               />
//             </div>
//             <div className="flex justify-end">
//               {isEditing ? (
//                 <button
//                   type="button"
//                   onClick={handleUpdateProduct}
//                   className="bg-green-500 text-white py-2 px-4 rounded-lg"
//                 >
//                   Update Product
//                 </button>
//               ) : (
//                 <button
//                   type="button"
//                   onClick={handleAddProduct}
//                   className="bg-blue-500 text-white py-2 px-4 rounded-lg"
//                 >
//                   Add Product
//                 </button>
//               )}
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductManagement;


// import React, { useState, useEffect } from 'react';

// const ProductManagement = () => {
//   const [categories, setCategories] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [productData, setProductData] = useState({
//     name: '',
//     price: '',
//     stock: '',
//     description: '',
//     category: '',
//   });

//   // Fetch categories on component mount
//   useEffect(() => {
//     fetch('/api/categories')
//       .then((res) => res.json())
//       .then((data) => setCategories(data))
//       .catch((err) => console.error('Error fetching categories:', err));
//   }, []);

//   // Fetch products on component mount
//   useEffect(() => {
//     fetch('/api/products')
//       .then((res) => res.json())
//       .then((data) => setProducts(data))
//       .catch((err) => console.error('Error fetching products:', err));
//   }, []);

//   // Handle input changes for new product
//   const handleProductChange = (e) => {
//     setProductData({ ...productData, [e.target.name]: e.target.value });
//   };

//   // Submit new product
//   const submitProduct = (e) => {
//     e.preventDefault();
//     fetch('/api/products', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(productData),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts([...products, data]); // Update products list
//         setProductData({ name: '', price: '', stock: '', description: '', category: '' }); // Reset form
//       })
//       .catch((err) => console.error('Error adding product:', err));
//   };

//   return (
//     <div>
//       <h1>Product Management</h1>

//       {/* Add New Product Form */}
//       <form onSubmit={submitProduct}>
//         <input
//           type="text"
//           name="name"
//           value={productData.name}
//           onChange={handleProductChange}
//           placeholder="Product Name"
//           required
//         />
//         <input
//           type="number"
//           name="price"
//           value={productData.price}
//           onChange={handleProductChange}
//           placeholder="Price"
//           required
//         />
//         <input
//           type="number"
//           name="stock"
//           value={productData.stock}
//           onChange={handleProductChange}
//           placeholder="Stock"
//           required
//         />
//         <input
//           type="text"
//           name="description"
//           value={productData.description}
//           onChange={handleProductChange}
//           placeholder="Description"
//         />
//         <select
//           name="category"
//           value={productData.category}
//           onChange={handleProductChange}
//           required
//         >
//           <option value="">Select Category</option>
//           {categories.map((category) => (
//             <option key={category._id} value={category._id}>
//               {category.name}
//             </option>
//           ))}
//         </select>
//         <button type="submit">Add Product</button>
//       </form>

//       {/* Product List */}
//       <h2>Product List</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product._id}>
//             {product.name} - ${product.price} - {product.stock} in stock - Category: {product.category.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductManagement;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

// const ProductManagement = () => {
//   const [products, setProducts] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [newProduct, setNewProduct] = useState({
//     name: '',
//     price: '',
//     image: '',
//     description: '',
//     stock: '',
//   });
//   const [filterTerm, setFilterTerm] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   useEffect(() => {
//     // Fetch products from the backend
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/products');
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleEdit = (product) => {
//     setEditingProduct(product);
//     setIsEditing(true);
//     setSuccessMessage('');
//   };

//   const handleDelete = async (productId) => {
//     if (window.confirm('Are you sure you want to delete this product?')) {
//       try {
//         await axios.delete(`http://localhost:5000/api/products/${productId}`);
//         setProducts(products.filter((product) => product._id !== productId));
//         setSuccessMessage('Product deleted successfully!');
//       } catch (error) {
//         console.error('Error deleting product:', error);
//       }
//     }
//   };

//   const handleAddProduct = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/products', newProduct);
//       setProducts([...products, response.data]);
//       setNewProduct({
//         name: '',
//         price: '',
//         image: '',
//         description: '',
//         stock: '',
//       });
//       setSuccessMessage('Product added successfully!');
//     } catch (error) {
//       console.error('Error adding product:', error);
//     }
//   };

//   const handleUpdateProduct = async () => {
//     try {
//       await axios.put(`http://localhost:5000/api/products/${editingProduct._id}`, editingProduct);
//       setProducts(
//         products.map((product) =>
//           product._id === editingProduct._id ? editingProduct : product
//         )
//       );
//       setEditingProduct(null);
//       setIsEditing(false);
//       setSuccessMessage('Product updated successfully!');
//     } catch (error) {
//       console.error('Error updating product:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (isEditing) {
//       setEditingProduct({ ...editingProduct, [name]: value });
//     } else {
//       setNewProduct({ ...newProduct, [name]: value });
//     }
//   };

//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(filterTerm.toLowerCase())
//   );

//   return (
//     <section className="py-16 px-4 bg-gray-100">
//       <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
//         {/* Success Message */}
//         {successMessage && (
//           <div className="p-4 bg-green-500 text-white rounded-lg mb-4">
//             {successMessage}
//           </div>
//         )}

//         {/* Search Bar */}
//         <div className="p-6 border-b border-gray-200 bg-gray-50 mb-6">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={filterTerm}
//             onChange={(e) => setFilterTerm(e.target.value)}
//             className="border border-gray-300 rounded-lg py-2 px-4 w-full"
//           />
//         </div>

//         {/* Product List Table */}
//         <div className="p-6">
//           <button
//             onClick={() => setIsEditing(false)}
//             className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-4"
//           >
//             <FaPlus /> Add New Product
//           </button>
//           {filteredProducts.length === 0 ? (
//             <div className="flex flex-col items-center justify-center py-16">
//               <div className="text-center">
//                 <h2 className="text-xl font-semibold mb-4">
//                   No Products Available
//                 </h2>
//                 <p className="text-gray-700">
//                   It looks like there are no products in the inventory.
//                 </p>
//                 <div className="mt-4 animate-bounce">
//                   <FaPlus size={40} className="text-blue-500" />
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <table className="w-full bg-white border border-gray-200 rounded-lg shadow-lg">
//               <thead>
//                 <tr>
//                   <th className="p-4 border-b">Name</th>
//                   <th className="p-4 border-b">Price</th>
//                   <th className="p-4 border-b">Stock</th>
//                   <th className="p-4 border-b">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredProducts.map((product) => (
//                   <tr key={product._id}>
//                     <td className="p-4 border-b">{product.name}</td>
//                     <td className="p-4 border-b">${product.price.toFixed(2)}</td>
//                     <td className="p-4 border-b">{product.stock}</td>
//                     <td className="p-4 border-b">
//                       <button
//                         onClick={() => handleEdit(product)}
//                         className="bg-yellow-500 text-white py-1 px-3 rounded-lg mr-2"
//                       >
//                         <FaEdit />
//                       </button>
//                       <button
//                         onClick={() => handleDelete(product._id)}
//                         className="bg-red-500 text-white py-1 px-3 rounded-lg"
//                       >
//                         <FaTrash />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>

//         {/* Add/Edit Product Form */}
//         <div className="p-6">
//           <h2 className="text-2xl font-semibold mb-4">
//             {isEditing ? 'Edit Product' : 'Add New Product'}
//           </h2>
//           <form>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label htmlFor="name" className="block text-gray-700">
//                   Product Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={isEditing ? editingProduct.name : newProduct.name}
//                   onChange={handleChange}
//                   className="border border-gray-300 rounded-lg py-2 px-4 w-full"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="price" className="block text-gray-700">
//                   Price
//                 </label>
//                 <input
//                   type="number"
//                   id="price"
//                   name="price"
//                   value={isEditing ? editingProduct.price : newProduct.price}
//                   onChange={handleChange}
//                   className="border border-gray-300 rounded-lg py-2 px-4 w-full"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="stock" className="block text-gray-700">
//                   Stock
//                 </label>
//                 <input
//                   type="number"
//                   id="stock"
//                   name="stock"
//                   value={isEditing ? editingProduct.stock : newProduct.stock}
//                   onChange={handleChange}
//                   className="border border-gray-300 rounded-lg py-2 px-4 w-full"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="image" className="block text-gray-700">
//                   Image URL
//                 </label>
//                 <input
//                   type="text"
//                   id="image"
//                   name="image"
//                   value={isEditing ? editingProduct.image : newProduct.image}
//                   onChange={handleChange}
//                   className="border border-gray-300 rounded-lg py-2 px-4 w-full"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="description" className="block text-gray-700">
//                   Description
//                 </label>
//                 <textarea
//                   id="description"
//                   name="description"
//                   value={isEditing ? editingProduct.description : newProduct.description}
//                   onChange={handleChange}
//                   className="border border-gray-300 rounded-lg py-2 px-4 w-full"
//                 ></textarea>
//               </div>
//             </div>
//             <button
//               type="button"
//               onClick={isEditing ? handleUpdateProduct : handleAddProduct}
//               className="bg-blue-500 text-white py-2 px-4 rounded-lg"
//             >
//               {isEditing ? 'Update Product' : 'Add Product'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductManagement;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
// import { useSpring, animated } from '@react-spring/web';

// const ProductManagement = () => {
//   const [products, setProducts] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [newProduct, setNewProduct] = useState({
//     name: '',
//     price: '',
//     image: '',
//     description: '',
//     stock: '',
//   });
//   const [filterTerm, setFilterTerm] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   // Animation for product list
//   const listProps = useSpring({
//     opacity: 1,
//     transform: 'translateY(0)',
//     from: { opacity: 0, transform: 'translateY(20px)' },
//   });

//   // Fetch products from the backend
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/products');
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleEdit = (product) => {
//     setEditingProduct(product);
//     setIsEditing(true);
//     setSuccessMessage('');
//   };

//   const handleDelete = async (productId) => {
//     if (window.confirm('Are you sure you want to delete this product?')) {
//       try {
//         await axios.delete(`http://localhost:5000/api/products/${productId}`);
//         setProducts(products.filter((product) => product._id !== productId));
//         setSuccessMessage('Product deleted successfully!');
//       } catch (error) {
//         console.error('Error deleting product:', error);
//       }
//     }
//   };

//   const handleAddProduct = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/products', newProduct);
//       setProducts([...products, response.data]);
//       setNewProduct({
//         name: '',
//         price: '',
//         image: '',
//         description: '',
//         stock: '',
//       });
//       setSuccessMessage('Product added successfully!');
//     } catch (error) {
//       console.error('Error adding product:', error);
//     }
//   };

//   const handleUpdateProduct = async () => {
//     try {
//       await axios.put(`http://localhost:5000/api/products/${editingProduct._id}`, editingProduct);
//       setProducts(
//         products.map((product) =>
//           product._id === editingProduct._id ? editingProduct : product
//         )
//       );
//       setEditingProduct(null);
//       setIsEditing(false);
//       setSuccessMessage('Product updated successfully!');
//     } catch (error) {
//       console.error('Error updating product:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (isEditing) {
//       setEditingProduct({ ...editingProduct, [name]: value });
//     } else {
//       setNewProduct({ ...newProduct, [name]: value });
//     }
//   };

//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(filterTerm.toLowerCase())
//   );

//   return (
//     <section className="py-16 px-4 bg-gray-100">
//       <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
//         {/* Success Message */}
//         {successMessage && (
//           <animated.div className="p-4 bg-green-500 text-white rounded-lg mb-4" style={listProps}>
//             {successMessage}
//           </animated.div>
//         )}

//         {/* Search Bar */}
//         <div className="p-6 border-b border-gray-200 bg-gray-50 mb-6">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={filterTerm}
//             onChange={(e) => setFilterTerm(e.target.value)}
//             className="border border-gray-300 rounded-lg py-2 px-4 w-full"
//           />
//         </div>

//         {/* Product List Table */}
//         <div className="p-6">
//           <button
//             onClick={() => setIsEditing(false)}
//             className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-4 flex items-center gap-2 hover:bg-blue-600 transition"
//           >
//             <FaPlus /> Add New Product
//           </button>
//           {filteredProducts.length === 0 ? (
//             <div className="flex flex-col items-center justify-center py-16">
//               <div className="text-center">
//                 <h2 className="text-xl font-semibold mb-4">
//                   No Products Available
//                 </h2>
//                 <p className="text-gray-700">
//                   It looks like there are no products in the inventory.
//                 </p>
//                 <div className="mt-4 animate-bounce">
//                   <FaPlus size={40} className="text-blue-500" />
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <animated.table className="w-full bg-white border border-gray-200 rounded-lg shadow-lg" style={listProps}>
//               <thead>
//                 <tr>
//                   <th className="p-4 border-b">Name</th>
//                   <th className="p-4 border-b">Price</th>
//                   <th className="p-4 border-b">Stock</th>
//                   <th className="p-4 border-b">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredProducts.map((product) => (
//                   <animated.tr key={product._id} style={listProps}>
//                     <td className="p-4 border-b">{product.name}</td>
//                     <td className="p-4 border-b">${product.price.toFixed(2)}</td>
//                     <td className="p-4 border-b">{product.stock}</td>
//                     <td className="p-4 border-b flex gap-2">
//                       <button
//                         onClick={() => handleEdit(product)}
//                         className="bg-yellow-500 text-white py-1 px-3 rounded-lg hover:bg-yellow-600 transition"
//                       >
//                         <FaEdit />
//                       </button>
//                       <button
//                         onClick={() => handleDelete(product._id)}
//                         className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition"
//                       >
//                         <FaTrash />
//                       </button>
//                     </td>
//                   </animated.tr>
//                 ))}
//               </tbody>
//             </animated.table>
//           )}
//         </div>

//         {/* Add/Edit Product Form */}
//         <div className="p-6">
//           <h2 className="text-2xl font-semibold mb-4">
//             {isEditing ? 'Edit Product' : 'Add New Product'}
//           </h2>
//           <form>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label htmlFor="name" className="block text-gray-700">
//                   Product Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={isEditing ? editingProduct.name : newProduct.name}
//                   onChange={handleChange}
//                   className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="price" className="block text-gray-700">
//                   Price
//                 </label>
//                 <input
//                   type="number"
//                   id="price"
//                   name="price"
//                   value={isEditing ? editingProduct.price : newProduct.price}
//                   onChange={handleChange}
//                   className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="stock" className="block text-gray-700">
//                   Stock
//                 </label>
//                 <input
//                   type="number"
//                   id="stock"
//                   name="stock"
//                   value={isEditing ? editingProduct.stock : newProduct.stock}
//                   onChange={handleChange}
//                   className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="image" className="block text-gray-700">
//                   Image URL
//                 </label>
//                 <input
//                   type="text"
//                   id="image"
//                   name="image"
//                   value={isEditing ? editingProduct.image : newProduct.image}
//                   onChange={handleChange}
//                   className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="description" className="block text-gray-700">
//                   Description
//                 </label>
//                 <textarea
//                   id="description"
//                   name="description"
//                   value={isEditing ? editingProduct.description : newProduct.description}
//                   onChange={handleChange}
//                   className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                 ></textarea>
//               </div>
//             </div>
//             <button
//               type="button"
//               onClick={isEditing ? handleUpdateProduct : handleAddProduct}
//               className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
//             >
//               {isEditing ? 'Update Product' : 'Add Product'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductManagement;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
// import { useSpring, animated } from '@react-spring/web';

// const ProductManagement = () => {
//   const [products, setProducts] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [newProduct, setNewProduct] = useState({
//     name: '',
//     price: '',
//     image: '',
//     description: '',
//     stock: '',
//     category: '',  // Added category field
//   });
//   const [filterTerm, setFilterTerm] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   // Animation for product list
//   const listProps = useSpring({
//     opacity: 1,
//     transform: 'translateY(0)',
//     from: { opacity: 0, transform: 'translateY(20px)' },
//   });

//   // Fetch products from the backend
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/products');
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleEdit = (product) => {
//     setEditingProduct(product);
//     setIsEditing(true);
//     setSuccessMessage('');
//   };

//   const handleDelete = async (productId) => {
//     if (window.confirm('Are you sure you want to delete this product?')) {
//       try {
//         await axios.delete(`http://localhost:5000/api/products/${productId}`);
//         setProducts(products.filter((product) => product._id !== productId));
//         setSuccessMessage('Product deleted successfully!');
//       } catch (error) {
//         console.error('Error deleting product:', error);
//       }
//     }
//   };

//   const handleAddProduct = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/products', newProduct);
//       setProducts([...products, response.data]);
//       setNewProduct({
//         name: '',
//         price: '',
//         image: '',
//         description: '',
//         stock: '',
//         category: '',  // Reset category field
//       });
//       setSuccessMessage('Product added successfully!');
//     } catch (error) {
//       console.error('Error adding product:', error);
//     }
//   };

//   const handleUpdateProduct = async () => {
//     try {
//       await axios.put(`http://localhost:5000/api/products/${editingProduct._id}`, editingProduct);
//       setProducts(
//         products.map((product) =>
//           product._id === editingProduct._id ? editingProduct : product
//         )
//       );
//       setEditingProduct(null);
//       setIsEditing(false);
//       setSuccessMessage('Product updated successfully!');
//     } catch (error) {
//       console.error('Error updating product:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (isEditing) {
//       setEditingProduct({ ...editingProduct, [name]: value });
//     } else {
//       setNewProduct({ ...newProduct, [name]: value });
//     }
//   };

//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(filterTerm.toLowerCase())
//   );

//   return (
//     <section className="py-16 px-4 bg-gray-100">
//       <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
//         {/* Success Message */}
//         {successMessage && (
//           <animated.div className="p-4 bg-green-500 text-white rounded-lg mb-4" style={listProps}>
//             {successMessage}
//           </animated.div>
//         )}

//         {/* Search Bar */}
//         <div className="p-6 border-b border-gray-200 bg-gray-50 mb-6">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={filterTerm}
//             onChange={(e) => setFilterTerm(e.target.value)}
//             className="border border-gray-300 rounded-lg py-2 px-4 w-full"
//           />
//         </div>

//         {/* Product List Table */}
//         <div className="p-6">
//           <button
//             onClick={() => setIsEditing(false)}
//             className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-4 flex items-center gap-2 hover:bg-blue-600 transition"
//           >
//             <FaPlus /> Add New Product
//           </button>
//           {filteredProducts.length === 0 ? (
//             <div className="flex flex-col items-center justify-center py-16">
//               <div className="text-center">
//                 <h2 className="text-xl font-semibold mb-4">
//                   No Products Available
//                 </h2>
//                 <p className="text-gray-700">
//                   It looks like there are no products in the inventory.
//                 </p>
//                 <div className="mt-4 animate-bounce">
//                   <FaPlus size={40} className="text-blue-500" />
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <animated.table className="w-full bg-white border border-gray-200 rounded-lg shadow-lg" style={listProps}>
//               <thead>
//                 <tr>
//                   <th className="p-4 border-b">Name</th>
//                   <th className="p-4 border-b">Price</th>
//                   <th className="p-4 border-b">Stock</th>
//                   <th className="p-4 border-b">Category</th> {/* New Category Column */}
//                   <th className="p-4 border-b">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredProducts.map((product) => (
//                   <animated.tr key={product._id} style={listProps}>
//                     <td className="p-4 border-b">{product.name}</td>
//                     <td className="p-4 border-b">${product.price.toFixed(2)}</td>
//                     <td className="p-4 border-b">{product.stock}</td>
//                     <td className="p-4 border-b">{product.category}</td> {/* Show Category */}
//                     <td className="p-4 border-b flex gap-2">
//                       <button
//                         onClick={() => handleEdit(product)}
//                         className="bg-yellow-500 text-white py-1 px-3 rounded-lg hover:bg-yellow-600 transition"
//                       >
//                         <FaEdit />
//                       </button>
//                       <button
//                         onClick={() => handleDelete(product._id)}
//                         className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition"
//                       >
//                         <FaTrash />
//                       </button>
//                     </td>
//                   </animated.tr>
//                 ))}
//               </tbody>
//             </animated.table>
//           )}
//         </div>

//         {/* Add/Edit Product Form */}
//         <div className="p-6">
//           <h2 className="text-2xl font-semibold mb-4">
//             {isEditing ? 'Edit Product' : 'Add New Product'}
//           </h2>
//           <form>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label htmlFor="name" className="block text-gray-700">
//                   Product Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={isEditing ? editingProduct.name : newProduct.name}
//                   onChange={handleChange}
//                   className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="price" className="block text-gray-700">
//                   Price
//                 </label>
//                 <input
//                   type="number"
//                   id="price"
//                   name="price"
//                   value={isEditing ? editingProduct.price : newProduct.price}
//                   onChange={handleChange}
//                   className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="stock" className="block text-gray-700">
//                   Stock
//                 </label>
//                 <input
//                   type="number"
//                   id="stock"
//                   name="stock"
//                   value={isEditing ? editingProduct.stock : newProduct.stock}
//                   onChange={handleChange}
//                   className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="category" className="block text-gray-700"> {/* New Category Input */}
//                   Category
//                 </label>
//                 <input
//                   type="text"
//                   id="category"
//                   name="category"
//                   value={isEditing ? editingProduct.category : newProduct.category}
//                   onChange={handleChange}
//                   className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                   required
//                 />
//               </div>
//             </div>
//             <button
//               type="button"
//               onClick={isEditing ? handleUpdateProduct : handleAddProduct}
//               className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
//             >
//               {isEditing ? 'Update Product' : 'Add Product'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductManagement;


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
