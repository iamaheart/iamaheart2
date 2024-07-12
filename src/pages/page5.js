import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import SelectedColor from "../components/selectedColor";
import Palette from "../components/Palette";
import PixelGrid from "../components/PixelGrid";
import { settings } from "../configs/settings";

const Page5 = () => {
  const [selectedColor, setSelectedColor] = useState("#FF0000");

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      if (key in settings.keyBindings) {
        setSelectedColor(settings.colors[settings.keyBindings[key]]);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="App">
      <SelectedColor color={selectedColor} />
      <Palette onColorSelect={handleColorSelect} />
      <PixelGrid selectedColor={selectedColor} />
    </div>
  );
};

export default Page5;
