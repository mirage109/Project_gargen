import React from "react";
import { SaleBanner } from "../../components/SaleBanner";
import {CatalogHomePage} from "../../components/CatalogHomePage";
import { GetDiscount } from "../../components/GetDiscount";
import { SalesHomePage } from "../../components/SalesHomePage";

export const HomePage = () => {
  return (
    <>
      <SaleBanner />
      <CatalogHomePage />
      <GetDiscount />
      <SalesHomePage />
    </>
  );
};
