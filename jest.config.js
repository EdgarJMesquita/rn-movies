module.exports = {
  preset: "jest-expo",
  testPathIgnorePatterns: [
    '/node_modules',
    '/android',
    '/ios',
    './src/__tests__/@react-native-async-storage'
  ],
  setupFiles:[ './src/__tests__/@react-native-async-storage/async-storage.ts'],
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "jest-styled-components"
  ]
}