import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Modal from '../components/Modal'; // Import Modal
import Footer from '../components/Footer';
import MobileNavigation from '../components/MobileNavigation';
import productsData from '../product.json';

import InsecticideIcon from '../assets/Insecticides.svg';
import FungicideIcon     from '../assets/Fungicides.svg';
import HerbicideIcon     from '../assets/Herbicides.svg';
import PlantGrowthIcon   from '../assets/PlantGrowth.svg';
import FertilizerIcon    from '../assets/Fertilizer.svg';

import '../styles/pages/ProductPage.css';

export const ProductPage = () => {
  const [category, setCategory]        = useState("Insecticides");
  const [enrichedProducts, setEnriched] = useState([]);
  const [isLoading, setIsLoading]      = useState(true);
  const [selectedProduct, setSelected] = useState(null); // For Modal

  // Glob import for images
  const productImages = import.meta.glob(
    '../assets/Product/*.{png,jpg,jpeg,gif,svg}', 
    { eager: true }
  );

  // Helper to find actual image URL
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
    { icon: PlantGrowthIcon, name: "Plant Growth Regulators", alt: "Plant Growth Regulators", shortName: "Plant Growth" },
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

  const handleProductClick = (prodName) => {
    for (let cat of productsData.categories) {
      const found = cat.products.find(p => p.name === prodName);
      if (found) {
        setSelected({ ...found, image: getImageUrl(found.image) });
        return;
      }
    }
  };

  return (
    <>
      <MobileNavigation />

      <div className="product-page-container">
        {/* Category icons with labels */}
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

        {/* Products grid */}
        {isLoading ? (
          <div className="loading-container"><p>Loading products...</p></div>
        ) : enrichedProducts.length === 0 ? (
          <div className="no-products-message">
            <p>No products available in this category</p>
          </div>
        ) : (
          <div className="products-grid">
            {enrichedProducts.map((prod, idx) => (
              <ProductCard
                key={idx}
                product={prod}
                onClick={() => handleProductClick(prod.name)}  // Pass product click handler
              />
            ))}
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
