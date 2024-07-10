import "../styles/MainPage.css";
import PixelWriting from "../components/PixelWriting";

export default function MainPage() {
  return (
    <div className="App">
      {/* <img className="center-svg" src={svgImage} alt="SVG Image" /> */}
      <div className="main-page">
        <PixelWriting
          text={
            '"I am a boy."\nHello World! I\'m fine thank you, and you?\nBlack pearl.'
          }
          size={5}
          color="#000000"
        />
      </div>
    </div>
  );
}
