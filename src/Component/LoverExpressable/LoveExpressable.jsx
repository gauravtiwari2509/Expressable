import React, { useState, useEffect, useRef } from "react";

import "./LoveExpressable.css";

export default function LoveExpressable() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);


  const images = [
    "/photoGallery/",
    "/photoGallery/",
    "/photoGallery/",
    "/photoGallery/",
    "/photoGallery/",
    
  ];

  const nextImage = () => {
    setActiveImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setActiveImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
return(
    <>
     <div className="loveCard">
          <img
            src={images[activeImageIndex]}
            alt={`img${activeImageIndex + 1}`}
            className="loveCardCont"
          />
        
        
        <div className="navigationButtons">
          <button onClick={prevImage} className="cntrlBtn">
            Previous
          </button>
          <button onClick={nextImage} className="cntrlBtn">
            Next
          </button>
        </div>
        </div>
        </>
    );
}