// import { characters } from "../configs/characters";
// import {
//   ASCII_CHARACTER_MINUS_CODE,
//   DEFAULT_CHARACTER_HEIGHT,
// } from "../configs/configs";
// import "../styles/PixeWriting.css";
// import { PixelWritingProps } from "../interfaces/PixelWritingProps";

// function PixelCharacter({ str, size = 1, color }: PixelWritingProps) {
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

// function PixelContainer({
//   elements,
//   ElementComponent,
//   size,
//   color,
//   gapMultiplier,
//   containerClass,
// }: {
//   elements: string[];
//   ElementComponent: any;
//   size: number;
//   color: string;
//   gapMultiplier: number;
//   containerClass: string;
// }) {
//   return (
//     <div
//       className={containerClass}
//       style={{ gap: `${size * gapMultiplier}px` }}
//     >
//       {elements.map((element, index) => (
//         <ElementComponent str={element} size={size} color={color} key={index} />
//       ))}
//     </div>
//   );
// }

// function PixelWord({ str, size = 1, color = "#000000" }: PixelWritingProps) {
//   const characters = str.split("");
//   return (
//     <PixelContainer
//       elements={characters}
//       ElementComponent={PixelCharacter}
//       size={size}
//       color={color}
//       gapMultiplier={2}
//       containerClass="pixel-word"
//     />
//   );
// }

// function PixelSentence({
//   str,
//   size = 1,
//   color = "#000000",
// }: PixelWritingProps) {
//   const words = str.split(" ");
//   return (
//     <PixelContainer
//       elements={words}
//       ElementComponent={PixelWord}
//       size={size}
//       color={color}
//       gapMultiplier={6}
//       containerClass="pixel-sentence"
//     />
//   );
// }

// export default function PixelWriting({
//   str,
//   size = 1,
//   color = "#000000",
// }: PixelWritingProps) {
//   const sentences = str.split("\n");
//   return (
//     <PixelContainer
//       elements={sentences}
//       ElementComponent={PixelSentence}
//       size={size}
//       color={color}
//       gapMultiplier={10}
//       containerClass="pixel-writing"
//     />
//   );
// }
