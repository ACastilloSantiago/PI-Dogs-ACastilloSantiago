// import "./App.css";
// import style from "./App.module.css";
import LandingPage from "./views/Landing Page/LandingPage";
import DetailPage from "./views/Detail Page/DetailPage";
import HomePage from "./views/Home Page/HomePage";
import FormPage from "./views/Form Page/FormPage";
import { Routes, Route, useLocation } from "react-router-dom";
function App() {
  const location = useLocation().pathname;
  const background =
    location === "/"
      ? "landing"
      : location === "/home"
      ? "home"
      : location === "/form"
      ? "form"
      : "creator";
  return (
    <div>
      {/* <h1>Henry Dogs</h1> */}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/creator" element={<FormPage />} />
        <Route path="/detail/:raza" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
