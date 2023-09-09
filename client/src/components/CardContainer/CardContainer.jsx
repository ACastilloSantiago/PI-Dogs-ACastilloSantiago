import Card from "../Card/Card";
import FirstCards from "../FirstCards/FirsCards";
import style from "./CardContainer.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { order, filter, reset } from "../../redux/actions";
import { useEffect, useState } from "react";
const CardContainer = () => {
  const dispatch = useDispatch();
  const temps = useSelector((state) => state.temps);
  const dogs = useSelector((state) => state.dogs_Show);

  // console.log("temps", temps);

  // console.log("Perros", dogs);
  const [aver, setAver] = useState(false);
  // !PAGINADO
  const DOGS_FOR_PAGE = 8;
  const [dogsP, setDogsP] = useState([...dogs].splice(0, DOGS_FOR_PAGE));

  useEffect(() => {
    setDogsP([...dogs].splice(0, DOGS_FOR_PAGE));
  }, [dogs]);
  console.log(dogs, dogsP);
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
  const handlerFilter = (event) => {
    console.log("sera?", event.target.value);
    dispatch(filter(event.target.value));
    setCurrentPage(0);
    setAver(false);
  };
  //!
  return (
    <div className={style.mainContainer}>
      <h1>Contenedor de Cards =</h1>
      <h2>Pagina= {currentPage}</h2>

      <div className={style.selects}>
        <select name="Filtrado" onChange={handlerFilter}>
          <option value="" className={style.selects} selected={aver}>
            Filtrado
          </option>
          <option value="Api">Api</option>
          <option value="DataBase">Base de datos</option>
          <optgroup label="Temperamentos">
            {temps.map((temp, index) => {
              // console.log(temp);
              return (
                <option value={temp.name} key={index}>
                  {temp.name}
                </option>
              );
            })}
          </optgroup>
        </select>
        <select name="Ordenamiento" onChange={handlerOrder}>
          <option value="" className={style.selects} selected={aver}>
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
        <button
          onClick={() => {
            setCurrentPage(0);
            dispatch(reset());
            setAver(true);
          }}
        >
          reset
        </button>
        <br />
      </div>
      {dogsP?.map((dog) => {
        console.log("holas", dog);
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
      <div>
        <button onClick={prevHandler}> Prev </button>
        <p>{currentPage}</p>
        <button onClick={nextHandler}>Next</button>
      </div>
    </div>
  );
};

export default CardContainer;
