import React from "react";
import style from "./style.module.css";
import plant from "../../images/plant.png";

export const SaleBanner = () => {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <h1 className={style.h1}>Sale</h1>
        <h2 className={style.h2}>New season</h2>
        <button className={style.button}>Sale</button>
      </div>
      <div className={style.imageContainer}>
        <img src={plant} alt="plant" />
      </div>
    </div>
  );
};
