import React from "react";
import { ProductItem } from "../ProductItem";
import { useGetAllProductsQuery } from "../../redux/productsApi";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";
import { ErrorPage } from "../../pages/ErrorPage";
import { Filter } from "../Filter";

export const DiscountedProductList = () => {
  const { data = [], error, isLoading } = useGetAllProductsQuery();

  const discountedProducts = data.filter((el) => el.discont_price !== null);

  return (
    <div className={style.container}>
      <h2 className={style.h2}>Products with sale</h2>
      <Filter isDiscounted />
      {isLoading && <p>Loading...</p>}
      {error && <ErrorPage />}
      <ul className={style.ul}>
        {discountedProducts.map((el) => (
          <NavLink to={`/products/${el.id}`} key={el.id}>
            <ProductItem {...el} />
          </NavLink>
        ))}
      </ul>
    </div>
  );
};
