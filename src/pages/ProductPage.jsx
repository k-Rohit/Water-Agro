import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import MobileNavigation from '../components/MobileNavigation';
import SearchBar from '../components/SearchBar';

// Import category icons
import InsecticideIcon from '../assets/Insecticides.svg';
import FungicideIcon from '../assets/Fungicides.svg';
import HerbicideIcon from '../assets/Herbicides.svg';
import PlantGrowthIcon from '../assets/PlantGrowth.svg';
import FertilizerIcon from '../assets/Fertilizer.svg';

// Import product data
import productsData from '../product.json';

// Import CSS styles
import '../styles/pages/ProductPage.css';

export const ProductPage = () => {
  const [category, setCategory] = useState("Insecticides");
  const [enrichedProducts, setEnrichedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchResults, setSearchResults] = useState(null);
  
  // Product images dynamic import
  const productImages = import.meta.glob('../assets/Product/*.{png,jpg,jpeg,gif,svg}', { eager: true });
  
  // Helper function to get image URL
  const getImageUrl = (filename) => {
    if (!filename) return null;
    
    // Extract just the filename if it contains a path
    const imageName = filename.split('/').pop();
    
    // Look for the image in imported images
    for (const path in productImages) {
      if (path.includes(imageName)) {
        return productImages[path].default;
      }
    }
    
    console.warn(`Image not found: ${imageName}`);
    return null;
  };
  
  // Category icons array with handler
  const categoryIcons = [
    { icon: InsecticideIcon, name: "Insecticides", alt: "Insecticides" },
    { icon: FungicideIcon, name: "Fungicides", alt: "Fungicides" },
    { icon: HerbicideIcon, name: "Herbicides", alt: "Herbicides" },
    { icon: PlantGrowthIcon, name: "Plant Growth Regulators", alt: "Plant Growth Regulators", shortName: "Plant Growth" },
    { icon: FertilizerIcon, name: "Fertilizers", alt: "Fertilizers" }
  ];
  
  // Update products when category changes
  useEffect(() => {
    setIsLoading(true);
    
    // Find the selected category in product data
    const selectedCategory = productsData.categories.find(cat => cat.name === category);
    
    if (selectedCategory) {
      // Map products and add image URLs
      const enriched = selectedCategory.products.map((prod) => {
        const imageUrl = getImageUrl(prod.image);
        return { ...prod, image: imageUrl };
      });
      
      setEnrichedProducts(enriched);
    } else {
      setEnrichedProducts([]);
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
      {/* Mobile navigation */}
      <MobileNavigation />
      
      <div className="product-page-container">
        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} />
        
        {/* Only show category icons when not searching */}
        {!isSearchActive && (
          <div className="category-icons">
            {categoryIcons.map((cat, index) => (
              <div 
                key={index} 
                className={`category-item ${category === cat.name ? 'active' : ''}`}
                onClick={() => setCategory(cat.name)}
              >
                <div className="category-icon-wrapper">
                  <img src={cat.icon} alt={cat.alt} />
                </div>
                <span className="category-label">
                  {cat.shortName || cat.name}
                </span>
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
          <div className="loading-container">
            <p>Loading products...</p>
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
      
      {/* Footer */}
      <Footer />
    </>
  );
};

export default ProductPage;