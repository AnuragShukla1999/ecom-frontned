
// import React, { useState, useEffect } from 'react';

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const slides = [{
//     "slides": [
//       {
//         "src": "https://picsum.photos/seed/img1/600/400",
//         "alt": "Image 1 for carousel"
//       },
//       {
//         "src": "https://picsum.photos/seed/img2/600/400",
//         "alt": "Image 2 for carousel"
//       },
//       {
//         "src": "https://picsum.photos/seed/img3/600/400",
//         "alt": "Image 3 for carousel"
//       }
//     ]
//   }];

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
//     );
//   };

//   useEffect(() => {
//     const intervalId = setInterval(nextSlide, 2000);
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="relative w-full max-w-full mx-auto overflow-hidden">
//       <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//         {slides.map((slide, index) => (
//           <div key={index} className="flex-shrink-0 w-full h-64 bg-gray-300 flex items-center justify-center text-xl font-bold">
//             {slide}
//           </div>
//         ))}
//       </div>
//       <button
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
//         onClick={prevSlide}
//       >
//         &#10094;
//       </button>
//       <button
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
//         onClick={nextSlide}
//       >
//         &#10095;
//       </button>
//     </div>
//   );
// };

// export default Carousel;





import React, { useState, useEffect } from 'react';

const Carousel = () => {
  // Define slides as a nested array within an object
  const slideData = {
    "slides": [
      {
        "src": "https://media.istockphoto.com/id/1356333952/photo/young-healthy-woman-exercising-on-bicycle-in-public-park.jpg?s=2048x2048&w=is&k=20&c=E3q64wJZ73RiqaWghel5XR4YMp6qF43upwc_S3Kc0fU=",
        "alt": "Image 1 for carousel"
      },
      {
        "src": "https://media.istockphoto.com/id/477550084/photo/asian-girl-ride-bicycle.jpg?s=2048x2048&w=is&k=20&c=rlZMdCh9xGDxFMgHJcTCcvsIshIAkq6LFJjh46IND78=",
        "alt": "Image 2 for carousel"
      },
      {
        "src": "https://media.istockphoto.com/id/564575340/photo/smiling-young-girl-cycling-through-spring-woodland.jpg?s=2048x2048&w=is&k=20&c=sOVqqU_1BR9cTaq4A9FPsV9krTRkSmOvZHqLbb31uH4=",
        "alt": "Image 3 for carousel"
      }
    ]
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = slideData.slides; // Access the nested slides array

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
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full h-72 bg-gray-300 flex items-center justify-center">
            <img src={slide.src} alt={slide.alt} className="w-full h-full" />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
