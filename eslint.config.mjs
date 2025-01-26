import react from "eslint-plugin-react";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import globals from "globals";
import pluginI18next from "eslint-plugin-i18next";

 /** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    pluginJs.configs.recommended,
   ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    ignores: ["dist/**/*"],
  },
  {
    files: ["**/*.tsx", "**/*.ts", "**/*.jsx", "**/*.js"],
    ignores: ["dist/**/*"],
    settings: {
      react: {
        version: "detect",
      },
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
      react,
      i18next: pluginI18next
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/ban-ts-comment": "warn",
      "react/no-deprecated": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "i18next/no-literal-string": ["error", { markupOnly: true }]
    }
  },
];
