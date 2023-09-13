import React from "react";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { removeFromBasket, updateQuantity } from "../../redux/basketSlice";
import line from "../../images/linebasket.png";
import minus from "../../images/minus.svg";
import plus from "../../images/plus.svg";
import deleteButton from "../../images/delete.svg";
import { baseUrl } from "../../config";

export const BasketItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleRemoveFromBasket = () => {
    dispatch(removeFromBasket(product.id));
  };

  const handleIncrement = () => {
    dispatch(
      updateQuantity({ itemId: product.id, quantity: product.quantity + 1 })
    );
  };

  const handleDecrement = () => {
    if (product.quantity > 1) {
      dispatch(
        updateQuantity({ itemId: product.id, quantity: product.quantity - 1 })
      );
    }
  };

  return (
    <div className={style.itemContainer}>
      <div className={style.gridContainer}>
        <img
          className={style.img}
          src={baseUrl+product.image}
          alt={product.title}
        />
        <div className={style.column2}>
          <h3 className={style.h3}>{product.title}</h3>
          <div className={style.counter}>
            <button className={style.buttonCounter} onClick={handleDecrement}>
              <img src={minus} alt="-" />
            </button>
            <p className={style.quantity}> {product.quantity}</p>
            <button className={style.buttonCounter} onClick={handleIncrement}>
              <img src={plus} alt="+" />
            </button>
          </div>
        </div>
        <div className={style.column3}>
          {product.discont_price !== null ? (
            <>
              <p className={style.bigPrice}>
                {product.discont_price}
                <span>$</span>
              </p>
              <p className={style.smallPrice}>
                {product.price}
                <span>$</span>
              </p>
            </>
          ) : (
            <p className={style.bigPrice}>
              {product.price}
              <span>$</span>
            </p>
          )}
        </div>
        <div className={style.column4}>
          <button
            className={style.buttonDelete}
            onClick={handleRemoveFromBasket}
          >
            <img src={deleteButton} alt="X" />
          </button>
        </div>
      </div>
      <img src={line} alt="line" className={style.line} />
    </div>
  );
};
