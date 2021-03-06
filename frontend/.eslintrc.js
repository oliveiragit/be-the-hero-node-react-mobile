module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'], //add hooks
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
    'import/prefer-default-export': 'off',

    'no-console': ['error', { allow: ['tron'] }],
    'react/state-in-constructor': 'off',
    'no-param-reassign': 'off',

    'react-hooks/rules-of-hooks': 'error', //hooks
    'react-hooks/exhaustive-deps': 'warn',
  },
};
