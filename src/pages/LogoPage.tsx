import "../styles/LogoPage.module.css";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";

export default function LogoPage() {
  const navigate = useNavigate();
  return (
    <div className="logo-container">
      <div
        className="logo"
        onClick={() => {
          navigate("/main");
        }}
        style={{ cursor: "pointer" }}
      >
        <Logo multi={10} />
      </div>
    </div>
  );
}
