import React from "react";
import style from "./Loading.module.css";
const Loading = () => {
  return (
    <div>
      <img
        className={style.img}
        src="https://media.tenor.com/ImdaUDBgFEQAAAAd/what-loading.gif"
        alt="Loading"
      />
      {/* <button onClick={reset}>reset</button> */}
    </div>
  );
};

export default Loading;
