import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";


export default defineConfig([

  { files: ["**/*.{js,mjs,cjs,ts}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts}"], languageOptions: { globals: globals.node }, 
    rules: {
      // Indentation rule: 2 spaces
      "indent": ["error", 2],
      // Space before function parenthesis
      "space-before-function-paren": ["error", "always"],
      // No space inside parentheses
      "space-in-parens": ["error", "never"]
    }
  },


  tseslint.configs.recommended,
]);