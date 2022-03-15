module.exports {
  "plugins": ["prettier","@typescript-eslint",],
  "settings": { "react": { "version": "detect" } },
  "parser": "@typescript-eslint/parser",
  "extends": [
    "@react-native-community",
    "prettier",
  ],
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2021,
    "ecmaFeatures": { "jsx": true }
  },
  "overrides": [
    { "files": ["*.js"], "parser": "@typescript-eslint/parser" },
    {
      "files": ["*.d.ts"],
      "rules": { "no-undef": 0, "no-unused-vars": "off", "@typescript-eslint/no-unused-vars": 0 }
    },
    {
      "files": ["*.+(tsx|ts)"],
      "rules": { "no-undef": 0 }
    }
  ],
  "rules": {
    "@typescript-eslint/no-non-null-asserted-optional-chain": 0,
    "@typescript-eslint/no-unused-vars": ["warn"],
    "@typescript-eslint/ban-types": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-namespace": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "no-multiple-empty-lines": 2,
    "no-extra-boolean-cast": 0,
    "object-shorthand": [
      "error",
      "always",
      {
        "avoidQuotes": true
      }
    ],
    "react/destructuring-assignment": 0,
    "no-shadow": 0,
    "curly": 0,
    "arrow-parens": 0,
    "react-native/no-unused-styles": 1,
    "no-undef": 2,
    "react-native/split-platform-components": 0,
    "react-native/no-inline-styles": 0,
    "react-native/no-color-literals": 0,
    "react-hooks/exhaustive-deps": "warn",
    "no-console": 1,
    "semi": 1,
    "eqeqeq": 0,
    "no-setter-return": 0,
    "no-dupe-else-if": 0,
    "react/jsx-key": 2,
    "no-unused-vars": 1,
    "react/require-render-return": 2,
    "react/jsx-handler-names": 0,
    "implicit-arrow-linebreak": 0,
    "array-callback-return": 0,
    "comma-dangle": 0,
    "no-return-assign": 1,
    "class-methods-use-this": 0,
    "no-underscore-dangle": 0,
    "react/sort-comp": 0,
    "no-param-reassign": [
      0,
      {
        "props": true,
        "ignorePropertyModificationsFor": []
      }
    ]
  }
}