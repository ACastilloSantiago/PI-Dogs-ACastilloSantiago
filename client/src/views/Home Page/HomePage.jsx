import CardContainer from "../../components/CardContainer/CardContainer";
import style from "./HomePage.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../redux/actions";
import { getTemperaments } from "../../redux/actions";
// import { getDogsByRaza } from "../../redux/actions";
import NavBar from "../../components/NavBar/NavBar";
const HomePage = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getDogs());
  // }, []);

  return (
    <div className={style.home}>
      <h1>Mostrando Home Page</h1>
      {/* <NavBar /> */}
      <CardContainer />
    </div>
  );
};
export default HomePage;
