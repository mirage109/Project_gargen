import React from "react";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";

export const CategoryItem =( {image, title, id} )=> {
  return (
    <NavLink to={`/category/${id}`}>
      <div className={style.container}>
      <img className={style.img} src={`http://localhost:3333${image}`} alt={title}></img>
      <h3 className={style.h3}>{title}</h3>
      </div>
    </NavLink>
  );
}
