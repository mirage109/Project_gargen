import React from "react";
import style from "./style.module.css";
import cart from "../../images/emptyCart.png";

export const BasketEmpty = () => {
  return (
    <div className={style.container}>
      <p className={style.p}>Your shopping cart is empty</p>
      <img src={cart} alt="empty-cart" />
     <p className={style.p}>Continue shopping</p>
    </div>
  );
};
