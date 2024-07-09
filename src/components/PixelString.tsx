import "../styles/PixelString.css";
import PixelTextProps from "../interfaces/PixelTextProps";
import PixelCharacter from "./PixelCharacter";

export default function PixelString({ text, size, color }: PixelTextProps) {
  const arr = text.split("");
  return (
    <div className="pixel-text" style={{ gap: 10 }}>
      {arr.map((char: string, index: number) => (
        <PixelCharacter num={char.charCodeAt(0)} size={size} key={index} />
      ))}
    </div>
  );
}
