import { http, HttpResponse, delay } from 'msw'
import { setupServer } from 'msw/native'

import { categories } from '../__data__/categories';
import { products } from '../__data__/products';

export const handlers = [
  http.get('https://dummyjson.com/products/categories', async () => {
    await delay(150)
    return HttpResponse.json(categories);
  }),
  http.get('https://dummyjson.com/products', async () => {
    await delay(150)
    return HttpResponse.json(products);
  })
]

export const server = setupServer(...handlers)