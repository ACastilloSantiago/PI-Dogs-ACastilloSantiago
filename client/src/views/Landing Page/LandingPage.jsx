import style from "./LandingPage.module.css";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className={style.landing}>
      <h1>Mostrando Landing Page</h1>
      <Link to="/home" className={style.button}>
        Home
      </Link>
    </div>
  );
};
export default LandingPage;
