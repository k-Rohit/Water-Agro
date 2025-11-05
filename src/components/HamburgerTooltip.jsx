import React, { useState, useEffect } from 'react';
import '../styles/components/HamburgerTooltip.css';

const HamburgerTooltip = () => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    visible && (
      <div className="hamburger-tooltip">
        <div className="hamburger-tooltip-arrow"></div>
        <div className="hamburger-tooltip-content">
          <p>Menu is here! Tap to access all pages</p>
          <button className="hamburger-tooltip-close" onClick={handleClose}>×</button>
        </div>
      </div>
    )
  );
};

export default HamburgerTooltip;