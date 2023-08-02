import React from "react";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";
import { CategoryItem } from "../CategoryItem";
import { useGetAllCategoriesQuery } from "../../redux/productsApi";
import { ErrorPage } from "../../pages/ErrorPage";

export const CatalogHomePage = () => {
  const { data, error, isLoading } = useGetAllCategoriesQuery();
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h2>Catalog</h2>
        <button>
          <NavLink to="/category">All categories</NavLink>
        </button>
      </div>
      <div>
      {isLoading ? (
        <p>loading...</p>
      ) : error ? (
        <ErrorPage/>
      ) : (
        <ul className={style.ul}>
          {data.map(
            (el, ind) => ind < 4 && <CategoryItem key={el.id} {...el} />
          )}
        </ul>
      )}
      </div>
    </div>
  );
};
