import React from "react";
import style from "./style.module.css";
import logo from "../../images/logo.svg";
import shoppingbag from "../../images/shopping_bag_icon.svg";
import { NavLink } from "react-router-dom";

export const Header = () => {
  
  return (
    <header className={style.header}>
      <div className={style.logocontainer}>
        <div className={style.logo}>
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className={style.catalog}>
          <NavLink to="/category">Catalog</NavLink>
        </div>
      </div>

      <div className={style.navContainer}>
        <ul className={style.menu}>
          <li>
            <NavLink to="/"> Main Page</NavLink>
          </li>
          <li>
            <NavLink to="/products">All Products</NavLink>
          </li>
          <li>
            <NavLink to="/sales">All sales</NavLink>
          </li>
        </ul>
        <div  >
          <NavLink to="/cart">
          <img src={shoppingbag}  alt="shoppingbag" />
          </NavLink>
        </div>
      </div>
    </header>
  );
};
