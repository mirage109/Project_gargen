import React from "react";
import { useSelector } from "react-redux";
import style from "./style.module.css";

export const OrderDetail = () => {
    const basketProducts = useSelector(state => state.basket.products);
    const totalAmount = basketProducts.reduce((total, product) => {
        if (product.discont_price !== null) {
          return total + product.discont_price * product.quantity; 
        } else {
          return total + product.price * product.quantity; 
        }
      }, 0);
      const formattedTotalAmount = totalAmount.toFixed(2);

  return (
    <div className={style.container}>
      <h2 className={style.h2}>Order details</h2>
      <div className={style.priceBox}>
        <h4 className={style.h4}>Total</h4>
        <p className={style.finalPrice}>{formattedTotalAmount}<span className={style.currency}>$</span></p>
      </div>
      <input className={style.input} type="tel" placeholder="Phone number" />
      <button className={style.button}>Order</button>
    </div>
  );
};
