import { characters } from "../configs/characters";
import {
  ASCII_CHARACTER_MINUS_CODE,
  DEFAULT_CHARACTER_HEIGHT,
  DEFAULT_PIXEL_FONT_PROPS,
} from "../configs/configs";
import styles from "../styles/PixeWriting.module.css";
import {
  PixelWritingProps,
  PixelContainerProps,
} from "../interfaces/PixelWritingProps";
import React from "react";

const PixelCharacter = React.memo((props: PixelWritingProps) => {
  const arr = characters[props.str.charCodeAt(0) - ASCII_CHARACTER_MINUS_CODE];
  const x = arr[0].length;
  const mergedFontProps = { ...DEFAULT_PIXEL_FONT_PROPS, ...props.fontProps };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${x} ${DEFAULT_CHARACTER_HEIGHT}`}
      width={x * mergedFontProps.size}
      height={DEFAULT_CHARACTER_HEIGHT * mergedFontProps.size}
    >
      {arr.map((row: number[], rowIndex: number) =>
        row.map((cell: number, cellIndex: number) =>
          cell ? (
            <rect
              key={`${rowIndex}-${cellIndex}`}
              x={cellIndex} // 열(column) 위치
              y={rowIndex} // 행(row) 위치
              width="1"
              height="1"
              fill={mergedFontProps.color}
            />
          ) : null
        )
      )}
    </svg>
  );
});

const PixelContainer = React.memo(
  ({
    elements,
    ElementComponent,
    fontProps,
    gapMultiplier,
    containerClass,
  }: PixelContainerProps) => {
    const mergedFontProps = { ...DEFAULT_PIXEL_FONT_PROPS, ...fontProps };
    return (
      <div
        className={containerClass}
        style={{ gap: `${mergedFontProps.size * gapMultiplier}px` }}
      >
        {elements.map((element, index) => (
          <ElementComponent
            str={element}
            fontProps={mergedFontProps}
            key={index}
          />
        ))}
      </div>
    );
  }
);

const PixelWord = React.memo((props: PixelWritingProps) => {
  const characters = props.str.split("");
  const GAP_MULTIPLIER = 2;
  const CONTAINER_CLASS = "pixel-word";
  const mergedFontProps = { ...DEFAULT_PIXEL_FONT_PROPS, ...props.fontProps };
  return (
    <PixelContainer
      elements={characters}
      ElementComponent={PixelCharacter}
      fontProps={mergedFontProps}
      gapMultiplier={GAP_MULTIPLIER}
      containerClass={CONTAINER_CLASS}
    />
  );
});

const PixelSentence = React.memo((props: PixelWritingProps) => {
  const words = props.str.split(" ");
  const GAP_MULTIPLIER = 6;
  const CONTAINER_CLASS = "pixel-sentence";
  const mergedFontProps = { ...DEFAULT_PIXEL_FONT_PROPS, ...props.fontProps };
  return (
    <PixelContainer
      elements={words}
      ElementComponent={PixelWord}
      fontProps={mergedFontProps}
      gapMultiplier={GAP_MULTIPLIER}
      containerClass={CONTAINER_CLASS}
    />
  );
});

export default function PixelWriting(props: PixelWritingProps) {
  const sentences = props.str.split("\n");
  const GAP_MULTIPLIER = 10;
  const CONTAINER_CLASS = "styles.pixel-writing";
  const mergedFontProps = { ...DEFAULT_PIXEL_FONT_PROPS, ...props.fontProps };
  return (
    <PixelContainer
      elements={sentences}
      ElementComponent={PixelSentence}
      fontProps={mergedFontProps}
      gapMultiplier={GAP_MULTIPLIER}
      containerClass={CONTAINER_CLASS}
    />
  );
}
