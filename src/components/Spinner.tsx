import React from "react";
import style from "./style/Spinner.module.css";

const Spinner = () => {
  return (
    <div className={style.Spinner_Container}>
      <div className={style.Spinner}></div>
    </div>
  );
};

export default Spinner;
