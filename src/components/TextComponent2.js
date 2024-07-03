import React, { useState } from "react";

export default function TextComponent2({ char, size }) {
  switch (char) {
    case "a":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3 5"
          width="300"
          height="500"
        >
          <rect x="0" y="2" width="1" height="1" fill="black" />

          <rect x="1" y="1" width="1" height="1" fill="black" />
          <rect x="1" y="3" width="1" height="1" fill="black" />

          <rect x="2" y="1" width="1" height="1" fill="black" />
          <rect x="2" y="2" width="1" height="1" fill="black" />
          <rect x="2" y="3" width="1" height="1" fill="black" />
        </svg>
      );
    case "b":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3 5"
          width="300"
          height="500"
        >
          <rect x="0" y="1" width="1" height="1" fill="black" />
          <rect x="0" y="2" width="1" height="1" fill="black" />
          <rect x="0" y="3" width="1" height="1" fill="black" />

          <rect x="1" y="2" width="1" height="1" fill="black" />

          <rect x="2" y="1" width="1" height="1" fill="black" />
        </svg>
      );
    case "c":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3 5"
          width="300"
          height="500"
        >
          <rect x="0" y="1" width="1" height="1" fill="black" />
          <rect x="0" y="2" width="1" height="1" fill="black" />
          <rect x="0" y="3" width="1" height="1" fill="black" />

          <rect x="1" y="2" width="1" height="1" fill="black" />

          <rect x="2" y="1" width="1" height="1" fill="black" />
        </svg>
      );
  }
}
