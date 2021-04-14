module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    // 'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'unused-imports'],
  ignorePatterns: ['**/src/**/*'],
  // https://eslint.org/docs/rules/
  rules: {
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'no-debugger': 'warn',
    'arrow-body-style': 'off',
    'prefer-const': 'warn',
    'react/prop-types': 'off',
    'react/destructuring-assignment': 'warn',
    'react/prefer-stateless-function': 'warn',
    'react/jsx-fragments': 'off',
    'react/jsx-filename-extension': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'warn',
    'no-tabs': 'off', // fix
    indent: 'off', // fix
  },
};
