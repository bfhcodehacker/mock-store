import { http, HttpResponse, delay } from 'msw'
import { setupServer } from 'msw/native'

import { category } from '../__data__/category';
import { categories } from '../__data__/categories';
import { product } from '../__data__/product';
import { products } from '../__data__/products';

export const handlers = [
  http.get('https://dummyjson.com/products/categories', async () => {
    await delay(150)
    return HttpResponse.json(categories);
  }),
  http.get('https://dummyjson.com/products', async () => {
    await delay(150)
    return HttpResponse.json(products);
  }),
  http.get('https://dummyjson.com/products/category/smartphones', async () => {
    await delay(150)
    return HttpResponse.json(category);
  }),
  http.get('https://dummyjson.com/products/6', async () => {
    await delay(150)
    return HttpResponse.json(product);
  })
];

export const server = setupServer(...handlers)