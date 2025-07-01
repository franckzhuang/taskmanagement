import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";

const reactRecommended = pluginReact.configs.recommended;

export default defineConfig([
  js.configs.recommended,

  {
    files: ["**/*.{js,mjs,cjs,jsx}"],

    plugins: {
      react: pluginReact,
    },

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser },
    },

    settings: {
      react: { version: "detect" },
      ...reactRecommended.settings,
    },

    rules: {
      ...reactRecommended.rules,
      "react/prop-types": "off",
      "react/no-unescaped-entities": "off",
    },
  },
]);
