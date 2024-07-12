// import { characters } from "../configs/characters";
// import {
//   ASCII_CHARACTER_MINUS_CODE,
//   DEFAULT_CHARACTER_HEIGHT,
// } from "../configs/configs";
// import "../styles/PixeWriting.css";
// import { PixelWritingProps } from "../interfaces/PixelWritingProps";

// function PixelCharacter({
//   str,
//   size = 1,
//   color = "#000000",
// }: PixelWritingProps) {
//   const arr = characters[str.charCodeAt(0) - ASCII_CHARACTER_MINUS_CODE];
//   const x = arr[0].length;
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox={`0 0 ${x} ${DEFAULT_CHARACTER_HEIGHT}`}
//       width={x * size}
//       height={DEFAULT_CHARACTER_HEIGHT * size}
//     >
//       {arr.map((row: number[], rowIndex: number) =>
//         row.map((cell: number, cellIndex: number) =>
//           cell ? (
//             <rect
//               key={`${rowIndex}-${cellIndex}`}
//               x={cellIndex} // 열(column) 위치
//               y={rowIndex} // 행(row) 위치
//               width="1"
//               height="1"
//               fill={color}
//             />
//           ) : null
//         )
//       )}
//     </svg>
//   );
// }

// function PixelWord({ str, size = 1, color = "#000000" }: PixelWritingProps) {
//   const arr = str.split("");
//   return (
//     <div className="pixel-word" style={{ gap: `${size * 2}px` }}>
//       {arr.map((char: string, index: number) => (
//         <PixelCharacter str={char} size={size} color={color} key={index} />
//       ))}
//     </div>
//   );
// }

// function PixelSentence({
//   str,
//   size = 1,
//   color = "#000000",
// }: PixelWritingProps) {
//   const arr = str.split(" ");
//   return (
//     <div className="pixel-sentence" style={{ gap: `${size * 6}px` }}>
//       {arr.map((word: string, index: number) => (
//         <PixelWord str={word} size={size} color={color} key={index} />
//       ))}
//     </div>
//   );
// }

// export default function PixelWriting({
//   str,
//   size = 1,
//   color = "#000000",
// }: PixelWritingProps) {
//   const arr = str.split("\n");
//   return (
//     <div className="pixel-writing" style={{ gap: `${size * 10}px` }}>
//       {arr.map((sentence: string, index: number) => (
//         <PixelSentence str={sentence} size={size} color={color} key={index} />
//       ))}
//     </div>
//   );
// }
