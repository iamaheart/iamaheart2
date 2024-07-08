import PixelTextProps from "../interfaces/PixelTextProps";
import PixelCharacter from "./PixelCharacter";

export default function PixelText({ text, size, color }: PixelTextProps) {
  return (
    <div>
      <PixelCharacter text={text} size={size} color={color} />
    </div>
  );
}
