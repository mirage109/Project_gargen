import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom"; // Импортируйте useLocation
import style from "./style.module.css";
import logo from "../../images/logo.svg";
import shoppingbag from "../../images/shopping_bag_icon.svg";

export const Header = () => {
  const totalItems = useSelector((state) => state.basket.products.reduce((total, product) => total + product.quantity, 0));
  const location = useLocation(); 

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
            <NavLink to="/" className={location.pathname === "/" ? style.activeLink : style.navLink}> Main Page</NavLink>
          </li>
          <li>
            <NavLink to="/products" className={location.pathname === "/products" ? style.activeLink : style.navLink}>All Products</NavLink>
          </li>
          <li>
            <NavLink to="/sales" className={location.pathname === "/sales" ? style.activeLink : style.navLink}>All sales</NavLink>
          </li>
        </ul>
        <div>
          <NavLink to="/cart" className={style.shoppingBagLink}>
            <img src={shoppingbag} alt="shoppingbag" />
            {totalItems > 0 && (
              <span className={style.itemCount}>{totalItems}</span>
            )}
          </NavLink>
        </div>
      </div>
    </header>
  );
};
