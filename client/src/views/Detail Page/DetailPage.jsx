import style from "./DetailPage.module.css";
import Detail from "../../components/Detail/Detail";
import { useParams } from "react-router-dom";
const DetailPage = () => {
  // const { id } = useParams();
  return (
    <div className={style.detail}>
      <h1>Mostrando Detail Page</h1>
      {/* <h2>id {id}</h2> */}
      <Detail />
    </div>
  );
};
export default DetailPage;
