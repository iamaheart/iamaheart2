import Character from "./Character";
import "../styles/PixelCharacter.css";
import PixelTextProps from "../interfaces/PixelTextProps";

export default function PixelCharacter({ text, size, color }: PixelTextProps) {
  const arr = text.split("");
  return (
    <div className="container" style={{ gap: 10 }}>
      {arr.map((char: string, index: number) => (
        <Character num={char.charCodeAt(0)} size={size} key={index} />
      ))}
    </div>
  );
}
