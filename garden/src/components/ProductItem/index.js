import React from "react";
import style from "./style.module.css";

export const ProductItem = ({ id, image, title, price, discont_price }) => {
  const discount = () => {
    return discont_price && Math.round((price / discont_price - 1) * 100);
  };
  return (
    <div className={style.container}>
        <img className={style.img} src={`http://localhost:3333${image}`} alt={title} />
        <div>
          {discont_price !== null ? (
            <div className={style.priceBox}>
              <h3>{discont_price}$</h3>
              <h3>{price}$</h3>
              <h3>{discount()}%</h3>
            </div>
          ) : (
            <h3>{price}$</h3>
          )}
        </div>
        <h6 className={style.h6}>{title}</h6>
    </div>
  );
};
