import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation().pathname;

  return (
    <div className={style.mainContainer}>
      <Link to={"/"}>
        <img
          className={style.img}
          src="https://static.vecteezy.com/system/resources/previews/024/952/943/original/cute-dog-logo-in-flat-style-png.png"
          alt=""
        />
      </Link>
      {!location.includes("/home") && (
        <Link to="/home" className={style.link}>
          HOME
        </Link>
      )}
      <div className={style.SearchBar}>
        {!location.includes("/detail") && !location.includes("/creator") && (
          <SearchBar />
        )}
      </div>
      {!location.includes("/creator") && (
        <Link to="/creator">
          <img className={style.img} src="../../../public/new.png" alt="" />
        </Link>
      )}
    </div>
  );
};

export default NavBar;
