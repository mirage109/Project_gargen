import React from "react";
import style from "./style.module.css";
import logo from "../../images/logo.svg";
import shoppingbag from "../../images/shopping_bag_icon.svg";
export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logocontainer}>
        <div className={style.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={style.catalog}>Catalog</div>
      </div>

      <div className={style.navContainer}>
        <ul className={style.menu}>
          <li>Main Page</li>
          <li>All Products</li>
          <li>All sales</li>
        </ul>
        <div className={style.shopingbag}>
          <img src={shoppingbag} alt="shoppingbag" />
        </div>
      </div>
      
    </header>
  );
};
