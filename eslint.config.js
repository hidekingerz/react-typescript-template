import js from '@eslint/js';
import typescriptParser from '@typescript-eslint/parser';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import reactHooks from 'eslint-plugin-react-hooks';
import storybook from 'eslint-plugin-storybook';
import reactPlugin from 'eslint-plugin-react';
import globals from 'globals';

export default [
  {
    ignores: ['dist/**', 'node_modules/**', '*.config.js', 'vite.config.mts', 'coverage/**']
  },
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx,mtsx}'],
    ...reactPlugin.configs.flat.recommended,
    settings: {
      ...reactPlugin.configs.flat.recommended.settings,
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactPlugin.configs.flat.recommended.rules,
      'react/react-in-jsx-scope': 'off',
    }
  },
  {
    files: ['**/*.{ts,tsx,mtsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptParser,
      'react-refresh': reactRefreshPlugin,
      'react-hooks': reactHooks,
      'storybook': storybook,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      ...reactHooks.configs.recommended.rules,
      ...storybook.configs.recommended.rules,
    },
  }
];
