import style from "./SearchBar.module.css";
import { useState } from "react";
const SearchBar = () => {
  const [raza, setRaza] = useState("");
  const handlerInput = (event) => {
    setRaza(event.target.value);
  };
  const Search = () => {};
  console.log(raza);
  return (
    <div className={style.mainContenedor}>
      <h1>SearchBar</h1>
      <input type="search" value={raza} onChange={handlerInput} />
      <button>Search</button>
    </div>
  );
};
export default SearchBar;
