jest.mock(
  '@react-native-vector-icons/ionicons',
  () => 'MockedIonicons',
);

jest.mock(
  'react-native-linear-gradient',
  () => 'MockedLinearGradient'
);

const ReactNative = jest.requireActual('react-native'); // Import the actual module to retain other functionalities

ReactNative.StyleSheet.create = (styles) => styles;
ReactNative.Platform = {
  OS: 'android',
  select: () => null
};

module.exports = ReactNative;