import React from "react";
import { settings } from "../configs/settings";

const Palette = ({ onColorSelect }) => {
  const colors = settings.colors;

  return (
    <div className="palette">
      {Object.keys(colors).map((colorName) => (
        <div
          key={colorName}
          className="color"
          style={{ backgroundColor: colors[colorName] }}
          onClick={() => onColorSelect(colors[colorName])}
        ></div>
      ))}
      <div className="clear" onClick={() => onColorSelect("transparent")}>
        Clear
      </div>
    </div>
  );
};

export default Palette;
