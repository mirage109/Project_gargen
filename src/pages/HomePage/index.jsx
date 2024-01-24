import React from "react";
import { SaleBanner } from "../../components/SaleBanner/";
import {CatalogHomePage} from "../../components/CatalogHome";
import { GetDiscount } from "../../components/GetDiscount";
import { DiscountHomePage } from "../../components/DiscountHome";

export const HomePage = () => {
  return (
    <>
      <SaleBanner />
      <CatalogHomePage />
      <GetDiscount />
      <DiscountHomePage />
    </>
  );
};
