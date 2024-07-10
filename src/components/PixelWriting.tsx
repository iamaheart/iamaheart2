// PixelText.tsx
import { characters } from "../configs/characters";
import {
  ASCII_CHARACTER_MINUS_CODE,
  DEFAULT_CHARACTER_HEIGHT,
} from "../configs/configs";
import CharacterProps from "../interfaces/CharacterProps";
import PixelTextProps from "../interfaces/PixelTextProps";
import "../styles/PixeWriting.css";

function PixelCharacter(props: CharacterProps) {
  const arr = characters[props.num - ASCII_CHARACTER_MINUS_CODE];
  const x = arr[0].length;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${x} ${DEFAULT_CHARACTER_HEIGHT}`}
      width={x * props.size}
      height={DEFAULT_CHARACTER_HEIGHT * props.size}
    >
      {arr.map((row: number[], rowIndex: number) =>
        row.map((cell: number, cellIndex: number) =>
          cell === 1 ? (
            <rect
              key={`${rowIndex}-${cellIndex}`}
              x={cellIndex} // 열(column) 위치
              y={rowIndex} // 행(row) 위치
              width="1"
              height="1"
              fill="black"
            />
          ) : null
        )
      )}
    </svg>
  );
}

function PixelSentence({ text, size, color }: PixelTextProps) {
  const arr = text.split("");
  return (
    <div className="pixel-sentence" style={{ display: "flex", gap: "10px" }}>
      {arr.map((char: string, index: number) => (
        <PixelCharacter num={char.charCodeAt(0)} size={size} key={index} />
      ))}
    </div>
  );
}

export default function PixelWriting({ text, size, color }: PixelTextProps) {
  const arr = text.split("\n");
  return (
    <div className="pixel-writing-container">
      {arr.map((str: string, index: number) => (
        <div key={index} className="pixel-writing-line">
          <PixelSentence text={str} size={size} color={color} />
        </div>
      ))}
    </div>
  );
}
