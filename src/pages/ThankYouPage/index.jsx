import React from 'react';
import thankYou from '../../images/thankyou.png';
import style from './style.module.css';
export const ThankYouPage = () => {
    return (
        <div className={style.container}>
            <img  src={thankYou} alt="thank you for your order"/>
        </div>
    )
}