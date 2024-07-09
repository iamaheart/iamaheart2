import { characters } from "../configs/characters";
import {
  ASCII_CHARACTER_MINUS_CODE,
  DEFAULT_CHARACTER_HEIGHT,
} from "../configs/configs";
import CharacterProps from "../interfaces/CharacterProps";

export default function PixelCharacter(props: CharacterProps) {
  let num = props.num;
  // if (num >= 65 && num <= 90) {
  //   num = num + 32;
  // }
  const arr = characters[num - ASCII_CHARACTER_MINUS_CODE];
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
