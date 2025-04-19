import React from 'react';
import '../styles/components/Modal.css';

const Modal = ({ product, onClose }) => {
  const { name, image, description, price } = product;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-container"
        onClick={e => e.stopPropagation()}  // prevent backdrop click
      >
        <div className="modal-content">
          <div className="modal-text">
            <h2>{name}</h2>
            {/* You now get the full description here */}
            <p className='description'><strong>Description:</strong> {description}</p>
            <p className="price">Price:{price}</p>
          </div>
          <div className="modal-image">
            {image && <img src={image} alt={name} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
