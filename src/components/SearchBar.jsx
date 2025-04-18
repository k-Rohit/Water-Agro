
import "../styles/components/SearchBar.css";
// SearchBar.jsx
import React, { useState, useEffect, useRef } from 'react';
import productsData from '../product.json';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const timeoutRef = useRef(null);
  
  // Category names for placeholder rotation
  const categories = [
    'Insecticides',
    'Fungicides', 
    'Herbicides', 
    'Plant Growth Regulators', 
    'Fertilizers'
  ];

  // Dynamic placeholder cycling
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % categories.length);
    }, 1500); // Change every 1.5 seconds

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [placeholderIndex]);

  // Search functionality with debounce
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (searchTerm.trim()) {
        performSearch(searchTerm);
        setIsSearchActive(true);
      } else {
        setSearchResults([]);
        setIsSearchActive(false);
        if (onSearch) {
          onSearch(null);
        }
      }
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

  const performSearch = (term) => {
    const results = [];
    
    // Search across all categories
    productsData.categories.forEach(category => {
      const matchingProducts = category.products.filter(product => 
        product.name.toLowerCase().includes(term.toLowerCase())
      );
      
      // Add category info to each matching product
      const productsWithCategory = matchingProducts.map(product => ({
        ...product,
        categoryName: category.name
      }));
      
      results.push(...productsWithCategory);
    });
    
    setSearchResults(results);
    
    // If onSearch prop exists, pass results to parent component
    if (onSearch) {
      onSearch(results);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
    setIsSearchActive(false);
    if (onSearch) {
      onSearch(null);
    }
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder={`Search ${categories[placeholderIndex]}...`}
          value={searchTerm}
          onChange={handleInputChange}
          className="search-input"
        />
        {searchTerm && (
          <button onClick={handleClearSearch} className="clear-button">
            ×
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;