import React from "react";
import { ProductItem } from "../ProductItem";
import { useGetAllProductsQuery } from "../../redux/productsApi";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";
import { Filter } from "../Filter";
import { useProductFilter } from "../../redux/useProductFilter.js";

export const ProductList = () => {
  const { data = [], error, isLoading } = useGetAllProductsQuery();
  const {
    filteredProducts,
    showDiscounted,
    setShowDiscounted,
    sortOption,
    setSortOption,
    fromPrice,
    setFromPrice,
    toPrice,
    setToPrice,
    discountedProducts,
  } = useProductFilter({ data });

  return (
    <div className={style.container}>
      <h2 className={style.h2}>All products</h2>
      <Filter
        showDiscounted={showDiscounted}
        setShowDiscounted={setShowDiscounted}
        sortOption={sortOption}
        setSortOption={setSortOption}
        fromPrice={fromPrice}
        setFromPrice={setFromPrice}
        toPrice={toPrice}
        setToPrice={setToPrice}
      />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error</p>}
      <ul className={style.ul}>
        {showDiscounted
          ? discountedProducts.map((el) => (
              <NavLink to={`/products/${el.id}`} key={el.id}>
                <ProductItem {...el} />
              </NavLink>
            ))
          : filteredProducts.map((el) => (
              <NavLink to={`/products/${el.id}`} key={el.id}>
                <ProductItem {...el} />
              </NavLink>
            ))}
      </ul>
    </div>
  );
};
