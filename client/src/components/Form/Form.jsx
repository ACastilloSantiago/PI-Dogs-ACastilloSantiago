import style from "./Form.module.css";
import { useState } from "react";
// import getTemperaments from "../../../../api/src/controllers/getTemperaments";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { postDog } from "../../redux/actions";
// import { useDispatch } from "react-redux";
const Form = () => {
  const temps = useSelector((state) => state.temps);
  const dispatch = useDispatch();
  const [selectedTemps, setSelectedTemps] = useState([]);
  //!!
  const [error, setError] = useState({
    name: "Su nombre no puede estar vacio!",
    // ,
    height_min: "Su altura minima no puede estar vacio!",
    height_max: "Su altura maxima no puede estar vacio!",
    weight_max: "Su peso maximo no puede estar vacio!",
    weight_min: "Su peso minimo no puede estar vacio!",
    life_span: "Su año de vida no puede estar vacio!",
    temps: "Su tempermaneto no puede estar vacio!",
    image: "Su URL no puede estar vacio!",
  });
  const validate = (data, name) => {
    console.log("validate", data);
    console.log("name", name);
    // console.log(data.name.length);

    //!NAME
    if (name === "name") {
      if (data.name) {
        setError({ ...error, name: "" });
      }
      if (/[0-9]/.test(data.name)) {
        setError({ ...error, name: "No puede ingresar numeros!" });
      }
      if (!/^\S/.test(data.name)) {
        console.log("si", data.name);
        setError({ ...error, name: "No puede comenzar con espacios vacios!" });
      }
      if (data.name.length > 35) {
        setError({ ...error, name: "La longitud maxima es 35!" });
      }
      if (!data.name) {
        setError({ ...error, name: "Su nombre no puede estar vacio! " });
      }
    }

    // //!Años de vida
    if (name === "life_span") {
      if (data.life_span) {
        setError({ ...error, [name]: "" });
      }
      // if (!/[0-9]/.test(data.life_span)) {
      //   setError({ ...error, [name]: "No puede ingresar letras!" });
      // }
      if (data.life_span.length > 8) {
        setError({ ...error, [name]: "La longitud maxima es 8!" });
      }
      if (!/^\S/.test(data.life_span)) {
        setError({
          ...error,
          [name]: "No puede comenzar con espacios vacios!",
        });
      }
      if (!data.life_span) {
        setError({ ...error, [name]: "Su año de vida no puede estar vacio!" });
      }
    }

    // //!Altura Maxx
    if (name === "height_max") {
      if (data.height_max) {
        setError({
          ...error,
          [name]: "",
        });
      }
      if (!/[0-9]/.test(data.height_max)) {
        setError({ ...error, [name]: "No puede ingresar letras!" });
      }

      if (!/^\S/.test(data.height_max)) {
        setError({
          ...error,
          [name]: "No puede comenzar con espacios vacios!",
        });
      }
      if (data.height_max.length > 4) {
        setError({ ...error, [name]: "La longitud maxima es 4!" });
      }

      if (!data.height_max) {
        setError({
          ...error,
          [name]: "Su altura maxima no pueden estar vacia!",
        });
      }
    }

    // //!Altura Min
    if (name === "height_min") {
      if (data.height_min) {
        setError({
          ...error,
          [name]: "",
        });
      }
      if (!/[0-9]/.test(data.height_min)) {
        setError({ ...error, [name]: "No puede ingresar letras!" });
      }

      if (!/^\S/.test(data.height_min)) {
        setError({
          ...error,
          [name]: "No puede comenzar con espacios vacios!",
        });
      }
      if (data.height_min.length > 4) {
        setError({ ...error, [name]: "La longitud minima es 4!" });
      }

      if (!data.height_min) {
        setError({
          ...error,
          [name]: "Su altura minima no pueden estar vacia!",
        });
      }
    }

    // //!peso Maxx
    if (name === "weight_max") {
      if (data.weight_max) {
        console.log("entre");
        setError({
          ...error,
          [name]: "",
        });
      }
      if (!/[0-9]/.test(data.weight_max)) {
        setError({ ...error, [name]: "No puede ingresar letras!" });
      }

      if (!/^\S/.test(data.weight_max)) {
        setError({
          ...error,
          [name]: "No puede comenzar con espacios vacios!",
        });
      }
      if (data.weight_max.length > 4) {
        setError({ ...error, [name]: "La longitud maxima es 4!" });
      }

      if (!data.weight_max) {
        setError({
          ...error,
          [name]: "Su peso maxima no pueden estar vacia!",
        });
      }
    }

    // //!peso Min
    if (name === "weight_min") {
      if (data.weight_min) {
        console.log("entre");
        setError({
          ...error,
          [name]: "",
        });
      }
      if (!/[0-9]/.test(data.weight_min)) {
        setError({ ...error, [name]: "No puede ingresar letras!" });
      }

      if (!/^\S/.test(data.weight_min)) {
        setError({
          ...error,
          [name]: "No puede comenzar con espacios vacios!",
        });
      }
      if (data.weight_min.length > 4) {
        setError({ ...error, [name]: "La longitud minima es 4!" });
      }

      if (!data.weight_min) {
        setError({
          ...error,
          [name]: "Su peso minima no pueden estar vacia!",
        });
      }
    }

    // //!url
    if (name === "image") {
      // if (data.image) {
      //   setError({ ...error, [name]: "" });
      // }
      if (
        /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g.test(
          data.image
        )
      ) {
        setError({ ...error, [name]: "" });
      }
      if (
        !/(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g.test(
          data.image
        )
      ) {
        setError({ ...error, [name]: "No es una url admitida" });
      }
      if (!/^\S/.test(data.image)) {
        setError({
          ...error,
          [name]: "No puede comenzar con espacios vacios!",
        });
      }
      if (!data.image) {
        setError({ ...error, [name]: "El URL no pueden estar vacio!" });
      }
    }
    //!temps
    if (name === "temps") {
      console.log(data);
      if (data.length) {
        setError({ ...error, temps: "" });
      }
      // if (/[0-9]/.test(data.temps)) {
      //   setError({ ...error, temps: "No puede ingresar numeros!" });
      // }
      // if (!/^\S/.test(data.temps)) {
      //   console.log("si", data.temps);
      //   setError({ ...error, temps: "No puede comenzar con espacios vacios!" });
      // }
      // if (data.temps.length > 35) {
      //   setError({ ...error, temps: "La longitud maxima es 35!" });
      // }
      if (!data.length) {
        setError({ ...error, temps: "Su temperamento no puede estar vacio! " });
      }
    }
  };
  //!!
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
    let name = event.target.name;
    let value = event.target.value;
    setDog({ ...dog, [name]: value });
    console.log("handler", { ...dog, [name]: value });
    validate({ ...dog, [name]: value }, name);
  };
  console.log(error);
  const handlerPreDog = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    console.log(name[0]);
    console.log(name);

    setPreDog({ ...preDog, [name]: value });
    validate({ ...preDog, [name]: value }, name);

    // setError(validate({ ...dog, [name]: value }));
  };
  const handlerTemps = (event) => {
    setSelectedTemps([...new Set([...selectedTemps, event.target.value])]);
    validate([...new Set([...selectedTemps, event.target.value])], "temps");

    console.log(selectedTemps);
    console.log(selectedTemps.join(", "));
    // setError(validate([...new Set([...selectedTemps, event.target.value])]));
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
    // console.log("eff", dog.temps);
    if (dog.temps) {
      dispatch(postDog(dog));
    }
  }, [dog]);
  const handlerDelete = (event) => {
    console.log(event.target.id);
    setSelectedTemps(selectedTemps.filter((temp) => temp !== event.target.id));
    validate(
      selectedTemps.filter((temp) => temp !== event.target.id),
      "temps"
    );
  };
  const disbleSend = () => {
    let send = true;
    for (let err in error) {
      if (error[err] === "") {
        send = false;
      } else {
        send = true;
        break;
      }
    }
    return send;
  };
  return (
    <div className={style.mainContenedor}>
      <h1>Form</h1>
      <form onSubmit={handlerSubmit}>
        <h2>Crear Dog</h2>
        <label htmlFor="">Nombre:</label>
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          value={dog.name}
          onChange={handlerDog}
        />
        <br />
        {error.name && <span>{error.name}</span>}
        <br />
        <label htmlFor="">Años de vida:</label>
        <input
          type="text"
          placeholder="10 - 20"
          name="life_span"
          value={dog.life_span}
          onChange={handlerDog}
        />
        <br />
        {error.life_span && <span>{error.life_span}</span>}

        <br />
        <label htmlFor="">Altura Max:</label>
        <input
          type="text"
          placeholder="30"
          name="height_max"
          onChange={handlerPreDog}
          value={preDog.height_max}
        />
        <br />
        {error.height_max && <span>{error.height_max}</span>}
        <br />
        <label htmlFor="">Altura Min:</label>
        <input
          type="text"
          placeholder="10"
          name="height_min"
          onChange={handlerPreDog}
          value={preDog.height_min}
        />
        <br />
        {error.height_min && <span>{error.height_min}</span>}
        <br />
        <label htmlFor="">Peso Max:</label>
        <input
          type="text"
          placeholder="6"
          name="weight_max"
          value={preDog.weight_max}
          onChange={handlerPreDog}
        />
        <br />
        {error.weight_max && <span>{error.weight_max}</span>}
        <br />

        <label htmlFor="">Peso Min:</label>
        <input
          type="text"
          placeholder="2"
          name="weight_min"
          value={preDog.weight_min}
          onChange={handlerPreDog}
        />
        <br />

        {error.weight_min && <span>{error.weight_min}</span>}
        <br />
        <label htmlFor="">URL de la Imagen:</label>
        <input
          type="text"
          placeholder="img.com"
          name="image"
          value={dog.image}
          onChange={handlerDog}
        />
        <br />

        {error.image && <span>{error.image}</span>}
        <br />
        <label htmlFor="">Seleccione temperamentos</label>
        <br />
        <select onChange={handlerTemps}>
          <option value="" selected>
            Temperamentos
          </option>
          {temps.map((temp) => {
            return (
              <option value={temp.name} key={temp.id}>
                {temp.name}
              </option>
            );
          })}
        </select>
        <br />
        {selectedTemps.length &&
          selectedTemps.map((temp, index) => (
            // {temp&& }
            <div key={index}>
              <span>{temp}</span>
              <button type="button" id={temp} onClick={handlerDelete}>
                x
              </button>
            </div>
          ))}
        {error.temps && <span>{error.temps}</span>}
        <br />

        <br />
        <button disabled={disbleSend()} type="submit">
          Crear
        </button>
      </form>
    </div>
  );
};
export default Form;
