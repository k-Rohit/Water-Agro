import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Modal from '../components/Modal'; // Import Modal
import Footer from '../components/Footer';
import MobileNavigation from '../components/MobileNavigation';

import SearchBar from '../components/SearchBar';

// Import category icons
import InsecticideIcon from '../assets/Insecticide-tab.svg';
import FungicideIcon from '../assets/Fungicide-tab.svg';
import HerbicideIcon from '../assets/Herbicide-tab.svg';
import PlantGrowthIcon from '../assets/Plant-growth-promoter.svg';
import FertilizerIcon from '../assets/Fertilizer-tab.svg';


import '../styles/pages/ProductPage.css';

export const ProductPage = () => {

  const [category, setCategory] = useState("Insecticides");
  const [enrichedProducts, setEnrichedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchResults, setSearchResults] = useState(null);
  
  const productImages = import.meta.glob('../assets/Product/*.{png,jpg,jpeg,gif,svg}', { eager: true });
  
  // Helper function to get image URL


  const getImageUrl = (filename) => {
    if (!filename) return null;
    const name = filename.split('/').pop();
    for (let path in productImages) {
      if (path.includes(name)) return productImages[path].default;
    }
    return null;
  };

  // Category icons array (back in the code)
  const categoryIcons = [
    { icon: InsecticideIcon, name: "Insecticides", alt: "Insecticides" },
    { icon: FungicideIcon, name: "Fungicides", alt: "Fungicides" },
    { icon: HerbicideIcon, name: "Herbicides", alt: "Herbicides" },
    { icon: PlantGrowthIcon, name: "Plant Growth Regulators", alt: "Plant Growth Regulators" },
    { icon: FertilizerIcon, name: "Fertilizers", alt: "Fertilizers" }
  ];

  useEffect(() => {
    setIsLoading(true);
    const catData = productsData
      .categories
      .find((c) => c.name === category);

    if (catData) {
      const enriched = catData.products.map((p) => ({
        ...p,
        image: getImageUrl(p.image),
      }));
      setEnriched(enriched);
    } else {
      setEnriched([]);
    }
    setIsLoading(false);
  }, [category]);

  
  // Handle search results
  const handleSearch = (results) => {
    if (results) {
      // Add image URLs to search results
      const enrichedResults = results.map((prod) => {
        const imageUrl = getImageUrl(prod.image);
        return { ...prod, image: imageUrl };
      });
      setSearchResults(enrichedResults);
    } else {
      setSearchResults(null);
    }
  };

  // Determine which products to display (search results or category products)
  const displayProducts = searchResults || enrichedProducts;
  const isSearchActive = searchResults !== null;

  return (
    <>
      <MobileNavigation />

      <div className="product-page-container">
        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} />
        
        {/* Category icons with labels */}
        {!isSearchActive && (
          <div className="category-icons">
            {categoryIcons.map((cat, index) => (
              <div 
                key={index} 
                className={`category-item ${category === cat.name ? 'active' : ''}`}
                onClick={() => setCategory(cat.name)}
              >
                {/* Icon only, preserved from original code */}
                <img src={cat.icon} alt={cat.alt} className="category-icon" />
              </div>

            ))}
          </div>
        )}
        
        {/* Search results indicator with styled heading */}
        {isSearchActive && (
          <div className="search-results-header">
            <h3>Search Results ({displayProducts.length} {displayProducts.length === 1 ? 'product' : 'products'} found)</h3>
          </div>
        )}
        

        {/* Products grid */}
        {isLoading ? (
          <div className="loading-container"><p>Loading products...</p></div>
        ) : enrichedProducts.length === 0 ? (
          <div className="no-products-message">
            <p>No products available in this category</p>
          </div>
        ) : (
          <div className="products-grid">

            {displayProducts.length === 0 ? (
              <div className="no-products-message">
                <p>{isSearchActive ? "No products match your search" : "No products available in this category"}</p>
              </div>
            ) : (
              displayProducts.map((product, index) => (
                <ProductCard 
                  key={index} 
                  product={product} 
                  showCategory={isSearchActive}
                />
              ))
            )}

          </div>
        )}
      </div>

      {/* Render modal only if one is selected */}
      {selectedProduct && (
        <Modal 
          product={selectedProduct} 
          onClose={() => setSelected(null)} 
        />
      )}

      <Footer />
    </>
  );
};

export default ProductPage;
