import React from "react";
import { CatalogListHomePage } from "../CatalogListHomePage";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";

export const CatalogHomePage = () => {
  return (
    <div className={style.container}>
      <div>
        <h2>Catalog</h2>
        <button>
          <NavLink to="/products">All categories</NavLink>
        </button>
      </div>
      <div>
        <CatalogListHomePage />
      </div>
    </div>
  );
};
