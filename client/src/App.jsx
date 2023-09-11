import "./App.css";
import style from "./App.module.css";
import LandingPage from "./views/Landing Page/LandingPage";
import DetailPage from "./views/Detail Page/DetailPage";
import HomePage from "./views/Home Page/HomePage";
import FormPage from "./views/Form Page/FormPage";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDogs, getTemperaments } from "./redux/actions";

function App() {
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());

    // dispatch(getDogsByRaza(raza));
  }, [dispatch]); // se pone el dispatch en el array de depencia porque puede pasar que cargue de mala manera

  return (
    <div className={style.je}>
      {location !== "/" && <NavBar />}
      {/* <h1>Henry Dogs</h1> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/creator" element={<FormPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
