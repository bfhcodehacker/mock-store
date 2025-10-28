import { screen } from "@testing-library/react-native";
import { ProductIndexScreen } from "../../src/screens/ProductIndex";
import { RouteProp } from "@react-navigation/native";
import { Category } from "../../src/types/category";
import { renderWithProviders, setupTestStore } from "../../__utils__/test-utils";
import { http, delay, HttpResponse } from "msw";
import { server } from "../../__mocks__/server";

jest.useFakeTimers();
const storeRef = setupTestStore();

const route: RouteProp<{ params: { category: Category} }, 'params'> = {
  key: '',
  params: {
    category: {
      name: 'Smartphones',
      slug: 'smartphones',
      url: ''
    }
  },
  name: 'params'
};

test('product index screen renders', async () => {
  renderWithProviders(
    <ProductIndexScreen route={route} />,
    { wrapper: storeRef.wrapper }
  );
  const product = await screen.findByTestId('product-1');
  expect(product).toBeDefined();
});

test('product index request error', async () => {
  server.use(
    http.get('https://dummyjson.com/products/category/smartphones', async () => {
      await delay(150)
      return HttpResponse.json({}, { status: 500 });
    })
  );
  const errorText = 'Sorry, we were unable to load product data';
  renderWithProviders(
    <ProductIndexScreen route={route} />,
    { wrapper: storeRef.wrapper }
  );
  const component = await screen.findByTestId('product-index-error');
  expect(component).toHaveTextContent(errorText);
});