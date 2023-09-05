import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./style.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAddOrderMutation } from "../../redux/productsApi";
import { clearBasket } from "../../redux/basketSlice";

export const OrderDetail = () => {
  const basketProducts = useSelector((state) => state.basket.products);
  const dispatch = useDispatch();

  const totalAmount = basketProducts.reduce((total, product) => {
    if (product.discont_price !== null) {
      return total + product.discont_price * product.quantity;
    } else {
      return total + product.price * product.quantity;
    }
  }, 0);
  const formattedTotalAmount = totalAmount.toFixed(2);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [addOrder] = useAddOrderMutation();
  const handleInputChange = (e) => {
    const inputPhoneNumber = e.target.value.replace(/[^\d]/g, "");
    setPhoneNumber("+" + inputPhoneNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (phoneNumber.length < 10) {
      toast.error("Phone number is required and should have at least 10 digits.");
      return;
    }
    try {
      const response = await addOrder({
        ...basketProducts,
        phoneNumber,
      }).unwrap();
  
      if (response) {
        dispatch(clearBasket());
        toast.success("Order submitted successfully!");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={style.container}>
      <h2 className={style.h2}>Order details</h2>
      <div className={style.priceBox}>
        <h4 className={style.h4}>Total</h4>
        <p className={style.finalPrice}>
          {formattedTotalAmount}
          <span className={style.currency}>$</span>
        </p>
      </div>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          className={style.input}
          type="tel"
          placeholder="Phone number"
          value={phoneNumber}
          onChange={handleInputChange}
          maxLength="13"
        />
        <button className={style.button} type="submit">
          Order
        </button>
      </form>
    </div>
  );
};
