import perfectionist from "eslint-plugin-perfectionist";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";
import globals from "globals";
import js from "@eslint/js";

export default tseslint.config(
  {
    ignores: ["src/routes/index.ts", "node_modules/**", "dist/**", ".output/**", ".husky/**", ".vscode/**"]
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", { destructuredArrayIgnorePattern: "^_" }],
      "perfectionist/sort-named-imports": ["error", { type: "line-length", order: "desc" }],
      "perfectionist/sort-interfaces": ["error", { type: "line-length", order: "desc" }],
      "perfectionist/sort-jsx-props": ["error", { type: "line-length", order: "desc" }],
      "perfectionist/sort-imports": ["error", { type: "line-length", order: "desc" }],
      "perfectionist/sort-exports": ["error", { type: "line-length", order: "desc" }],
      "perfectionist/sort-objects": ["error", { type: "line-length", order: "desc" }],
      "perfectionist/sort-enums": ["error", { type: "line-length", order: "desc" }],
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              message: "Importe sempre pelo index.ts da pasta do componente, nunca pelo arquivo interno.",
              group: ["@/components/*/*/*", "@/components/*/*/*/*", "!@/components/ui/inputs/*"]
            }
          ]
        }
      ],
      "@typescript-eslint/no-empty-object-type": "off",
      "no-console": ["error", { allow: ["error"] }],
      "@typescript-eslint/no-explicit-any": "off",
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/exhaustive-deps": "off",
      "perfectionist/sort-maps": "off",
      "no-case-declarations": "off",
      "no-param-reassign": "off"
    },

    languageOptions: {
      globals: globals.browser,
      sourceType: "module",
      ecmaVersion: 2022
    },

    plugins: {
      "react-hooks": reactHooks,
      perfectionist
    },

    extends: [js.configs.recommended, ...tseslint.configs.recommended],

    files: ["**/*.{ts,tsx,js,jsx}"]
  },
  {
    ignores: ["eslint.config.js", "prettier.config.js"]
  }
);
