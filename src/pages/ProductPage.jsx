// // import React, { useState, useEffect } from 'react'; 
// // import Navbar from '../components/Navbar'; 
// // import InsecticideIcon from '../assets/Insecticides.svg'; 
// // import FungicideIcon from '../assets/Fungicides.svg'; 
// // import HerbicideIcon from '../assets/Herbicides.svg'; 
// // import PlantGrowthIcon from '../assets/PlantGrowth.svg'; 
// // import FertilizerIcon from '../assets/Fertilizer.svg'; 
// // import '../styles/pages/ProductPage.css'; 
// // import productsData from '../product.json'; 
// // import ProductCard from '../components/ProductCard'; 
// // import Footer from '../components/Footer'; 
// // import MobileNavigation from '../components/MobileNavigation';

// // // Import all product images statically
// // // This creates a mapping of all images in the Product directory
// // const productImages = import.meta.glob('../assets/Product/*.{png,jpg,jpeg,gif,svg}', { eager: true });

// // export const ProductPage = () => { 
// //   const [category, setCategory] = useState("Insecticides"); 
// //   const [enrichedProducts, setEnrichedProducts] = useState([]);
  
// //   // Select the products based on the category 
// //   const selectedCategory = productsData.categories.find(cat => cat.name === category);
  
// //   // Get the correct image URL from our imported images
// //   const getImageUrl = (filename) => {
// //     // Extract just the filename if it contains a path
// //     const imageName = filename.split('/').pop();
    
// //     // Look for the image in our imported images
// //     for (const path in productImages) {
// //       if (path.includes(imageName)) {
// //         return productImages[path].default;
// //       }
// //     }
    
// //     // Return a placeholder if image not found
// //     console.warn(`Image not found: ${imageName}`);
// //     return null;
// //   };
  
// //   // Update products with image URLs
// //   useEffect(() => { 
// //     if (selectedCategory) {
// //       const enriched = selectedCategory.products.map((prod) => {
// //         const imageUrl = getImageUrl(prod.image);
// //         return { ...prod, image: imageUrl };
// //       });
// //       setEnrichedProducts(enriched);
// //     }
// //   }, [category, selectedCategory]);
  
// //   return ( 
// //     <> 
// //       {/* Desktop navbar - will be hidden on mobile via CSS */} 
// //       <div className='navbar'> 
// //         {/* <Navbar /> */} 
// //       </div>
      
// //       {/* Using the dynamic MobileNavigation component */} 
// //       <MobileNavigation />
      
// //       <div className='product-page-container'> 
// //         <div className='category-icons'> 
// //           <img src={InsecticideIcon} onClick={() => setCategory("Insecticides")} alt="Insecticides" /> 
// //           <img src={FungicideIcon} onClick={() => setCategory("Fungicides")} alt="Fungicides" /> 
// //           <img src={HerbicideIcon} onClick={() => setCategory("Herbicides")} alt="Herbicides" /> 
// //           <img src={PlantGrowthIcon} onClick={() => setCategory("Plant Growth Regulators")} alt="Plant Growth Regulators" /> 
// //           <img src={FertilizerIcon} onClick={() => setCategory("Fertilizers")} alt="Fertilizers" /> 
// //         </div>
        
// //         <div className="products-grid"> 
// //           {enrichedProducts.length === 0 ? ( 
// //             <div className="no-products-message"> 
// //               <p>No products to display</p> 
// //             </div> 
// //           ) : ( 
// //             enrichedProducts.map((product, index) => ( 
// //               <ProductCard key={index} product={product} /> 
// //             ))
// //           )} 
// //         </div> 
// //       </div> 
// //       <Footer /> 
// //     </> 
// //   ); 
// // };

// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import ProductCard from '../components/ProductCard';
// import Footer from '../components/Footer';
// import MobileNavigation from '../components/MobileNavigation';

// // Import category icons
// import InsecticideIcon from '../assets/Insecticides.svg';
// import FungicideIcon from '../assets/Fungicides.svg';
// import HerbicideIcon from '../assets/Herbicides.svg';
// import PlantGrowthIcon from '../assets/PlantGrowth.svg';
// import FertilizerIcon from '../assets/Fertilizer.svg';

// // Import product data
// import productsData from '../product.json';

// // Import CSS styles
// import '../styles/pages/ProductPage.css';

// export const ProductPage = () => {
//   const [category, setCategory] = useState("Insecticides");
//   const [enrichedProducts, setEnrichedProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
  
//   // Product images dynamic import
//   const productImages = import.meta.glob('../assets/Product/*.{png,jpg,jpeg,gif,svg}', { eager: true });
  
//   // Helper function to get image URL
//   const getImageUrl = (filename) => {
//     if (!filename) return null;
    
//     // Extract just the filename if it contains a path
//     const imageName = filename.split('/').pop();
    
//     // Look for the image in imported images
//     for (const path in productImages) {
//       if (path.includes(imageName)) {
//         return productImages[path].default;
//       }
//     }
    
//     console.warn(`Image not found: ${imageName}`);
//     return null;
//   };
  
//   // Category icons array with handler
//   const categoryIcons = [
//     { icon: InsecticideIcon, name: "Insecticides", alt: "Insecticides" },
//     { icon: FungicideIcon, name: "Fungicides", alt: "Fungicides" },
//     { icon: HerbicideIcon, name: "Herbicides", alt: "Herbicides" },
//     { icon: PlantGrowthIcon, name: "Plant Growth Regulators", alt: "Plant Growth Regulators" },
//     { icon: FertilizerIcon, name: "Fertilizers", alt: "Fertilizers" }
//   ];
  
//   // Update products when category changes
//   useEffect(() => {
//     setIsLoading(true);
    
//     // Find the selected category in product data
//     const selectedCategory = productsData.categories.find(cat => cat.name === category);
    
//     if (selectedCategory) {
//       // Map products and add image URLs
//       const enriched = selectedCategory.products.map((prod) => {
//         const imageUrl = getImageUrl(prod.image);
//         return { ...prod, image: imageUrl };
//       });
      
//       setEnrichedProducts(enriched);
//     } else {
//       setEnrichedProducts([]);
//     }
    
//     setIsLoading(false);
//   }, [category]);
  
//   return (
//     <>
      
      
//       {/* Mobile navigation */}
//       <MobileNavigation />
      
//       <div className="product-page-container">
//         {/* Category icons */}
//         <div className="category-icons">
//           {categoryIcons.map((cat, index) => (
//             <div 
//               key={index} 
//               className={`category-icon-wrapper ${category === cat.name ? 'active' : ''}`}
//               onClick={() => setCategory(cat.name)}
//             >
//               <img src={cat.icon} alt={cat.alt} />
//             </div>
//           ))}
//         </div>
        
//         {/* Products grid */}
//         {isLoading ? (
//           <div className="loading-container">
//             <p>Loading products...</p>
//           </div>
//         ) : (
//           <div className="products-grid">
//             {enrichedProducts.length === 0 ? (
//               <div className="no-products-message">
//                 <p>No products available in this category</p>
//               </div>
//             ) : (
//               enrichedProducts.map((product, index) => (
//                 <ProductCard key={index} product={product} />
//               ))
//             )}
//           </div>
//         )}
//       </div>
      
//       {/* Footer */}
//       <Footer />
//     </>
//   );
// };

// export default ProductPage;

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import MobileNavigation from '../components/MobileNavigation';

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
  
  return (
    <>
      {/* Mobile navigation */}
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
          <div className="loading-container">
            <p>Loading products...</p>
          </div>
        ) : (
          <div className="products-grid">
            {enrichedProducts.length === 0 ? (
              <div className="no-products-message">
                <p>No products available in this category</p>
              </div>
            ) : (
              enrichedProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
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