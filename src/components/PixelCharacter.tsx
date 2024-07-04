import Character from "./Character";
import "../styles/PixelCharacter.css";

interface Props {
  text: string;
}

export default function PixelCharacter({ text }: Props) {
  const arr = text.split("");
  return (
    <div className="container" style={{ gap: 10 }}>
      {arr.map((char: string, index: number) => (
        <Character num={char.charCodeAt(0)} size={10} />
      ))}
    </div>
  );
}
