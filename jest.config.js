module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|immer|react-redux|@react-navigation|@react-native-community|@testing-library)',
  ],
  setupFilesAfterEnv: ['./jest-setup.ts'],
  moduleFileExtensions: ["ts", "tsx", "js"]
};
