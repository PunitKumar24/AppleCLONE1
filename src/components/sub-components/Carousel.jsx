import React, { useState } from 'react';
import '../style/Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentIndex + 2) % images.length;
    setCurrentIndex(newIndex);

  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 2 + images.length) % images.length;
    setCurrentIndex(newIndex);

  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="slide-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={index === currentIndex ? 'slide active' : 'slide'}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '100%',
              transform: `translateX(${100 * (index - currentIndex)}%)`, // Adjusting the translateX value
            }}
          ></div>
        ))}
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? 'dot active-dot' : 'dot'}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Carousel;
