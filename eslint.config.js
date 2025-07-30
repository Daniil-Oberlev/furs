import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config({
  files: ['**/*.{ts,tsx}'],
  ignores: [
    'node_modules/',
    'dist/',
    '*.config.js',
    '*.config.ts',
    '*.json',
    '.next/',
    'tailwind.config.ts'
  ],
  languageOptions: {
    parser: tseslint.parser,
    ecmaVersion: 2020,
    sourceType: 'module',
    globals: {
      ...globals.browser,
      process: 'readonly'
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      }
    }
  },
  plugins: {
    '@typescript-eslint': tseslint.plugin,
    react,
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh
  },
  rules: {
    ...js.configs.recommended.rules,
    ...tseslint.configs.recommended[0].rules,
    ...react.configs.recommended.rules,
    ...reactHooks.configs.recommended.rules,

    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react-refresh/only-export-components': 'off',

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: true
      }
    ]
  }
})
