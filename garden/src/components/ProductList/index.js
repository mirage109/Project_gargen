import { ProductItem } from "../ProductItem";
import { useGetAllProductsQuery } from "../../redux/productsApi";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";
import { Filter } from "../Filter";

export const ProductList = () => {
  const { data = [], error, isLoading } = useGetAllProductsQuery();
  return (
    <div className={style.container}>
    <h2 className={style.h2}>All products</h2>
    <Filter/>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error</p>}
      <ul className={style.ul}>
        {data.map((el) => (
          <NavLink to={`/product/${el.id}`} key={el.id}>
            <ProductItem {...el} />
          </NavLink>
        ))}
      </ul>
    </div>
  );
};
