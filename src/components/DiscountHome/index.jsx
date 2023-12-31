import React from "react";
import { ProductItem } from "../ProductItem";
import { useGetAllProductsQuery } from "../../redux/productsApi";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";
import { NotFound } from "../NotFound";

export const DiscountHomePage = () => {
  const { data = [], error, isLoading } = useGetAllProductsQuery();

  const discountedProducts = data.filter((el) => el.discont_price !== null);

  const limitedDiscountedProducts = discountedProducts.slice(0, 4);

  return (
    <div className={style.container}>
      <h2 className={style.h2}><NavLink to="/sales">Sale</NavLink></h2>
      {isLoading && <p>Loading...</p>}
      {error && <NotFound/>}
      <ul className={style.ul}>
        {limitedDiscountedProducts.map((el) => (
          <NavLink to={`/products/${el.id}`} key={el.id}>
            <ProductItem {...el} />
          </NavLink>
        ))}
      </ul>
    </div>
  );
};
