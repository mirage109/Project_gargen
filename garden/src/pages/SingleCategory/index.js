import React from "react";
import { useParams } from "react-router-dom";
import { useGetCategoryItemQuery } from "../../redux/productsApi";
import { ErrorPage } from "../ErrorPage";
import { ProductItem } from "../../components/ProductItem";
import style from "./style.module.css";
import { NavLink } from "react-router-dom";

export const SingleCategory = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetCategoryItemQuery(id);
  const dates = data && data.data;
  return (
    <div>
      {isLoading ? (
        <p>loading...</p>
      ) : error ? (
        <ErrorPage />
      ) : (
        <div className={style.container}>
          <h1>{data.category.title}</h1>
          <ul className={style.ul}>
            {dates.map((el, i) => (
              <NavLink to={`/product/${el.id}`} key={el.id}>
                <ProductItem key={el.id} {...el} />
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
