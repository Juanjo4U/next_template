const prettierConfig = require('./.prettierrc.json')

const RULE_TYPE = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error'
}

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect'
    }
  },
  overrides: [],
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'import',
    'unused-imports',
    'eslint-plugin-import-helpers',
    'prettier'
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      RULE_TYPE.ERROR,
      {
        fixStyle: 'separate-type-imports'
      }
    ],
    'import-helpers/order-imports': [
      RULE_TYPE.ERROR,
      {
        newlinesBetween: 'always',
        groups: ['/^next/', '/^react/', 'module', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true }
      }
    ],
    '@typescript-eslint/explicit-function-return-type': RULE_TYPE.OFF,
    '@typescript-eslint/no-explicit-any': RULE_TYPE.OFF,
    '@typescript-eslint/no-non-null-assertion': RULE_TYPE.OFF,
    '@typescript-eslint/no-misused-promises': [
      RULE_TYPE.ERROR,
      {
        checksVoidReturn: false
      }
    ],
    '@typescript-eslint/strict-boolean-expressions': [
      RULE_TYPE.WARN,
      {
        allowNullableBoolean: true,
        allowNullableString: true,
        allowNullableNumber: true,
        allowNullableObject: true
      }
    ],
    'react-hooks/rules-of-hooks': RULE_TYPE.ERROR,
    'react-hooks/exhaustive-deps': RULE_TYPE.WARN,
    'prettier/prettier': [RULE_TYPE.WARN, prettierConfig],
    'no-unused-vars': RULE_TYPE.OFF,
    '@typescript-eslint/no-unused-vars': RULE_TYPE.OFF,
    '@typescript-eslint/no-unused-expressions': RULE_TYPE.OFF,
    'unused-imports/no-unused-imports': RULE_TYPE.ERROR,
    'unused-imports/no-unused-vars': [
      RULE_TYPE.ERROR,
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }
    ]
  }
}
