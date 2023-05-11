module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ["@typescript-eslint", "prettier", "css", "vue"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:css/recommended",
    "plugin:vue/recommended",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  rules: {
    quotes: ["error", "double"],
    indent: ["error", 2],
    "no-var": "error",
    "prettier/prettier": "off",
    "vue/no-multiple-template-root": "off",
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "always"
    }],
    "no-trailing-spaces": "error",
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": ["error", { "max": 1 }]
    // "css/no-color-keywords": 2,
    // "css/no-color-literals": 2,
    // "css/no-important": 2,
  },
  ignorePatterns: ["dist/", "node_modules/"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".cjs"],
      },
    },
  },
};
