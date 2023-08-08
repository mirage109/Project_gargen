import React from "react";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/basketSlice";

export const ProductItem = ({ id, image, title, price, discont_price }) => {
  const discount = () => {
    return discont_price && Math.round((price / discont_price - 1) * 100);
  };
  const dispatch = useDispatch();
  const handleAddToCart = (e) => {
    e.preventDefault()
    const product = {
      id,
      image,
      title,
      price,
      discont_price,
    };
    dispatch(addToBasket(product));
  };
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <img
          className={style.img}
          src={`http://localhost:3333${image}`}
          alt={title}
        />
        <button className={style.button} onClick={handleAddToCart}>Add to cart</button>
      </div>
      <div>
        {discont_price !== null ? (
          <div className={style.priceBox}>
            <p className={style.bigPrice}>
              {discont_price}
              <span>$</span>
            </p>
            <p className={style.smallPrice}>{price}$</p>
            <p className={style.discount}>-{discount()}%</p>
          </div>
        ) : (
          <h3 className={style.bigPrice}>
            {price}
            <span>$</span>
          </h3>
        )}
      </div>
      <h6 className={style.h6}>{title}</h6>
    </div>
  );
};
