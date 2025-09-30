import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product, Products } from '../types/product';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/'}),
  endpoints: (build) => ({
    getProductsFromCategory: build.query<Products, string>({
      query: (categorySlug) => `products/category/${categorySlug}`
    }),
    getProduct: build.query<Product, number>({
      query: (id) => `products/${id}`
    })
  })
})

export const { useGetProductQuery, useGetProductsFromCategoryQuery } = productApi;