import style from "./Form.module.css";

const Form = () => {
  return (
    <div className={style.mainContenedor}>
      <h1>Form</h1>
      <form action="">
        <h2>Crear Dog</h2>
        <label htmlFor="">Nombre:</label>
        <input type="text" placeholder="Ingresar nombre" />
        <br />
        <label htmlFor="">Altura:</label>
        <input type="text" placeholder="Ingresar altura" />
        <br />
        <label htmlFor="">Peso:</label>
        <input type="text" placeholder="Ingresar peso" />
        <br />
        <label htmlFor="">Años de vida:</label>
        <input type="text" placeholder="Ingresar años de vida" />
        <br />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};
export default Form;
