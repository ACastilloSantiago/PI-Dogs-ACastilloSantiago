import style from "./Form.module.css";
import { useState } from "react";
// import getTemperaments from "../../../../api/src/controllers/getTemperaments";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { useDispatch } from "react-redux";
const Form = ({ postDog }) => {
  const temps = useSelector((state) => state.temps);

  const [selectedTemps, setSelectedTemps] = useState([]);

  const [dog, setDog] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    temps: "",
    image: "",
  });
  const [preDog, setPreDog] = useState({
    height_min: "",
    height_max: "",
    weight_max: "",
    weight_min: "",
  });
  const handlerDog = (event) => {
    let name = [event.target.name];
    let value = event.target.value;
    setDog({ ...dog, [name]: value });
  };
  const handlerPreDog = (event) => {
    let name = [event.target.name];
    let value = event.target.value;
    console.log(name[0]);
    console.log(name);

    setPreDog({ ...preDog, [name]: value });
  };
  const handlerTemps = (event) => {
    setSelectedTemps([...new Set([...selectedTemps, event.target.value])]);
    console.log(selectedTemps);
    console.log(selectedTemps.join(", "));
  };
  const handlerSubmit = (event) => {
    event.preventDefault();
    const dogg = {
      height: `${preDog.height_min}-${preDog.height_max}`,
      weight: `${preDog.weight_min}-${preDog.weight_max}`,
    };
    setDog({
      ...dog,
      height: dogg.height,
      weight: dogg.weight,
      temps: selectedTemps.join(", "),
    });
    console.log(dog);
    // dog && postDog(dog);
  };
  useEffect(() => {
    if (dog.temps) {
      postDog(dog);
    }
  }, [dog]);
  return (
    <div className={style.mainContenedor}>
      <h1>Form</h1>
      <form onSubmit={handlerSubmit}>
        <h2>Crear Dog</h2>
        <label htmlFor="">Nombre:</label>
        <input
          type="text"
          placeholder="Ingresar nombre"
          name="name"
          value={dog.name}
          onChange={handlerDog}
        />
        <br />

        <label htmlFor="">Años de vida:</label>
        <input
          type="text"
          placeholder="Ingresar años de vida"
          name="life_span"
          value={dog.life_span}
          onChange={handlerDog}
        />
        <br />
        <label htmlFor="">Altura Max:</label>
        <input
          type="text"
          placeholder="Ingresar altura"
          name="height_max"
          onChange={handlerPreDog}
          value={preDog.height_max}
        />
        <br />
        <label htmlFor="">Altura Min:</label>
        <input
          type="text"
          placeholder="Ingresar altura"
          name="height_min"
          onChange={handlerPreDog}
          value={preDog.height_min}
        />
        <br />
        <label htmlFor="">Peso Max:</label>
        <input
          type="text"
          placeholder="Ingresar peso"
          name="weight_max"
          value={preDog.weight_max}
          onChange={handlerPreDog}
        />
        <br />
        <label htmlFor="">Peso Min:</label>
        <input
          type="text"
          placeholder="Ingresar peso"
          name="weight_min"
          value={preDog.weight_min}
          onChange={handlerPreDog}
        />
        <br />
        <label htmlFor="">URL de la Imagen:</label>
        <input
          type="text"
          placeholder="Ingresar URL de la Imagen"
          name="image"
          value={dog.image}
          onChange={handlerDog}
        />
        <br />
        <label htmlFor="">Seleccione temperamentos</label>
        <br />
        <select onChange={handlerTemps} multiple className={style.selected}>
          {temps.map((temp) => {
            return (
              <option value={temp.name} key={temp.id}>
                {temp.name}
              </option>
            );
          })}
        </select>
        <br />
        <div>{<span> {selectedTemps.join(", ")} </span>}</div>
        <br />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};
export default Form;
