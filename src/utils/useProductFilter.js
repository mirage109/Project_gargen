import { useState } from "react";

export const useProductFilter = (initialData) => {
  const [showDiscounted, setShowDiscounted] = useState(false);
  const [sortOption, setSortOption] = useState("Default");
  const [fromPrice, setFromPrice] = useState("");
  const [toPrice, setToPrice] = useState("");
  const { data } = initialData;

  const getDiscountedProducts = (products) => {
    return products.filter((el) => el.discont_price !== null);
  };

  const sortByPrice = (products, ascending) => {
    return products.slice().sort((a, b) => {
      const priceA = a.discont_price !== null ? a.discont_price : a.price;
      const priceB = b.discont_price !== null ? b.discont_price : b.price;
      return ascending ? priceA - priceB : priceB - priceA;
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

  let sortedProducts = data;

  if (showDiscounted===true) {
    sortedProducts = getDiscountedProducts(sortedProducts);
  }
  if (sortOption === "Ascending") {
    sortedProducts = sortByPrice(sortedProducts, true);
  } else if (sortOption === "Descending") {
    sortedProducts = sortByPrice(sortedProducts, false);
  }
  if (fromPrice !== "" || toPrice !== "") {
    sortedProducts = filterProductsByPrice(sortedProducts);
  }
 


  return {
    showDiscounted,
    setShowDiscounted,
    sortOption,
    setSortOption,
    fromPrice,
    setFromPrice,
    toPrice,
    setToPrice,
    sortedProducts,
  };
};




