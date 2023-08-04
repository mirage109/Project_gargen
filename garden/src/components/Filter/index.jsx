import React from "react";
import style from "./style.module.css";

export const Filter = ({
  showDiscounted,
  setShowDiscounted,
  sortOption,
  setSortOption,
  fromPrice,
  setFromPrice,
  toPrice,
  setToPrice,
}) => {
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleFromPriceChange = (event) => {
    setFromPrice(event.target.value);
  };

  const handleToPriceChange = (event) => {
    setToPrice(event.target.value);
  };

  return (
    <div className={style.container}>
      <div>
        <label className={style.label} htmlFor="Price">
          {" "}
          Price{" "}
        </label>
        <input
          className={style.priceInput}
          type="number"
          inputMode="numeric"
          maxLength="4"
          placeholder="from"
          value={fromPrice}
          onChange={handleFromPriceChange}
        />
        <input
          className={style.priceInput}
          type="number"
          inputMode="numeric"
          maxLength="4"
          placeholder="to"
          value={toPrice}
          onChange={handleToPriceChange}
        />
      </div>
      <div>
        <label className={style.label}> Discounted items</label>
        <input
          type="checkbox"
          checked={showDiscounted}
          onChange={() => setShowDiscounted(!showDiscounted)}
        />
      </div>
      <div>
        <label className={style.label} htmlFor="sortOption">
          Sorted
        </label>
        <select
          className={style.select}
          id="sortOption"
          value={sortOption}
          onChange={handleSortChange}
        >
          <option value="Default">Default</option>
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
        </select>
      </div>
    </div>
  );
};


