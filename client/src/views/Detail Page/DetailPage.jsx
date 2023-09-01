import style from "./DetailPage.module.css";
import Detail from "../../components/Detail/Detail";
const DetailPage = () => {
  return (
    <div className={style.detail}>
      <h1>Mostrando Detail Page</h1>
      <Detail />
    </div>
  );
};
export default DetailPage;
