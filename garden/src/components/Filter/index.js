import React, { useState } from "react";
import style from "./style.module.css";

export const Filter = () => {
  return (
    <div className={style.container}>
      <div>
        <label className={style.label} htmlFor="Price"> Price </label>
        <input className={style.priceInput} placeholder="from" />
        <input className={style.priceInput} placeholder="to"/>
      </div>
      <div>
        <label className={style.label}> Discounted items</label>
        <input type="checkbox" className={style.checkbox} />
      </div>
      <div>
        <label className={style.label} htmlFor="sortOption">Sorted:</label>
        <select className={style.select} id="sortOption">
          <option value="Default">Default</option>
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
        </select>
      </div>
    </div>
  );
};
