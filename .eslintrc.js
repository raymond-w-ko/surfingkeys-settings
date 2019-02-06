module.exports = {
  extends: "eslint:recommended",
  env: { browser: true, node: true, es6: true },
  parserOptions: {
    sourceType: "module",
  },
  globals: { Promise: true },
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double", { avoidEscape: true }],
    semi: ["error", "always"],
    "no-console": 0,
    "no-unused-vars": 0,
    indent: 0,
  },
};
