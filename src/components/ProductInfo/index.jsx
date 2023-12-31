import React from "react";
import style from "./style.module.css";
import line from "../../images/line.png";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/basketSlice.js"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseUrl } from "../../config";

export const ProductInfo = ({ dates, discount }) => {
  const dispatch = useDispatch();
  
  const handleAddToCart = () => {
    dispatch(addToBasket(dates));
    
    toast.success('Product added to cart!', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000, 
    });
  };
  
  return (
    <div>
      <h2 className={style.title}>{dates.title}</h2>
      <div className={style.container}>
        <div className={style.imageContainer}>
          <img
            className={style.img}
            src={baseUrl+dates.image}
            alt={dates.title}
          />
        </div>
        <div className={style.productInfo}>
          {dates.discont_price !== null ? (
            <div className={style.priceBox}>
              <p className={style.bigPrice}>
                {dates.discont_price}
                <span className={`${style.span} ${style.isBlack}`}>$</span>
              </p>
              <p className={style.smallPrice}>{dates.price}$</p>
              <p className={style.discount}>
                -{discount()}
                <span className={`${style.span} ${style.isPink}`}>%</span>
              </p>
            </div>
          ) : (
            <div className={style.priceBox}>
              <p className={style.bigPrice}>
                {dates.price}
                <span className={`${style.span} ${style.isBlack}`}>$</span>
              </p>
            </div>
          )}
          <button className={style.button} onClick={handleAddToCart}>To cart</button>
          <img src={line} alt="line" />
          <div>
            <h3 className={style.h3}>Description</h3>
            <p className={style.description}>{dates.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


