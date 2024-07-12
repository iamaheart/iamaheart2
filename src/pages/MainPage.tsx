import styles from "../styles/MainPage.module.css";
import PixelWriting from "../components/PixelWriting";
import Logo from "../components/Logo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();
  const [haederName, setHeaderName] = useState("header");
  const [isMemu, setIsMemu] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div
          onClick={() => {
            navigate("/");
          }}
          style={{ cursor: "pointer" }}
        >
          <Logo multi={10} />
        </div>
        <div className={styles.pixelWriting}>
          <PixelWriting str={haederName} fontProps={{ size: 10 }} />
        </div>
      </div>
      <div className={styles.mainPage}></div>
    </div>
  );
}
