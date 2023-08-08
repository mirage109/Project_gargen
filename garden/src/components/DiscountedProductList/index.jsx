import React from "react";
import { ProductItem } from "../ProductItem";
import { useGetAllProductsQuery } from "../../redux/productsApi";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";
import { ErrorPage } from "../../pages/ErrorPage";
import { Filter } from "../Filter";
import { useProductFilter } from "../../redux/useProductFilter.js";
import { useEffect } from "react";

export const DiscountedProductList = () => {
  const { data = [], error, isLoading } = useGetAllProductsQuery();

  const {
    sortedProducts,
    showDiscounted,
    setShowDiscounted,
    sortOption,
    setSortOption,
    fromPrice,
    setFromPrice,
    toPrice,
    setToPrice,
  } = useProductFilter({ data });

  useEffect(() => {
    setShowDiscounted(true);
  }, [setShowDiscounted]);

  return (
    <div className={style.container}>
      <h2 className={style.h2}>Products with sale</h2>
      <Filter
        isDiscounted
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
      {error && <ErrorPage />}
      <ul className={style.ul}>
        {sortedProducts.map((el) => (
          <NavLink to={`/products/${el.id}`} key={el.id}>
            <ProductItem {...el} />
          </NavLink>
        ))}
      </ul>
    </div>
  );
};
