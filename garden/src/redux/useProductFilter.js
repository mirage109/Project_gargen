// useProductFilter.js
import { useState } from "react";

export const useProductFilter = (initialData) => {
  const [showDiscounted, setShowDiscounted] = useState(false);
  const [sortOption, setSortOption] = useState("Default");
  const [fromPrice, setFromPrice] = useState("");
  const [toPrice, setToPrice] = useState("");
  const { data } = initialData;

  const discountedProducts = data.filter((el) => el.discont_price !== null);

  const sortByPriceAscending = (products) => {
    return products.slice().sort((a, b) => {
      const priceA = a.discont_price !== null ? a.discont_price : a.price;
      const priceB = b.discont_price !== null ? b.discont_price : b.price;
      return priceA - priceB;
    });
  };

  const sortByPriceDescending = (products) => {
    return products.slice().sort((a, b) => {
      const priceA = a.discont_price !== null ? a.discont_price : a.price;
      const priceB = b.discont_price !== null ? b.discont_price : b.price;
      return priceB - priceA;
    });
  };

  const filterProductsByPrice = (products) => {
    return products.filter((product) => {
      const price =
        product.discont_price !== null ? product.discont_price : product.price;
      const from =
        fromPrice === "" ? Number.MIN_SAFE_INTEGER : parseInt(fromPrice);
      const to = toPrice === "" ? Number.MAX_SAFE_INTEGER : parseInt(toPrice);
      return price >= from && price <= to;
    });
  };

  const sortedProducts = sortOption === "Ascending"
    ? sortByPriceAscending(data)
    : sortOption === "Descending"
    ? sortByPriceDescending(data)
    : data;

  const filteredProducts = fromPrice !== "" || toPrice !== ""
    ? filterProductsByPrice(sortedProducts)
    : sortedProducts;

  return {
    showDiscounted,
    setShowDiscounted,
    sortOption,
    setSortOption,
    fromPrice,
    setFromPrice,
    toPrice,
    setToPrice,
    filteredProducts,
    discountedProducts,
  };
};

