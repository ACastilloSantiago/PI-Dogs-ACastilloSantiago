import CardContainer from "../../components/CardContainer/CardContainer";
import style from "./HomePage.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
const HomePage = () => {
  return (
    <div className={style.home}>
      <h1>Mostrando Home Page</h1>
      <SearchBar />
      <CardContainer />
    </div>
  );
};
export default HomePage;
