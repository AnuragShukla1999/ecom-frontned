import React, { useState, useEffect } from 'react';

const Carousel = () => {

  const slideData = {
    "slides": [
      {
        "src": "https://static.vecteezy.com/system/resources/thumbnails/011/871/820/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg",
        "alt": "Image 1 for carousel"
      },
      {
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AnwvYnSOF99BdW5RyMVie6dEcGrnU78VfXYEvP0M9XPZ5aqrui63XOa8lotfAWjn_A&usqp=CAU",
        "alt": "Image 2 for carousel"
      },
      {
        "src": "https://www.shutterstock.com/image-vector/ecommerce-website-banner-template-presents-260nw-2252124451.jpg",
        "alt": "Image 3 for carousel"
      }
    ]
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = slideData.slides;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-screen h-72 overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-screen h-full bg-gray-300 flex items-center justify-center overflow-hidden"
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
            />
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-300"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        &#10094;
      </button>

      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-300"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        &#10095;
      </button>
    </div>


  );
};

export default Carousel;
