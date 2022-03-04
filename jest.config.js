module.exports = {
    preset: "jest-expo",
    collectCoverage: true,
    collectCoverageFrom: [
      "**/*.{ts,tsx}",
      "!**/coverage/**",
      "!**/node_modules/**",
      "!**/babel.config.js",
      "!**/jest.setup.js",
      "!**/jest.config.js",
      "!**/App.tsx",
      "!**/src/navigation/**",
    ],
    globals: {
      "tsconfig": "tsconfig.jest.json"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    moduleFileExtensions: [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ],
    modulePaths: [
      "<rootDir>"
    ],
    setupFiles: [
      "./tests/setup.js"
    ],
    transformIgnorePatterns: [
      "<rootDir>/node_modules/(react-clone-referenced-element|@react-native-community|react-navigation|@react-navigation/.*|@unimodules/.*|native-base|react-native-code-push)"
    ],
    snapshotSerializers: ["enzyme-to-json/serializer"]
  };
  