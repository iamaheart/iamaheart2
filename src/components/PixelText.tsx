import PixelCharacter from "./PixelCharacter";

interface Props {
  text: string;
}

export default function PixelText({ text }: Props) {
  return (
    <div>
      <PixelCharacter text={text} />
    </div>
  );
}
