import React from "react";
import { useParams } from "react-router-dom";
import { useGetCategoryItemQuery } from "../../redux/productsApi";
import { ErrorPage } from "../ErrorPage";
import { ProductItem } from "../../components/ProductItem";
import style from "./style.module.css";
import { NavLink } from "react-router-dom";
import { Filter } from "../../components/Filter";
import { useProductFilter } from "../../utils/useProductFilter.js";

export const SingleCategory = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetCategoryItemQuery(id);
  const dates = data && data.data;
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
  } = useProductFilter({ data: dates });

  return (
    <div>
      {isLoading ? (
        <p>loading...</p>
      ) : error ? (
        <ErrorPage />
      ) : (
        <div className={style.container}>
          <h2 className={style.h2}>{data.category.title}</h2>
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
          <ul className={style.ul}>
            {sortedProducts.map((el, i) => (
              <NavLink to={`/products/${el.id}`} key={el.id}>
                <ProductItem key={el.id} {...el} />
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
