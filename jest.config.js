module.exports = {
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  testMatch: ["**/tests/**/*.test.(ts|tsx|js)"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};
