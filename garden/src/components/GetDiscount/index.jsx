import React, { useState } from "react";
import style from "./style.module.css";
import gnom from "../../images/gnom.png";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const GetDiscount = () => {
  const [phoneNumber, setPhoneNumber] = useState("+49"); 
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (phoneNumber.trim() === "" || phoneNumber.length < 10) {
      toast.error("Phone number is required and should have at least 10 digits.");
      return;
    }
  
    setIsFormSubmitted(true);
  };

  const handleInputChange = (e) => {
    const inputPhoneNumber = e.target.value.replace(/[^\d]/g, "");
    setPhoneNumber("+"+inputPhoneNumber); 
  };

  return (
    <div className={style.getDiscount}>
      <div className={style.getDiscountImage}>
        <img src={gnom} alt="getDiscount" />
      </div>
      <div className={style.getDiscountForm}>
        {isFormSubmitted ? (
          <div>
            <h2 className={style.h2}>Sucsess!</h2>
            <p className={style.p}>Check your text <br/> messages.</p>
          </div>
        ) : (
          <>
            <h2 className={style.h2}>5% off</h2>
            <p className={style.p}>on the first order</p>
            <form className={style.form} onSubmit={handleSubmit}>
              <input
                className={style.input}
                type="text"
                placeholder="+49"
                inputMode="numeric" 
                maxLength="13" 
                value={phoneNumber}
                onChange={handleInputChange} 
              />
              <button className={style.button} type="submit">
                Get a discount
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
