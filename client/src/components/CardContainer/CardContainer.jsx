import Card from "../Card/Card";
import FirstCards from "../FirstCards/FirsCards";
import style from "./CardContainer.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { order, filter, reset, tempFilter } from "../../redux/actions";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
const CardContainer = () => {
  const dispatch = useDispatch();
  const temps = useSelector((state) => state.temps);
  const dogs = useSelector((state) => state.dogs_Show);

  // console.log("temps", temps);

  // console.log("Perros", dogs);
  const [aver, setAver] = useState(false);
  // const [temp, setTemp] = useState("");
  // !PAGINADO
  const DOGS_FOR_PAGE = 8;
  const [dogsP, setDogsP] = useState([...dogs].splice(0, DOGS_FOR_PAGE));

  useEffect(() => {
    setDogsP([...dogs].splice(0, DOGS_FOR_PAGE));
  }, [dogs]);
  // console.log(dogs, dogsP);
  const [currentPage, setCurrentPage] = useState(0);
  const nextHandler = () => {
    const dogsIndex = dogs.length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * DOGS_FOR_PAGE;
    if (firstIndex >= dogsIndex) return;
    setDogsP([...dogs].splice(firstIndex, DOGS_FOR_PAGE));
    setCurrentPage(nextPage);
  };
  const prevHandler = () => {
    const prevPage = currentPage - 1;
    if (prevPage < 0) return;
    const firstIndex = prevPage * DOGS_FOR_PAGE;
    setDogsP([...dogs].splice(firstIndex, DOGS_FOR_PAGE));
    setCurrentPage(prevPage);
  };

  const handlerOrder = (event) => {
    dispatch(order(event.target.value));
    setCurrentPage(0);
    setAver(false);

    // setAux(!aux);
  };
  const [database, setDatabase] = useState(false);
  const handlerFilter = (event) => {
    // console.log("sera?", event.target.value);
    dispatch(filter(event.target.value));
    setCurrentPage(0);
    setAver(false);
    if (event.target.value === "DataBase") {
      setDatabase(!database);
    }
  };
  // let temp = "";
  const [temp, setTemp] = useState([]);
  const handlerTempFilter = (event) => {
    setTemp([...new Set([...temp, ` ${event.target.value}`])]);

    // setTemp([...temp, `${event.target.value}, `].join(""));
    console.log("test", [...new Set([...temp, ` ${event.target.value}`])]);
    dispatch(tempFilter(event.target.value));
    setCurrentPage(0);
    setAver(false);
  };
  const handlerDelete = (event) => {
    setTemp(temp.filter((temp) => temp !== event.target.id));
    console.log(temp.filter((temp) => temp !== event.target.id));
    dispatch(tempFilter(temp.filter((temp) => temp !== event.target.id)));
  };
  const handlerReset = () => {
    setCurrentPage(0);
    dispatch(reset());
    setAver(true);
    dispatch(tempFilter(""));
    setTemp("");
  };
  //!
  // console.log("base de datos", dogsP);
  if (!dogsP.length) {
    // console.log("database if", database);
    if (database) {
      return (
        <div>
          <img src="https://httpstatusdogs.com/img/404.jpg" alt="" />;
          <button onClick={handlerReset}>reset</button>
        </div>
      );
    } else {
      return (
        <div>
          <Loading />
          <button onClick={handlerReset}>reset</button>
        </div>
      );
    }
  } else {
    // console.log("cargue");
    return (
      <div className={style.mainContainer}>
        <div className={style.imgCardC}>
          <img src="../../../public/5.png" alt="" />
        </div>

        <div className={style.mainFiltros}>
          <h2>Filtros</h2>
          {/* <br /> */}
          <h2>Ordenamientos</h2>
        </div>
        <div className={style.filtro}>
          <h5>Origen</h5>

          <select name="Filtrado" onChange={handlerFilter}>
            <option value="" className={style} selected={aver}>
              Filtrado
            </option>
            <option value="Api">Api</option>
            <option value="DataBase">Base de datos</option>
          </select>
          <h5>Temperamentos</h5>

          <select
            name="Filtrado De Temperamentos"
            onChange={handlerTempFilter}
            // multiple
          >
            <option value="" className={style} selected={aver}>
              Filtrado de Temperamentos
            </option>
            {/* <optgroup label="Temperamentos"> */}
            {temps.map((temp, index) => {
              // console.log(temp);
              return (
                <option value={temp.name} key={index}>
                  {temp.name}
                </option>
              );
            })}
            {/* </optgroup> */}
          </select>
          {temp.length &&
            temp.map((temp, index) => {
              console.log("prueba", temp);
              return (
                <div key={index}>
                  <span>{temp}</span>
                  <button type="button" id={temp} onClick={handlerDelete}>
                    x
                  </button>
                </div>
              );
            })}
        </div>
        <div>
          <select name="Ordenamiento" onChange={handlerOrder}>
            <option value="" className={style} selected={aver}>
              Ordenamiento
            </option>
            <optgroup label="Raza">
              <option value="RazaA">Ascendente</option>
              <option value="RazaB">Descendente</option>
            </optgroup>
            <optgroup label="Peso">
              <option value="PesoA">Ascendente</option>
              <option value="PesoB">Descendente</option>
            </optgroup>
          </select>
        </div>
        <div>
          <button onClick={handlerReset}>reset</button>
        </div>
        {/* <br /> */}

        <div className={style.Cards}>
          {dogsP?.map((dog) => {
            // console.log("holas", dog);
            return (
              <div key={dog.id}>
                <Card
                  name={dog.name}
                  life_span={dog.life_span}
                  weight={dog.weight}
                  temperament={dog.temperaments}
                  id={dog.id}
                  image={dog.image}
                />
              </div>
            );
          })}
        </div>
        <div className={style.paginado}>
          <button onClick={prevHandler}> Prev </button>
          <p>{currentPage}</p>
          <button onClick={nextHandler}>Next</button>
        </div>
      </div>
    );
  }
};

export default CardContainer;
