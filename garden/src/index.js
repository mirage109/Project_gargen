import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import { HomePage } from "./pages/HomePage";
import { AllProductsPage } from "./pages/AllProductsPage";
import { SalesPage } from "./pages/SalesPage";
import { CategoryPage } from "./pages/CategoryPage";
import { BasketPage } from "./pages/BasketPage";
import { ErrorPage } from "./pages/ErrorPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { SkuPage } from "./pages/SkuPage";
import { SingleCategory } from "./pages/SingleCategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <AllProductsPage />,
      },
      {
        path: "/sales",
        element: <SalesPage />,
      },
      {
        path: "/category",
        element: <CategoryPage />,
      },
      {
        path: "/cart",
        element: <BasketPage />,
      },
      {
        path: "/*",
        element: <ErrorPage />,
      },
      {
        path: '/products/:id',
        element: <SkuPage />,
      },
      {
        path: '/category/:id',
        element: <SingleCategory />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
