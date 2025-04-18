import React from 'react';
import '../styles/components/ProductCard.css';

const ProductCard = ({ product, onClick }) => {
  const { name, image, description, price } = product;

  // take only the first 3 words for preview
  const words = description.split(/\s+/);
  const preview = words.length > 3
    ? words.slice(0, 3).join(' ') + '…'
    : description;

  const formattedPrice = price.includes('₹') 
    ? price 
    : `₹${price}`;

  return (
    <div className="card-wrapper" onClick={onClick}>
      <div className="product-card">
        <div className="product-image">
          {image 
            ? <img src={image} alt={name} /> 
            : <div className="placeholder-image">No image</div>}
        </div>
        <div className="product-info">
          <h3 className="product-name">{name}</h3>
          <p className="product-description">{preview}</p>  {/* ← sliced */}
          <p className="product-price">{formattedPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
