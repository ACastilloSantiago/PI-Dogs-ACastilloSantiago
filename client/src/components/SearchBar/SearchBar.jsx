import style from "./SearchBar.module.css";
import { useState } from "react";
import { getDogsByRaza } from "../../redux/actions";
import { useDispatch } from "react-redux";
// import { UseSelector } from "react-redux";
const SearchBar = () => {
  const [raza, setRaza] = useState("");
  const handlerInput = (event) => {
    setRaza(event.target.value);
  };
  const dispatch = useDispatch();
  const Search = (raza) => {
    // console.log(23, raza);
    dispatch(getDogsByRaza(raza));
  };
  console.log(raza);
  return (
    <div className={style.mainContenedor}>
      <h1>SearchBar</h1>
      <input type="search" value={raza} onChange={handlerInput} />
      <button
        onClick={() => {
          Search(raza);
        }}
      >
        Search
      </button>
    </div>
  );
};
export default SearchBar;
