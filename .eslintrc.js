module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2018,
    sourceType: "module"
  },
  extends: [
    "agile-digital"
  ],
  env: {
    "jest/globals": true,
    es6: true
  },
  plugins: ["jest", "sonarjs", "functional", "@typescript-eslint", "prettier", "total-functions"],
  "settings": {
    "immutability": {
      "overrides": [
        {
          "name": "ReadonlyArray",
          "to": "Immutable",
          "from": "ReadonlyDeep"
        }
      ]
    }
  },
  rules: {
    "total-functions/no-unsafe-mutable-readonly-assignment": "error"
  }
};