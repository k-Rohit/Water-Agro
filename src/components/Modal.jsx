import React from 'react';
import '../styles/components/Modal.css';

const Modal = ({ product, onClose }) => {
  if (!product) return null;

  const {
    name,
    image,
    description,
    price,
    "Technical Name": technicalName,
    "Best Used In": bestUsedIn,
    "Defends Against": defendsAgainst,
    "Dose/Acre": doseAcre,
    "Packaging Options:": packaging,
    "Stage-Wise Foliar Dosage": stageWiseDosage
  } = product;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-container"
        onClick={e => e.stopPropagation()} // prevent backdrop click
      >
        <div className="modal-content">
          <div className="modal-text">
            <h2>{name}</h2>

            {description && (
              <p><strong>Description:</strong> {description}</p>
            )}

            {technicalName && (
              <p><strong>Technical Name:</strong> {technicalName}</p>
            )}

            {bestUsedIn && (
              <p><strong>Best Used In:</strong> {bestUsedIn}</p>
            )}

            {defendsAgainst && (
              <p><strong>Defends Against:</strong> {defendsAgainst}</p>
            )}

            {doseAcre && (
              <p><strong>Dose/Acre:</strong> {doseAcre}</p>
            )}

            {stageWiseDosage && (
              <div>
                <strong>Stage-Wise Foliar Dosage:</strong>
                <ul>
                  {Object.entries(stageWiseDosage).map(([stage, dosage]) => (
                    <li key={stage}><strong>{stage}:</strong> {dosage}</li>
                  ))}
                </ul>
              </div>
            )}

            {packaging && (
              <p><strong>Packaging Options:</strong> {packaging}</p>
            )}

            {/* {price && (
              <p><strong>Price:</strong> {price}</p>
            )} */}
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
