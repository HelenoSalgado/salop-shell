// @ts-check

import { config, configs } from "typescript-eslint";

export default config(
  configs.recommended,
  {
    ignores: ["src/bundle.js"],
    files: ["src/**/*.ts"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off"
    },
  }
);

