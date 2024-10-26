// FilterOptions.js
import React from 'react';

const FilterOptions = ({ filterPrice, setFilterPrice, sortOption, setSortOption }) => {
  return (
    <div className="flex space-x-4 mb-4">
      <select value={filterPrice} onChange={(e) => setFilterPrice(e.target.value)} className="border border-gray-300 p-2 rounded">
        <option value="">All Prices</option>
        <option value="15">Up to $15</option>
        <option value="20">Up to $20</option>
        <option value="30">Up to $30</option>
      </select>
      <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="border border-gray-300 p-2 rounded">
        <option value="">Sort By</option>
        <option value="price">Price</option>
        <option value="duration">Duration</option>
      </select>
    </div>
  );
};

export default FilterOptions;
