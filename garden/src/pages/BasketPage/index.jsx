import { BasketEmpty } from "../../components/BasketEmpty";
import { BasketItem } from "../../components/BasketItem";
import { OrderDetail } from "../../components/OrderDetail";
import React from "react";
import { useSelector } from "react-redux";

export const BasketPage = () => {
  const basketProducts = useSelector(state => state.basket.products);
  return (
    <div>
      {basketProducts.length  === 0 ? (
        <BasketEmpty />
      ) : (
        <>
        <h2>Shopping cart</h2>
        <h4> Back to store</h4>
        {basketProducts.map(product => (
          <BasketItem key={product.id} product={product} />
        ))}
        <OrderDetail />
      </>
      )}
     
    </div>
  );
};
