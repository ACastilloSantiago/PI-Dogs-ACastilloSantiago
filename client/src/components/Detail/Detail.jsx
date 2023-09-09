import style from "./Detail.module.css";
import { useEffect, useState } from "react";

const Detail = ({ detail }) => {
  console.log(detail);
  // const [detalle, setDetalle] = useState({});
  // useEffect(() => {
  //   axios(`http://localhost:3001/dogs/name?name=${raza}`).then(({ data }) => {
  //     console.log(data);

  //     // if (data.name) {
  //     setDetail(data);
  //     // } else {
  //     //   window.alert("No existe esta raza!");
  //     // }
  //     // return setDetail([]);

  //     // response.data
  //   });
  // }, [raza]);

  // aca pongo en el update el raza para que si cambian en el link a raza se actualice
  // useEffect(() => {
  //   setDetalle(detail);
  //   console.log("se monto");
  //   return () => {
  //     setDetalle({});
  //     console.log("se desmonto el componente");
  //     console.log(detalle);
  //   };
  // }, [detail]);
  // console.log("Detail", detalle);
  console.log(detail.name);
  return (
    <div className={style.mainContenedor}>
      <div key={detail?.id}>
        <h1>Detail</h1>
        <img src={detail?.image} alt={detail?.name} className={style.image} />
        <h2>Nombre={detail?.name}</h2>
        <h2>ID={detail?.id}</h2>
        <h2>Altura={detail?.height}</h2>
        <h2>Peso={detail?.weight}</h2>
        <h2>Años de vida={detail?.life_span}</h2>
        <h2>Temperamentos={detail?.temperaments}</h2>
      </div>
    </div>
  );
};
export default Detail;
