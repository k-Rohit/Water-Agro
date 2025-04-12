import React, { useEffect, useState } from 'react';
import img1 from '../assets/slide-1.jpg';
import img2 from '../assets/slide-2.jpg';
import img3 from '../assets/slide-3.jpg';
import img4 from '../assets/slide-4.jpg';
import img5 from '../assets/slide-5.jpg';
import img6 from '../assets/slide-6.jpg';
import '../styles/components/Slideshow.css';

const images = [img1, img2, img3, img4, img5, img6];

const captions = [
    "Farmer-Centric Support",
    "Young, Dynamic, and Future-Ready",
    "Transparent Practices",
    "Eco-Conscious",
    "Fast & Reliable Distribution",
    "Field-Focused Formulations",
];

const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
                setFade(true);
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slideshow-wrapper">
            <div className="slideshow-container">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className={`slideshow-image ${fade ? 'fade-in' : 'fade-out'}`}
                />
                <div className="slideshow-caption">
                    <span className="caption-text">{captions[currentIndex]}</span>
                </div>
            </div>
        </div>
    );
};

export default Slideshow;