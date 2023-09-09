// import style from "./Card.module.css";
// import { Link } from "react-router-dom";
import Card from "../Card/Card";
const FirstCards = ({ dogs }) => {
  // console.log(dogs);
  return (
    <div>
      {dogs &&
        dogs.map((dog) => {
          if (dog.id <= 4) {
            return (
              <div key={dog.id}>
                <Card
                  name={dog.name}
                  life_span={dog.life_span}
                  weight={dog.weight}
                  temperament={dog.temperaments}
                  id={dog?.id}
                  image={dog?.image}
                />
              </div>
            );
          }
          return;
        })}
    </div>
  );
};

export default FirstCards;
