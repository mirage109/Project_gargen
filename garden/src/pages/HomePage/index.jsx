import React from "react";
import { SaleBanner } from "../../components/SaleBanner";
import {CatalogHomePage} from "../../components/CatalogHomePage";
import { GetDiscount } from "../../components/GetDiscount";
import { DiscountHomePage } from "../../components/DiscountHomePage";

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
