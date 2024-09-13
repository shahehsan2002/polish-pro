
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/productCard"; // Ensure correct path
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const location = useLocation();
  const categoryFromUrl = new URLSearchParams(location.search).get("category");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/products");
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategories([categoryFromUrl]);
    } else {
      setSelectedCategories([]);
    }
  }, [categoryFromUrl]);

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
    )
    .sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePreviousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((cat) => cat !== category) : [...prev, category]
    );
  };

  const handlePriceChange = (e) => setPriceRange([Number(e.target.value), priceRange[1]]);
  const handleMaxPriceChange = (e) => setPriceRange([priceRange[0], Number(e.target.value)]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setPriceRange([0, 10000]);
    setSortOrder("asc");
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>

      <div className="flex flex-wrap gap-6 mb-8">
        <motion.div
          className="flex flex-col w-full lg:w-1/4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="font-bold mb-2">Categories</h3>
          {["Strength", "Yoga", "Recovery", "Cardio", "Accessories", "Core"].map((category) => (
            <label
              key={category}
              className="inline-flex items-center cursor-pointer mb-2"
              aria-label={`Filter by ${category}`}
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
          <label className="mb-2">
            Min Price:{" "}
            <input
              type="number"
              value={priceRange[0]}
              onChange={handlePriceChange}
              className="border p-2 rounded"
              min="0"
            />
          </label>
          <label>
            Max Price:{" "}
            <input
              type="number"
              value={priceRange[1]}
              onChange={handleMaxPriceChange}
              className="border p-2 rounded"
              min={priceRange[0]}
            />
          </label>
        </motion.div>

        <motion.div
          className="flex flex-col w-full lg:w-1/4"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="font-bold mb-2">Sort by Price</h3>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border p-2 rounded w-full"
          >
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </motion.div>
      </div>

      <button
        onClick={handleClearFilters}
        className="mb-6 px-4 py-2 bg-red-500 text-white rounded"
      >
        Clear Filters
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-6">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found matching your criteria.
          </p>
        )}
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 text-black rounded"
        >
          <ChevronLeft />
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 text-black rounded"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Products;
