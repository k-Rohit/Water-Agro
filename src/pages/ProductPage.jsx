import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import InsecticideIcon from '../assets/insecticides.svg';
import FungicideIcon from '../assets/fungicides.svg';
import HerbicideIcon from '../assets/herbicides.svg';
import PlantGrowthIcon from '../assets/plantgrowth.svg';
import FertilizerIcon from '../assets/fertilizer.svg';
import '../styles/pages/ProductPage.css';
import productsData from '../product.json';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

export const ProductPage = () => {
    const [category, setCategory] = useState("Insecticides");
    const [enrichedProducts, setEnrichedProducts] = useState([]);

    // Select the products based on the category
    const selectedCategory = productsData.categories.find(cat => cat.name === category);

    // Dynamic image loader function
    const getImageByFilename = async (filename) => {
        try {
            const image = await import(`../assets/Product/${filename}`);
            return image.default; // Return the image URL from the dynamic import
        } catch (e) {
            console.warn(`Image not found: ${filename}`);
            return null;
        }
    };

    // Enrich products with image URL
    useEffect(() => {
        if (selectedCategory) {
            const fetchImages = async () => {
                const enriched = await Promise.all(
                    selectedCategory.products.map(async (prod) => {
                        const image = await getImageByFilename(prod.image.split('/').pop());
                        return { ...prod, image };
                    })
                );
                setEnrichedProducts(enriched);
            };

            fetchImages();
        }
    }, [category, selectedCategory]);

    return (
        <>
            <div className='navbar'>
                <Navbar />
            </div>

            <div className='product-page-container'>
                <div className='category-icons'>
                    <img src={InsecticideIcon} onClick={() => setCategory("Insecticides")} alt="Insecticides" />
                    <img src={FungicideIcon} onClick={() => setCategory("Fungicides")} alt="Fungicides" />
                    <img src={HerbicideIcon} onClick={() => setCategory("Herbicides")} alt="Herbicides" />
                    <img src={PlantGrowthIcon} onClick={() => setCategory("Plant Growth Regulators")} alt="Plant Growth Regulators" />
                    <img src={FertilizerIcon} onClick={() => setCategory("Fertilizers")} alt="Fertilizers" />
                </div>

                <div className="products-grid">
                    {enrichedProducts.length === 0 ? (
                        <div className="no-products-message">
                            <p>No products to display</p>
                        </div>
                    ) : (
                        enrichedProducts.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))
                    )}
                </div>
            </div>
            <div className='footer-container'>
            <Footer/>
            </div>
        </>
    );
};
