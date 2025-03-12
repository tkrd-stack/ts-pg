// .eslintrc.cjs or .eslintrc.js

import airbnb from 'eslint-config-airbnb';
import eslintPluginReact from 'eslint-plugin-react';

export default [
  {
    files: ['*.js', '*.jsx'],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    ...airbnb, // Spread the Airbnb config directly
    plugins: ['react'],
    rules: {
      'react/jsx-uses-react': 'error',
    },
  },
];
