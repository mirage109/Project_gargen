import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductItemQuery } from "../../redux/productsApi";
import { ProductInfo } from "../../components/ProductInfo";
import { NotFound } from "../../components/NotFound";

export const SkuPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetProductItemQuery(id);
  const dates = data && data[0];

  const discount = () => {
    return dates.discont_price && Math.round((dates.price / dates.discont_price - 1) * 100);
  };

  return (
    <div>
      {isLoading ? (
        <p>loading...</p>
      ) : error ? (
        <NotFound />
      ) : (
        <ProductInfo dates={dates} discount={discount} />
      )}
    </div>
  );
};