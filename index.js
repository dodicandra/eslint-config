const fs = require('fs');
const path = require('path');

const tsConfig = fs.existsSync('tsconfig.json')
  ? path.resolve('tsconfig.json')
  : fs.existsSync('types/tsconfig.json')
  ? path.resolve('types/tsconfig.json')
  : undefined;

module.exports = {
  plugins: ['@typescript-eslint'],
  extends: ['@react-native-community', 'plugin:@typescript-eslint/recommended', 'eslint:recommended'],
  settings: { react: { version: 'detect' } },
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.d.ts'],
      rules: { 'no-undef': 0, 'no-unused-vars': 'off', '@typescript-eslint/no-unused-vars': 1 }
    },
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        project: tsConfig,
        sourceType: 'module'
      },
      plugins: ['@typescript-eslint'],
      rules: {
        'no-undef': 0,
        '@typescript-eslint/no-non-null-asserted-optional-chain': 0,
        '@typescript-eslint/no-unused-vars': 2,
        // '@typescript-eslint/no-unused-vars-experimental': 2,
        '@typescript-eslint/ban-types': 0,
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-empty-interface': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-namespace': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-extra-non-null-assertion': 'off',
        '@typescript-eslint/no-unnecessary-type-constraint': 'off'
      }
    }
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    // react
    'react/destructuring-assignment': 0,
    'react/require-render-return': 2,
    'react/jsx-key': 2,
    'react/jsx-handler-names': 0,
    'react/sort-comp': 0,
    'react/react-in-jsx-scope': 0,
    'react-hooks/exhaustive-deps': 'warn',
    // react-native
    'react-native/split-platform-components': 0,
    'react-native/no-inline-styles': 0,
    'react-native/no-color-literals': 0,
    'react-native/no-unused-styles': 1,
    // regular
    'no-useless-catch': 'off',
    'no-multiple-empty-lines': 2,
    'no-extra-boolean-cast': 0,
    'object-shorthand': [
      'error',
      'always',
      {
        avoidQuotes: true
      }
    ],
    'no-shadow': 0,
    curly: 0,
    'arrow-parens': 0,
    'no-undef': 2,
    'no-console': 1,
    semi: 1,
    eqeqeq: 0,
    'no-setter-return': 0,
    'no-dupe-else-if': 0,
    'no-unused-vars': 1,
    'implicit-arrow-linebreak': 0,
    'array-callback-return': 0,
    'comma-dangle': 0,
    'no-return-assign': 1,
    'class-methods-use-this': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': [
      0,
      {
        props: true,
        ignorePropertyModificationsFor: []
      }
    ]
  }
};
