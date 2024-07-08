import React from "react";
import "../styles/MainPage.css";
import svgImage from "../assets/images/iamahe.art.svg";
import PixelText from "../components/PixelText";

export default function MainPage() {
  return (
    <div className="App">
      <img className="center-svg" src={svgImage} alt="SVG Image" />
      <PixelText text={"!@#$%^&*()_+{}<>?"} size={5} color="#000000" />
      <PixelText text={"ABCDEFGHIJKLMNOPQRSTUVWXYZ"} size={5} color="#000000" />
      <PixelText text={"1234567890"} size={5} color="#000000" />
      <PixelText text={"abcdefghijklmnopqrstuvwxyz"} size={5} color="#000000" />
      <p>dsfdsfsdfgjfsdjgkjdfsl;</p>
    </div>
  );
}
