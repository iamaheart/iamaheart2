import React from "react";
import "../styles/MainPage.css";
import svgImage from "../assets/images/iamahe.art.svg";

export default function MainPage() {
  return (
    <div className="App">
      <img className="center-svg" src={svgImage} alt="SVG Image" />
    </div>
  );
}
