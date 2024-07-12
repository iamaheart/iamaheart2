import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LogoPage from "./pages/LogoPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogoPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
