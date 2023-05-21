import React, { useState } from "react";
import "../styling/Slider.css";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  const cards = [
    {
      id: 1,
      title: "Card 1",
      imageURL: "https://example.com/card1-image.jpg",
      lines: ["Line 1", "Line 2", "Line 3"],
    },
    {
      id: 2,
      title: "Card 2",
      imageURL: "https://example.com/card2-image.jpg",
      lines: ["Line 1", "Line 2", "Line 3"],
    },
    {
      id: 3,
      title: "Card 3",
      imageURL: "https://example.com/card3-image.jpg",
      lines: ["Line 1", "Line 2", "Line 3"],
    },
  ];

  return (
    <div className="slider">
      <div className="slider-arrows">
        <button className="prev-arrow" onClick={handlePrevSlide}>
          &lt;
        </button>
        <button className="next-arrow" onClick={handleNextSlide}>
          &gt;
        </button>
      </div>
      <div className="card-container">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`card ${index === currentIndex ? "active" : ""}`}
          >
            <div className="card-title">{card.title}</div>
            <div className="picture-frame">
              <img src={card.imageURL} alt={card.title} />
            </div>
            {card.lines.map((line, lineIndex) => (
              <div key={lineIndex} className="text-line">
                {line}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
