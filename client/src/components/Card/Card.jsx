import style from "./Card.module.css";
import { Link } from "react-router-dom";
const Card = ({ name, life_span, weight, temperament, id, image }) => {
  // console.log(name);
  return (
    <div>
      <Link to={`/detail/${id}`} className={style.link}>
        <div className={style.mainCard} key={id}>
          <h1>Card</h1>
          <img src={image} alt={name} className={style.image} />
          <h2>Nombre: {name}</h2>
          <h2>Años de vida: {life_span}</h2>
          <h2>Peso: {weight}</h2>
          <h2>Temperamentos: {temperament}</h2>
        </div>
      </Link>
    </div>
  );
};

export default Card;
