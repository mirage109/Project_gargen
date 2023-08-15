import React from "react";
import style from "./style.module.css";
import cart from "../../images/emptyCart.png";
import { NavLink } from "react-router-dom";

export const BasketEmpty = () => {
  return (
    <div className={style.container}>
      <p className={style.p}>Your shopping cart is empty</p>
      <img src={cart} alt="empty-cart" />
      <NavLink to="/category">
     <p className={`${style.p} ${style.isDecoreted}`}>Continue shopping </p>
     </NavLink>
    </div>
  );
};
