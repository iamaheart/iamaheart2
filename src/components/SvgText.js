import React, { useState } from "react";

export default function SvgText() {
  const [input, setInput] = useState("");
  const [svgPaths, setSvgPaths] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setInput(value);

    const paths = value
      .split("")
      .map((char) => {
        const charCode = char.charCodeAt(0);
        // 알파벳 소문자 또는 공백인지 확인
        if ((charCode >= 97 && charCode <= 122) || charCode === 32) {
          return charCode;
        }
        return null;
      })
      .filter((code) => code !== null);

    setSvgPaths(paths);
  };

  const renderSvg = (charCode) => {
    try {
      const svg = require(`../assets/characters/${charCode}.svg`);
      return <img key={charCode} src={svg} alt={`SVG for ${charCode}`} />;
    } catch (error) {
      console.error(`Cannot find svg for charCode: ${charCode}`, error);
      return null;
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type lowercase alphabets"
      />
      <div>{svgPaths.map((code) => renderSvg(code))}</div>
    </div>
  );
}
