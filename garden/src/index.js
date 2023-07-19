import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import {HomePage} from "./pages/HomePage"
import {AllProductsPage} from "./pages/AllProductsPage"
import { SalesPage } from "./pages/SalesPage";
import { CategoryPage } from "./pages/CategoryPage";
import { BasketPage } from "./pages/BasketPage";
import { ErrorPage } from "./pages/ErrorPage";

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
            path: '/products',
            element: <AllProductsPage />,
          },
        {
            path: '/sales',
            element: <SalesPage />,
        },  
        {
            path: '/category',
            element: <CategoryPage />,

        },
        {
            path: '/cart',
            element:<BasketPage />,
        },
        {
            path: '/*',
            element: <ErrorPage />,
          },

        
      ],
    }
  ],
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
 
);
