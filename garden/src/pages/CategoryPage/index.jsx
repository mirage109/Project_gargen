import { CategoryItem } from "../../components/CategoryItem";
import { useGetAllCategoriesQuery } from "../../redux/productsApi";
import { ErrorPage } from "../ErrorPage";
import style from "./style.module.css";

export const CategoryPage = () => {
    const { data, error, isLoading } = useGetAllCategoriesQuery();
    return(
        <div className={style.container}>
        {isLoading ? (
            <p>loading...</p>
          ) : error ? (
            <ErrorPage/>
          ) : (
            <ul className={style.ul}>
              {data.map(
                (el, ind) =><CategoryItem key={el.id} {...el} />
              )}
            </ul>
          )}
          </div>
    )
}