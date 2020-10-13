module.exports = {
  collectCoverage: true,
  coverageReporters: ["lcov"],
  coverageDirectory: "test-coverage",
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },

  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/testSetup.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
  }
};
