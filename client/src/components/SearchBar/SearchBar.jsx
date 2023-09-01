import style from "./SearchBar.module.css";
const SearchBar = () => {
  return (
    <div className={style.mainContenedor}>
      <h1>SearchBar</h1>
      <input type="search" />
      <button>Search</button>
    </div>
  );
};
export default SearchBar;