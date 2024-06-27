import React from "react";

const SelectedColor = ({ color }) => {
  return (
    <div
      id="currentColor"
      style={{
        backgroundColor: color === "transparent" ? "#FFFFFF" : color,
        opacity: color === "transparent" ? 0.5 : 1,
      }}
    ></div>
  );
};

export default SelectedColor;
