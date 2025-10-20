import { screen, userEvent } from '@testing-library/react-native';
import { HomeScreen } from '../../src/screens/HomeScreen';
import { renderWithProviders, testStore } from '../../utils/test-utils';

test('home screen renders', async () => {
  const expectedTitle = 'Mock App';
  renderWithProviders(<HomeScreen />);
  const title = await screen.findByTestId('home-title');
  expect(title).toHaveTextContent(expectedTitle);
  expect(screen.toJSON()).toMatchSnapshot();
});

test('featured categories render', async () => {
  const expectedTitle = 'Featured Categories';
  renderWithProviders(<HomeScreen />);
  const title = await screen.findByTestId('categories-title');
  expect(title).toHaveTextContent(expectedTitle);
  const firstCategory = await screen.findByTestId('category-1');
  expect(firstCategory).toBeOnTheScreen();
});

test('featured products section renders', async () => {
  const expectedTitle = 'Featured Products';
  renderWithProviders(<HomeScreen />);
  const title = await screen.findByTestId('products-title');
  expect(title).toHaveTextContent(expectedTitle);
});

test('featured products render and can add to cart', async () => {
  renderWithProviders(<HomeScreen />);
  const firstProduct = await screen.findByTestId('product-1');
  expect(firstProduct).toBeOnTheScreen();
  const productBtn = await screen.findByTestId('product-btn-1');
  const user = userEvent.setup();
  await user.press(productBtn);
  const state = testStore.getState();
  expect(state.cartData.cartCount).toBe(1);
});