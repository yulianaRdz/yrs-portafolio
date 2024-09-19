import React from "react";

const Carousel = ({ items }) => {
  return (
    <div className="carousel-container">
      {items.map((item, index) => (
        <div key={index} className="carousel-item">
          {item.type === "image" ? (
            <img src={item.src} alt={`carousel-item-${index}`} className="w-full h-auto" />
          ) : (
            <video controls className="w-full h-auto">
              <source src={item.src} type="video/mp4" />
            </video>
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
