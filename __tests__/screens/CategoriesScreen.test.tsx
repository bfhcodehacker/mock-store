import { screen } from "@testing-library/react-native";
import { renderWithProviders } from "../../__utils__/test-utils";
import { CategoriesScreen } from "../../src/screens/Categories";
import { categories } from "../../__data__/categories";
import { setupStore } from '../../__utils__/testStore';
import { setCategoryData } from "../../src/reducers/storeData";

test('categories screen renders', async () => {
  const expectedTitle = 'Shop Our Categories!';
  const store = setupStore({});
  store.dispatch(setCategoryData(categories));
  renderWithProviders(<CategoriesScreen />, { store });
  const title = await screen.findByTestId('categories-title');
  expect(title).toHaveTextContent(expectedTitle);
  const category = await screen.findByTestId('category-1');
  expect(category).toBeDefined();
});