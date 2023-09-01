import style from "./Card.module.css";
import { Link } from "react-router-dom";
const Card = ({ name, life_span, weight, temperament, id }) => {
  return (
    <Link to={`/detail/${id}`} className={style.link}>
      <div className={style.mainCard}>
        <h1>Card</h1>
        <h2>Name: {name}</h2>
        <h2>Años de vida:{life_span}</h2>
        <h2>Peso: {weight}</h2>
        <h2>Temperamentos:{temperament}</h2>
      </div>
    </Link>
  );
};

export default Card;
