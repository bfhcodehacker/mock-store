import { screen } from '@testing-library/react-native';
import { HomeScreen } from '../../src/screens/HomeScreen';
import { renderWithProviders } from '../../utils/test-utils';

test('home screen renders', async () => {
  const expectedTitle = 'Mock App';
  renderWithProviders(<HomeScreen />);
  const title = await screen.findByTestId('home-title');
  expect(title).toHaveTextContent(expectedTitle);
  expect(screen.toJSON()).toMatchSnapshot();
});