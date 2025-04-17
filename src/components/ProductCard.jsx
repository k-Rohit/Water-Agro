// import React from 'react';
// import '../styles/components/ProductCard.css';

// const ProductCard = ({ product }) => {
//   const { name, image, description, price } = product;

//   // Use only the first line or sentence for a preview
//   const shortDescription = description?.split('\n')[0];

//   return (
//     <div className="card-wrapper">
//       <div className="product-card">
//         <div className="product-image">
//           <img src={image} alt={name} />
//         </div>
//         <div className="product-info">
//           <p className="product-name">{name}</p>
//           <p className="product-description">{shortDescription}</p>
//           <p className="product-price">{price}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

import React from 'react';
import '../styles/components/ProductCard.css';


const ProductCard = ({ product }) => {
  const { name, image, description, price } = product;

  // Get first line of description for preview
  const shortDescription = description?.split('\n')[0];
  
  // Check if price includes currency symbol, add if not
  const formattedPrice = price?.toString().includes('₹') ? price : `₹${price}`;

  return (
    <div className="card-wrapper">
      <div className="product-card">
        <div className="product-image">
          {image ? (
            <img src={image} alt={name} />
          ) : (
            <div className="placeholder-image">No image</div>
          )}
        </div>
        <div className="product-info">
          <h3 className="product-name">{name}</h3>
          <p className="product-description">{shortDescription}</p>
          <p className="product-price">{formattedPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
