import React from 'react';
import '../styles/components/ProductCard.css';
import productImg from '../assets/bottle-photo.png'


const ProductCard = () => {
  return (
    <div class="card-wrapper">
    <div className="product-card">
      <div className="product-image">
        <img src={productImg} alt="Fertilizer" />
      </div>
      <div className="product-info">
        <p className="product-description">Some Fertilizer<br />Description</p>
        <p className="product-price">₹1,069</p>
      </div>
    </div>
    </div>
  );
};

export default ProductCard;
