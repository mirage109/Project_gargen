import React from "react";
import style from "./style.module.css";
import gnom from "../../images/gnom.png";

export const GetDiscount = () => {
  return (
    <div className={style.getDiscount}>
      <div className={style.getDiscountImage}>
        <img src={gnom} alt="getDiscount" />
      </div>
      <div className={style.getDiscountForm}>
        <h2 className={style.h2}>5% off</h2>
        <p className={style.p}>on the first order</p>
        <form className={style.form}>
          <input className={style.input} type="text" placeholder="+49" />
          <button className={style.button}>Get a discount</button>
        </form>
      </div>
    </div>
  );
};
