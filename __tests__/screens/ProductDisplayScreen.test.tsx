import { RouteProp } from "@react-navigation/native";
import { screen, userEvent } from "@testing-library/react-native";
import { renderWithProviders, setupTestStore } from "../../__utils__/test-utils";
import { ProductDisplayScreen } from "../../src/screens/ProductDisplay";
import { http, delay, HttpResponse } from "msw";
import { server } from "../../__mocks__/server";

jest.useFakeTimers();
const storeRef = setupTestStore();

const route: RouteProp<{ params: { productId: string } }, 'params'> = {
  key: '',
  params: {
    productId: '6'
  },
  name: 'params'
};

test('pdp screen renders', async () => {
  renderWithProviders(
    <ProductDisplayScreen route={route} />,
    { wrapper: storeRef.wrapper }
  );

  const productBox = await screen.findByTestId('pdp-product-data');
  expect(productBox).toBeOnTheScreen();
  const pdpDetails = await screen.findByTestId('pdp-details');
  expect(pdpDetails).toBeOnTheScreen();
  const imageCarousel = await screen.findByTestId('image-carousel');
  expect(imageCarousel).toBeOnTheScreen();
  const reviews = await screen.findByTestId('product-reviews');
  expect(reviews).toBeOnTheScreen();
});

test('pdp add to cart', async () => {
  renderWithProviders(
    <ProductDisplayScreen route={route} />,
    { wrapper: storeRef.wrapper }
  );
  const atcBtn = await screen.findByTestId('pdp-atc-btn');
  expect(atcBtn).toBeOnTheScreen();
  const user = userEvent.setup();
  await user.press(atcBtn);
  const state = storeRef.store.getState();
  expect(state.cartData.cartCount).toBe(1);
  const atcModal = await screen.findByTestId('atc-modal');
  expect(atcModal).toBeOnTheScreen();
});

test('pdp request error', async () => {
  server.use(
    http.get('https://dummyjson.com/products/6', async () => {
      await delay(150)
      return HttpResponse.json({}, { status: 500 });
    })
  );
  const errorText = 'Sorry, we were unable to load product data';
  renderWithProviders(
    <ProductDisplayScreen route={route} />,
    { wrapper: storeRef.wrapper }
  );
  const component = await screen.findByTestId('pdp-no-product');
  expect(component).toHaveTextContent(errorText);
});