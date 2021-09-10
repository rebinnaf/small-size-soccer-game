module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:unicorn/recommended',
    'plugin:vue/recommended',
    '@vue/airbnb',
    '@vue/typescript',
    'plugin:prettier-vue/recommended',
    'prettier'
  ],
  rules: {
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'unicorn/no-nested-ternary': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/prefer-module': 'off'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
