import style from "./FormPage.module.css";
import Form from "../../components/Form/Form";
const FormPage = () => {
  return (
    <div className={style.form}>
      <h1>Mostrando Form Page</h1>
      <Form />
    </div>
  );
};
export default FormPage;
