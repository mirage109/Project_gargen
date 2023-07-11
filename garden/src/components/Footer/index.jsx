import React from "react";
import style from "./style.module.css";
import map from "../../images/map.png";
import instagram from "../../images/instagram.svg";
import whatssapp from "../../images/whatsapp.svg";

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.visitcard}>
        <div className={style.visitcardContact}>
          <h2 className={style.h2}>Contact</h2>
          <p className={style.p}>+49 999 999 99 99</p>
          <div className={style.social}>
            <div className={style.socialbox}>
              <img src={instagram} alt="insta" />
              <h6 className={style.h6}>Instagram</h6>
            </div>
            <div className={style.socialbox}>
              <img src={whatssapp} alt="WhatsApp" />
              <h6 className={style.h6}>WhatsApp</h6>
            </div>
          </div>
        </div>
        <div className={style.visitcardAdress}>
          <h2 className={style.h2}>Address</h2>
          <p className={style.address}>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
          <div className={style.workHours}>
            <h6 className={style.h6}>Working Hours:</h6>
            <p className={style.hours}>24 hours a day</p>
          </div>
        </div>
      </div>
      <div className={style.map}>
        <img src={map} alt="map" />
      </div>
    </div>
  );
};
