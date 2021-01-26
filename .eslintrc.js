module.exports = {
  'env': {
    'es2021': true,
    'node': true,
  },
  'extends': [
    'plugin:vue/base',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'ecmaVersion': 12,
    'parser': 'babel-eslint',
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
    '@typescript-eslint',
    'html',
  ],
  'rules': {
    'indent': [
      'error',
      2,
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'never',
    ],
    'block-spacing': [
      'error',
      'always',
    ],
    'brace-style': [
      'error',
      '1tbs',
    ],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'space-before-blocks': [
      'error',
      'always',
    ],
    'space-before-function-paren': [
      'error',
      'never',
    ],
    'space-in-parens': [
      'error',
      'never',
    ],
    'space-infix-ops': [
      'error',
    ],
  },
}
