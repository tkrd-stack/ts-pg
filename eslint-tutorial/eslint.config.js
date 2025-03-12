import { defineConfig } from 'eslint-define-config';
import airbnb from 'eslint-config-airbnb';

export default defineConfig({
  languageOptions: {
    globals: {
      // Define your global variables here
      browser: 'readonly',
      node: 'readonly',
    },
  },

  rules: {
    'no-console': 'error',
    semi: ['error', 'always'],
  },
  ...defineConfig,
  ...airbnb,
});
