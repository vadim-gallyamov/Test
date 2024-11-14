module.exports = {
  preset: 'ts-jest',
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(jpg|png|svg)$": "<rootDir>/mocks/fileMock.js",
    "\\.(css|less)$": "<rootDir>/mocks/fileMock.js"
  }
};
