import style from "./FormPage.module.css";
import Form from "../../components/Form/Form";
import axios from "axios";
// import { postDog } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTemperaments } from "../../redux/actions";

const FormPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);
  const postDog = async (dog) => {
    const endpoint = `http://localhost:3001/dogs`;
    await axios.post(endpoint, dog);
  };
  return (
    <div className={style.form}>
      <h1>Mostrando Form Page</h1>

      <Form postDog={postDog} />
    </div>
  );
};
export default FormPage;
