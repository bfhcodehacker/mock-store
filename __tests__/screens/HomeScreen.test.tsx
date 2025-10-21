import { render, screen, userEvent } from '@testing-library/react-native';
import { HomeScreen } from '../../src/screens/HomeScreen';
import { renderWithProviders, setupTestStore } from '../../__utils__/test-utils';
import { server } from '../../__mocks__/server';
import { delay, http, HttpResponse } from 'msw';

const storeRef = setupTestStore();

test('home screen renders', async () => {
  const expectedTitle = 'Mock App';
  renderWithProviders(<HomeScreen />);
  const title = await screen.findByTestId('home-title');
  expect(title).toHaveTextContent(expectedTitle);
});

test('featured categories render', async () => {
  const expectedTitle = 'Featured Categories';
  render(<HomeScreen />, { wrapper: storeRef.wrapper});
  const title = await screen.findByTestId('categories-title');
  expect(title).toHaveTextContent(expectedTitle);
  const firstCategory = await screen.findByTestId('category-1');
  expect(firstCategory).toBeOnTheScreen();
});

test('featured products section renders', async () => {
  const expectedTitle = 'Featured Products';
  const state = storeRef.store.getState();
  render(<HomeScreen />, { wrapper: storeRef.wrapper});
  const title = await screen.findByTestId('products-title');
  expect(title).toHaveTextContent(expectedTitle);
});

test('featured products render and can add to cart', async () => {
  render(<HomeScreen />, { wrapper: storeRef.wrapper});
  const firstProduct = await screen.findByTestId('product-1');
  expect(firstProduct).toBeOnTheScreen();
  const productBtn = await screen.findByTestId('product-btn-1');
  const user = userEvent.setup();
  await user.press(productBtn);
  const state = storeRef.store.getState();
  expect(state.cartData.cartCount).toBe(1);
});

test('failure to load home categories', async () => {
  server.use(
    http.get('https://dummyjson.com/products/categories', async () => {
      await delay(150)
      return HttpResponse.json([], { status: 500 });
    })
  );
  render(<HomeScreen />, { wrapper: storeRef.wrapper});
  const loadingIndicator = await screen.findByTestId('categories-failed');
  expect(loadingIndicator).toBeDefined();
});
