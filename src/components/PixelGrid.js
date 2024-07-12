import React, { useState } from "react";

const PixelGrid = ({ selectedColor }) => {
  const [pixels, setPixels] = useState(Array(16 * 16).fill("#FFFFFF"));

  const handlePixelClick = (index) => {
    const newPixels = [...pixels];
    newPixels[index] = selectedColor;
    setPixels(newPixels);
  };

  return (
    <div className="grid">
      {pixels.map((color, index) => (
        <div
          key={index}
          className="pixel"
          style={{ backgroundColor: color }}
          onClick={() => handlePixelClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default PixelGrid;
