import style from "./Detail.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Detail = () => {
  const [detail, setDetail] = useState([]);
  const { raza } = useParams();
  console.log(raza);
  useEffect(() => {
    axios(`http://localhost:3001/dogs/name?name=${raza}`).then(({ data }) => {
      console.log(data);

      // if (data.name) {
      setDetail(data);
      // } else {
      //   window.alert("No existe esta raza!");
      // }
      // return setDetail([]);

      // response.data
    });
  }, [raza]);
  // aca pongo en el update el raza para que si cambian en el link a raza se actualice
  console.log("asdas", detail);
  return (
    <div className={style.mainContenedor}>
      {detail.map((raza) => {
        console.log(raza);
        return (
          <div key={raza.id}>
            <h1>Detail</h1>
            <img src={raza?.image} alt={raza.name} className={style.image} />
            <h2>Nombre={raza.name}</h2>
            <h2>ID={raza.id}</h2>
            <h2>Altura={raza?.height}</h2>
            <h2>Peso={raza?.weight}</h2>
            <h2>Años de vida={raza.life_span}</h2>
            <h2>Temperamentos={raza.temperaments}</h2>
          </div>
        );
      })}
    </div>
  );
};
export default Detail;
