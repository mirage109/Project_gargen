import React from "react";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { removeFromBasket, updateQuantity } from "../../redux/basketSlice";

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
    <div>
      <img
        className={style.img}
        src={`http://localhost:3333${product.image}`}
        alt={product.title}
      />
      <h3>{product.title}</h3>
      <div>
        <p>{product.price}$</p>
        <p>{product.discont_price}</p>
      </div>
      <div className={style.counter}>
        <button onClick={handleDecrement}>-</button>
        <p> {product.quantity}</p>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button onClick={handleRemoveFromBasket}>X</button>
    </div>
  );
};
