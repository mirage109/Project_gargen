import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const sliceApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3333" }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => `/categories/all`,
    }),
    getCategoryItem: builder.query({
      query: (id) => `/categories/${id}`,
    }),
    getAllProducts: builder.query({
      query: () => `/products/all`,
    }),
    getProductItem: builder.query({
      query: (id) => `/products/${id}`,
    }),
    addPhoneNumber: builder.mutation({
      query: (newPhone) => ({
        url: `/sale/send`,
        method: "POST",
        body: newPhone,
      }),
      invalidatesTags: ["PhoneNumber"],
    }),
    addOrder: builder.mutation({
      query: (body) => ({
        url: `/order/send`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Order"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetAllCategoriesQuery,
  useGetProductItemQuery,
  useGetCategoryItemQuery,
  useAddPhoneNumberMutation,
  useAddOrderMutation,
} = sliceApi;
