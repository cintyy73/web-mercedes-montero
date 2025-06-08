module.exports = {
  env: { browser: true, es2021: true },
  extends: ['react-app', 'plugin:react/recommended', 'prettier'],
  plugins: ['react', 'react-hooks'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
