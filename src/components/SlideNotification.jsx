import React, { useEffect, useState } from 'react';
import '../styles/components/SlideNotification.css';

const SlideNotification = ({ message, duration = 5000, onClose }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const progressPercent = Math.min((elapsed / duration) * 100, 100);
      setProgress(progressPercent);

      if (progressPercent >= 100) {
        clearInterval(interval);
        setFadeOut(true);

        setTimeout(() => {
          setVisible(false);
          if (onClose) onClose();
        }, 500); // match fade duration
      }
    }, 50);

    return () => clearInterval(interval);
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <div className={`slide-notification ${fadeOut ? 'fade-out' : ''}`}>
      <p>
        <p> {message}</p>
      </p>
      <div className="progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
};

export default SlideNotification;
