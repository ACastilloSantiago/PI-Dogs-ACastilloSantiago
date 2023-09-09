import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation().pathname;

  return (
    <div className={style.mainContainer}>
      <h1>NavBar</h1>
      {!location.includes("/detail") && !location.includes("/creator") && (
        <SearchBar />
      )}
      {!location.includes("/creator") && (
        <Link to="/creator" className={style.link}>
          FORM
        </Link>
      )}

      {!location.includes("/home") && (
        <Link to="/home" className={style.link}>
          HOME
        </Link>
      )}
    </div>
  );
};

export default NavBar;
