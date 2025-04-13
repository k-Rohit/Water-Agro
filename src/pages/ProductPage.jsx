// import React from 'react'
// import Navbar from '../components/Navbar'
// import InsecticideIcon from '../assets/insecticides.svg'
// import FungicideIcon from '../assets/fungicides.svg'
// import HerbicideIcon from '../assets/herbicides.svg'
// import PlantGrowthIcon from '../assets/plantgrowth.svg'
// import FertilizerIcon from '../assets/fertilizer.svg'
// import '../styles/pages/ProductPage.css'
// import { useState } from 'react'
// import products from '../product.json'



// export const ProductPage = () => {
//     const [category, setCategory] = useState("Insecticides");
//     return (
//         <>
//             <div className='navbar'>
//                 <Navbar />
//             </div>
//             <div className='product-page-container'>
//                 <div className='category-icons'>
//                     <img src={InsecticideIcon} onClick={() => setCategory("Insecticides")} />
//                     <img src={FungicideIcon} onClick={() => setCategory("Fungicides")} />
//                     <img src={HerbicideIcon} onClick={() => setCategory("Herbicides")} />
//                     <img src={PlantGrowthIcon} onClick={() => setCategory("Plant Growth Regulators")} />
//                     <img src={FertilizerIcon} onClick={() => setCategory("Fertilizers")} />


//                 </div>
//             </div>

//         </>
//     )
// }



import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import InsecticideIcon from '../assets/insecticides.svg';
import FungicideIcon from '../assets/fungicides.svg';
import HerbicideIcon from '../assets/herbicides.svg';
import PlantGrowthIcon from '../assets/plantgrowth.svg';
import FertilizerIcon from '../assets/fertilizer.svg';
import '../styles/pages/ProductPage.css';
import productsData from '../product.json';
import ProductCard from '../components/ProductCard';

export const ProductPage = () => {
  const [category, setCategory] = useState("Insecticides");

  const selectedCategory = productsData.categories.find(cat => cat.name === category);

  return (
    <>
      <div className='navbar'>
        <Navbar />
      </div>

      <div className='product-page-container'>
        <div className='category-icons'>
          <img src={InsecticideIcon} onClick={() => setCategory("Insecticides")} />
          <img src={FungicideIcon} onClick={() => setCategory("Fungicides")} />
          <img src={HerbicideIcon} onClick={() => setCategory("Herbicides")} />
          <img src={PlantGrowthIcon} onClick={() => setCategory("Plant Growth Regulators")} />
          <img src={FertilizerIcon} onClick={() => setCategory("Fertilizers")} />
        </div>

        <div className="products-grid">
          {selectedCategory?.products?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};
