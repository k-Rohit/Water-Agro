// // import React, { useState, useEffect } from 'react';
// // import ProductCard from '../components/ProductCard';
// // import Modal from '../components/Modal';
// // import Footer from '../components/Footer';
// // import MobileNavigation from '../components/MobileNavigation';
// // import SearchBar from '../components/SearchBar';
// // import productsData from '../product.json';

// // // Import category icons - using the path structure from your commented code
// // import InsecticideIcon from '../assets/Insecticide-tab.svg';
// // import FungicideIcon from '../assets/Fungicide-tab.svg';
// // import HerbicideIcon from '../assets/Herbicide-tab.svg';
// // import PlantGrowthIcon from '../assets/Plant-growth-promoter.svg';
// // import FertilizerIcon from '../assets/Fertilizer-tab.svg';
// // import SlideNotification from '../components/SlideNotification';

// // import '../styles/pages/ProductPage.css';

// // export const ProductPage = () => {
// //   const [category, setCategory] = useState("Insecticides");
// //   const [enrichedProducts, setEnrichedProducts] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [selectedProduct, setSelectedProduct] = useState(null); // For Modal
// //   const [searchResults, setSearchResults] = useState(null);

// //   // Glob import for images
// //   const productImages = import.meta.glob(
// //     '../assets/Product/*.{png,jpg,jpeg,gif,svg}', 
// //     { eager: true }
// //   );

// //   // Helper to find actual image URL
// //   const getImageUrl = (filename) => {
// //     if (!filename) return null;
// //     const imageName = filename.split('/').pop();
// //     for (let path in productImages) {
// //       if (path.includes(imageName)) return productImages[path].default;
// //     }
// //     console.warn(`Image not found: ${imageName}`);
// //     return null;
// //   };

// //   // Category icons array - using the same structure as your commented code
// //   const categoryIcons = [
// //     { icon: InsecticideIcon, name: "Insecticides", alt: "Insecticides" },
// //     { icon: FungicideIcon, name: "Fungicides", alt: "Fungicides" },
// //     { icon: HerbicideIcon, name: "Herbicides", alt: "Herbicides" },
// //     { icon: PlantGrowthIcon, name: "Plant Growth Regulators", alt: "Plant Growth Regulators" },
// //     { icon: FertilizerIcon, name: "Fertilizers", alt: "Fertilizers" }
// //   ];

// //   useEffect(() => {
// //     setIsLoading(true);
// //     const selectedCategory = productsData.categories.find(cat => cat.name === category);

// //     if (selectedCategory) {
// //       const enriched = selectedCategory.products.map((prod) => ({
// //         ...prod,
// //         image: getImageUrl(prod.image),
// //       }));
// //       setEnrichedProducts(enriched);
// //     } else {
// //       setEnrichedProducts([]);
// //     }
// //     setIsLoading(false);
// //   }, [category]);

// //   // Handle product click for modal
// //   const handleProductClick = (prodName) => {
// //     for (let cat of productsData.categories) {
// //       const found = cat.products.find(p => p.name === prodName);
// //       if (found) {
// //         setSelectedProduct({ ...found, image: getImageUrl(found.image) });
// //         return;
// //       }
// //     }
// //   };

// //   // Handle search results
// //   const handleSearch = (results) => {
// //     if (results) {
// //       // Add image URLs to search results
// //       const enrichedResults = results.map((prod) => {
// //         const imageUrl = getImageUrl(prod.image);
// //         return { ...prod, image: imageUrl };
// //       });
// //       setSearchResults(enrichedResults);
// //     } else {
// //       setSearchResults(null);
// //     }
// //   };

// //   // Determine which products to display (search results or category products)
// //   const displayProducts = searchResults || enrichedProducts;
// //   const isSearchActive = searchResults !== null;

// //   return (
// //     <>
// //       <MobileNavigation />
// //       <SlideNotification 
// //         message="Click the products to view more details." 
// //         duration={3000}
// //       />
// //       <div className="product-page-container">
// //         {/* Search Bar */}
// //         <SearchBar onSearch={handleSearch} />

// //         {/* Category icons */}
// //         {!isSearchActive && (
// //           <div className="category-icons">
// //             {categoryIcons.map((cat, index) => (
// //               <div 
// //                 key={index} 
// //                 className={`category-item ${category === cat.name ? 'active' : ''}`}
// //                 onClick={() => setCategory(cat.name)}
// //               >
// //                 <img src={cat.icon} alt={cat.alt} className="category-icon" />
// //               </div>
// //             ))}
// //           </div>
// //         )}

// //         {/* Search results indicator with styled heading */}
// //         {isSearchActive && (
// //           <div className="search-results-header">
// //             <h3>Search Results ({displayProducts.length} {displayProducts.length === 1 ? 'product' : 'products'} found)</h3>
// //           </div>
// //         )}

// //         {/* Products grid */}
// //         {isLoading ? (
// //           <div className="loading-container"><p>Loading products...</p></div>
// //         ) : displayProducts.length === 0 ? (
// //           <div className="no-products-message">
// //             <p>{isSearchActive ? "No products match your search" : "No products available in this category"}</p>
// //           </div>
// //         ) : (
// //           <div className="products-grid">
// //             {displayProducts.map((prod, idx) => (
// //               <ProductCard
// //                 key={idx}
// //                 product={prod}
// //                 onClick={() => handleProductClick(prod.name)}
// //                 showCategory={isSearchActive}
// //               />
// //             ))}
// //           </div>
// //         )}
// //       </div>

// //       {/* Render modal only if one is selected */}
// //       {selectedProduct && (
// //         <Modal 
// //           product={selectedProduct} 
// //           onClose={() => setSelectedProduct(null)} 
// //         />
// //       )}

// //       <Footer />
// //     </>
// //   );
// // };



// // export default ProductPage;

 
// // ProductPage.jsx with separate desktop search implementation
// import React, { useState, useEffect } from 'react';
// import ProductCard from '../components/ProductCard';
// import Modal from '../components/Modal';
// import Footer from '../components/Footer';
// import MobileNavigation from '../components/MobileNavigation';
// import SearchBar from '../components/SearchBar';
// import productsData from '../product.json';

// // Import category icons
// import InsecticideIcon from '../assets/Insecticide-tab.svg';
// import FungicideIcon from '../assets/Fungicide-tab.svg';
// import HerbicideIcon from '../assets/Herbicide-tab.svg';
// import PlantGrowthIcon from '../assets/Plant-growth-promoter.svg';
// import FertilizerIcon from '../assets/Fertilizer-tab.svg';
// import SlideNotification from '../components/SlideNotification';

// // Import Logo for mobile view
// import Logo from '../assets/logo.png'; // Make sure this path is correct for your logo

// import '../styles/pages/ProductPage.css';

// export const ProductPage = () => {
//   const [category, setCategory] = useState("Insecticides");
//   const [enrichedProducts, setEnrichedProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [selectedProduct, setSelectedProduct] = useState(null); // For Modal
//   const [searchResults, setSearchResults] = useState(null);

//   // Glob import for images
//   const productImages = import.meta.glob(
//     '../assets/Product/*.{png,jpg,jpeg,gif,svg}', 
//     { eager: true }
//   );

//   // Helper to find actual image URL
//   const getImageUrl = (filename) => {
//     if (!filename) return null;
//     const imageName = filename.split('/').pop();
//     for (let path in productImages) {
//       if (path.includes(imageName)) return productImages[path].default;
//     }
//     console.warn(`Image not found: ${imageName}`);
//     return null;
//   };

//   // Category icons array
//   const categoryIcons = [
//     { icon: InsecticideIcon, name: "Insecticides", alt: "Insecticides" },
//     { icon: FungicideIcon, name: "Fungicides", alt: "Fungicides" },
//     { icon: HerbicideIcon, name: "Herbicides", alt: "Herbicides" },
//     { icon: PlantGrowthIcon, name: "Plant Growth Regulators", alt: "Plant Growth Regulators" },
//     { icon: FertilizerIcon, name: "Fertilizers", alt: "Fertilizers" }
//   ];

//   useEffect(() => {
//     setIsLoading(true);
//     const selectedCategory = productsData.categories.find(cat => cat.name === category);

//     if (selectedCategory) {
//       const enriched = selectedCategory.products.map((prod) => ({
//         ...prod,
//         image: getImageUrl(prod.image),
//       }));
//       setEnrichedProducts(enriched);
//     } else {
//       setEnrichedProducts([]);
//     }
//     setIsLoading(false);
//   }, [category]);

//   // Handle product click for modal
//   const handleProductClick = (prodName) => {
//     for (let cat of productsData.categories) {
//       const found = cat.products.find(p => p.name === prodName);
//       if (found) {
//         setSelectedProduct({ ...found, image: getImageUrl(found.image) });
//         return;
//       }
//     }
//   };

//   // Handle search results
//   const handleSearch = (results) => {
//     if (results) {
//       // Add image URLs to search results
//       const enrichedResults = results.map((prod) => {
//         const imageUrl = getImageUrl(prod.image);
//         return { ...prod, image: imageUrl };
//       });
//       setSearchResults(enrichedResults);
//     } else {
//       setSearchResults(null);
//     }
//   };

//   // Determine which products to display (search results or category products)
//   const displayProducts = searchResults || enrichedProducts;
//   const isSearchActive = searchResults !== null;

//   return (
//     <>
//       <MobileNavigation />
//       <SlideNotification 
//         message="Click the products to view more details." 
//         duration={3000}
//       />
//       <div className="product-page-container">
//         {/* Mobile Logo and Search Bar Container - only shows on mobile */}
//         <div className="mobile-header">
//           <link to ='/'>
//             <div className="mobile-logo">
//               <img src={Logo} alt="Company Logo" />
//             </div>
//           </link>
         
//           <SearchBar onSearch={handleSearch} />
//         </div>

//         {/* Desktop Search Container - only shows on desktop */}
//         <div className="desktop-search-container">
//           <SearchBar onSearch={handleSearch} />
//         </div>

//         {/* Category icons */}
//         {!isSearchActive && (
//           <div className="category-icons">
//             {categoryIcons.map((cat, index) => (
//               <div 
//                 key={index} 
//                 className={`category-item ${category === cat.name ? 'active' : ''}`}
//                 onClick={() => setCategory(cat.name)}
//               >
//                 <img src={cat.icon} alt={cat.alt} className="category-icon" />
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Search results indicator with styled heading */}
//         {isSearchActive && (
//           <div className="search-results-header">
//             <h3>Search Results ({displayProducts.length} {displayProducts.length === 1 ? 'product' : 'products'} found)</h3>
//           </div>
//         )}

//         {/* Products grid */}
//         {isLoading ? (
//           <div className="loading-container"><p>Loading products...</p></div>
//         ) : displayProducts.length === 0 ? (
//           <div className="no-products-message">
//             <p>{isSearchActive ? "No products match your search" : "No products available in this category"}</p>
//           </div>
//         ) : (
//           <div className="products-grid">
//             {displayProducts.map((prod, idx) => (
//               <ProductCard
//                 key={idx}
//                 product={prod}
//                 onClick={() => handleProductClick(prod.name)}
//                 showCategory={isSearchActive}
//               />
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Render modal only if one is selected */}
//       {selectedProduct && (
//         <Modal 
//           product={selectedProduct} 
//           onClose={() => setSelectedProduct(null)} 
//         />
//       )}

//       <Footer />
//     </>
//   );
// };

// export default ProductPage;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Modal from '../components/Modal';
import Footer from '../components/Footer';
import MobileNavigation from '../components/MobileNavigation';
import SearchBar from '../components/SearchBar';
import productsData from '../product.json';

// Import category icons
import InsecticideIcon from '../assets/Insecticide-tab.svg';
import FungicideIcon from '../assets/Fungicide-tab.svg';
import HerbicideIcon from '../assets/Herbicide-tab.svg';
import PlantGrowthIcon from '../assets/Plant-growth-promoter.svg';
import FertilizerIcon from '../assets/Fertilizer-tab.svg';
import SlideNotification from '../components/SlideNotification';

// Import Logo for mobile view
import Logo from '../assets/logo.png'; // Make sure this path is correct for your logo

import '../styles/pages/ProductPage.css';

export const ProductPage = () => {
  const [category, setCategory] = useState("Insecticides");
  const [enrichedProducts, setEnrichedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null); // For Modal
  const [searchResults, setSearchResults] = useState(null);

  // Glob import for images
  const productImages = import.meta.glob(
    '../assets/Product/*.{png,jpg,jpeg,gif,svg}', 
    { eager: true }
  );

  // Helper to find actual image URL
  const getImageUrl = (filename) => {
    if (!filename) return null;
    const imageName = filename.split('/').pop();
    for (let path in productImages) {
      if (path.includes(imageName)) return productImages[path].default;
    }
    console.warn(`Image not found: ${imageName}`);
    return null;
  };

  // Category icons array
  const categoryIcons = [
    { icon: InsecticideIcon, name: "Insecticides", alt: "Insecticides" },
    { icon: FungicideIcon, name: "Fungicides", alt: "Fungicides" },
    { icon: HerbicideIcon, name: "Herbicides", alt: "Herbicides" },
    { icon: PlantGrowthIcon, name: "Plant Growth Regulators", alt: "Plant Growth Regulators" },
    { icon: FertilizerIcon, name: "Fertilizers", alt: "Fertilizers" }
  ];

  useEffect(() => {
    setIsLoading(true);
    const selectedCategory = productsData.categories.find(cat => cat.name === category);

    if (selectedCategory) {
      const enriched = selectedCategory.products.map((prod) => ({
        ...prod,
        image: getImageUrl(prod.image),
      }));
      setEnrichedProducts(enriched);
    } else {
      setEnrichedProducts([]);
    }
    setIsLoading(false);
  }, [category]);

  // Handle product click for modal
  const handleProductClick = (prodName) => {
    for (let cat of productsData.categories) {
      const found = cat.products.find(p => p.name === prodName);
      if (found) {
        setSelectedProduct({ ...found, image: getImageUrl(found.image) });
        return;
      }
    }
  };

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
      <SlideNotification 
        message="Click the products to view more details." 
        duration={3000}
      />
      <div className="product-page-container">
        {/* Mobile Logo and Search Bar Container - only shows on mobile */}
        <div className="mobile-header">
          <Link to="/">
            <div className="mobile-logo">
              <img src={Logo} alt="Company Logo" />
            </div>
          </Link>
         
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Desktop Search Container - only shows on desktop */}
        <div className="desktop-search-container">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Category icons */}
        {!isSearchActive && (
          <div className="category-icons">
            {categoryIcons.map((cat, index) => (
              <div 
                key={index} 
                className={`category-item ${category === cat.name ? 'active' : ''}`}
                onClick={() => setCategory(cat.name)}
              >
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
        ) : displayProducts.length === 0 ? (
          <div className="no-products-message">
            <p>{isSearchActive ? "No products match your search" : "No products available in this category"}</p>
          </div>
        ) : (
          <div className="products-grid">
            {displayProducts.map((prod, idx) => (
              <ProductCard
                key={idx}
                product={prod}
                onClick={() => handleProductClick(prod.name)}
                showCategory={isSearchActive}
              />
            ))}
          </div>
        )}
      </div>

      {/* Render modal only if one is selected */}
      {selectedProduct && (
        <Modal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}

      <Footer />
    </>
  );
};

export default ProductPage;