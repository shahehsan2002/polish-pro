import React, { useState, useEffect } from "react";
import ProductCard from "../components/productCard";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react"; // For pagination arrows
import { motion } from "framer-motion"; // For animations

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 10000]); // Assuming default max price as 10000
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategories.length === 0 ||
          selectedCategories.includes(product.category)) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1]
    )
    .sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handlePriceChange = (e) => {
    setPriceRange([Number(e.target.value), priceRange[1]]);
  };

  const handleMaxPriceChange = (e) => {
    setPriceRange([priceRange[0], Number(e.target.value)]);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setPriceRange([0, 10000]);
    setSortOrder("asc");
  };

  return (
    <div className="container mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8 text-center"
      >
        <motion.h1
          className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Explore Our Products
        </motion.h1>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        <motion.input
          type="text"
          className="border p-2 rounded-lg w-full lg:w-1/3"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        <div className="flex gap-4 items-center mb-4 lg:mb-0">
          <label htmlFor="sortOrder" className="font-medium">
            Sort by Price:
          </label>
          <motion.select
            id="sortOrder"
            className="border p-2 rounded-lg"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </motion.select>
        </div>

        <motion.button
          onClick={handleClearFilters}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg transition-transform transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Clear Filters
        </motion.button>
      </div>

      <div className="flex flex-wrap gap-6 mb-8">
        <motion.div
          className="flex flex-col w-full lg:w-1/4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="font-bold mb-2">Categories</h3>
          {[
            "Strength",
            "Yoga",
            "Recovery",
            "Cardio",
            "Accessories",
            "Core",
          ].map((category) => (
            <label
              key={category}
              className="inline-flex items-center cursor-pointer mb-2"
            >
              <input
                type="checkbox"
                onChange={() => handleCategoryChange(category)}
                checked={selectedCategories.includes(category)}
                className="form-checkbox"
              />
              <span className="ml-2">{category}</span>
            </label>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col w-full lg:w-1/4"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="font-bold mb-2">Price Range</h3>
          <label>
            Min Price:
            <input
              type="number"
              className="border p-2 rounded-lg ml-2"
              value={priceRange[0]}
              onChange={handlePriceChange}
            />
          </label>
          <label>
            Max Price:
            <input
              type="number"
              className="border p-2 rounded-lg ml-2"
              value={priceRange[1]}
              onChange={handleMaxPriceChange}
            />
          </label>
        </motion.div>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {paginatedProducts.map((product) => (
          <motion.div
            key={product._id} // Change to product._id if _id is used
            className="transition-transform transform hover:scale-105 hover:shadow-lg hover:rotate-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-between items-center">
        <motion.button
          className="flex items-center border p-2 rounded-lg transition-transform transform hover:scale-105"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <ChevronLeft /> Previous
        </motion.button>
        <p className="text-lg font-medium">
          Page {currentPage} of {totalPages}
        </p>
        <motion.button
          className="flex items-center border p-2 rounded-lg transition-transform transform hover:scale-105"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Next <ChevronRight />
        </motion.button>
      </div>
    </div>
  );
};

export default Products;
