import React, { useState, useEffect } from 'react';
import './slider.css';
import flowerImg from "../../assets/flower.jpg";
import flower from "../../assets/flower2.jpg";
import god from "../../assets/gods.jpg";
import boat from "../../assets/boat.avif";

const Slider = () => {
  const artworks = [
    { imageUrl: flowerImg, title: 'Flower', artist: 'Unknown' },
    { imageUrl: god, title: 'Gods', artist: 'Unknown' },
    { imageUrl: flower, title: 'flower', artist: 'Unknown' },
    { imageUrl: boat, title: 'pirates', artist: 'Unknown' }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? artworks.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === artworks.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slider">
      <div className="slider-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {artworks.map((artwork, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${artwork.imageUrl})` }}
          >
            {/* <div className="slide-content">
              <h3>{artwork.title}</h3>
              <p>{artwork.artist}</p>
            </div> */}
          </div>
        ))}
      </div>
      <div className="slider-controls hidden">
        <button className="prev-btn" onClick={handlePrev}>
          Prev
        </button>
        <button className="next-btn" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;