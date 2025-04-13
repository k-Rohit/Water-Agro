import React from 'react';
import '../styles/components/ProductCard.css';

const ProductCard = ({ product }) => {
  const { name, image, description, price } = product;

  // Use only the first line or sentence for a preview
  const shortDescription = description?.split('\n')[0];

  return (
    <div className="card-wrapper">
      <div className="product-card">
        <div className="product-image">
          <img src={image} alt={name} />
        </div>
        <div className="product-info">
          <p className="product-name">{name}</p>
          <p className="product-description">{shortDescription}</p>
          <p className="product-price">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
