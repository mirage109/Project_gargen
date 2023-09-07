import { BasketEmpty } from "../../components/BasketEmpty";
import { BasketItem } from "../../components/BasketItem";
import { OrderDetail } from "../../components/OrderDetail";
import React from "react";
import { useSelector } from "react-redux";
import line from "../../images/linebasket.png";
import style from "./style.module.css";
import { NavLink } from "react-router-dom";
import forward from "../../images/forward.svg";

export const BasketPage = () => {
  const basketProducts = useSelector((state) => state.basket.products);
  return (
    <div>
      {basketProducts.length === 0 ? (
        <BasketEmpty />
      ) : (
        <div className={style.container}>
          <h2 className={style.h2}>Shopping cart</h2>
          <NavLink to="/category">
            <div className={style.backToStore}>
              <h4 className={style.h4}>Back to store </h4>
              <img src={forward} alt=">" />
            </div>
          </NavLink>
          <div className={style.basketDetail}>
            <div className={style.basketContent}>
              {/* <img src={line} alt="line" /> */}
              {basketProducts.map((product) => (
                <BasketItem key={product.id} product={product} />
              ))}
            </div>
            <OrderDetail />
          </div>
        </div>
      )}
    </div>
  );
};
