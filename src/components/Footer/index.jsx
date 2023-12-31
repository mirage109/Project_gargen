import React from "react";
import style from "./style.module.css";
import instagram from "../../images/instagram.svg";
import whatssapp from "../../images/whatsapp.svg";
import { Map } from "../Map";

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.visitcard}>
        <div className={style.visitcardContact}>
          <h2 className={style.h2}>Contact</h2>
          <a href="tel:+4999999999" className={style.p}>
            +49 999 999 99 99
          </a>
          <div className={style.social}>
            <div className={style.socialbox}>
              <a href="https://www.instagram.com/">
                <img src={instagram} alt="insta" />
              </a>
              <h6 className={style.h6}>Instagram</h6>
            </div>
            <div className={style.socialbox}>
              <a href="tel:+4999999999">
                <img src={whatssapp} alt="WhatsApp" />
              </a>
              <h6 className={style.h6}>WhatsApp</h6>
            </div>
          </div>
        </div>
        <div className={style.visitcardAdress}>
          <h2 className={style.h2}>Address</h2>
          <a
            href="https://www.google.com/search?q=telranDE"
            rel="noreferrer"
            target="_blank"
            className={style.address}
          >
            Linkstraße 2, 8 OG, 10785, Berlin, Deutschland
          </a>
          <div className={style.workHours}>
            <h6 className={style.h6}>Working Hours:</h6>
            <p className={style.hours}>24 hours a day</p>
          </div>
        </div>
      </div>
      <div className={style.map}>
        <Map />
      </div>
    </div>
  );
};
