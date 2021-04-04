module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'airbnb',
		'prettier',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react'],
	ignorePatterns: ['**/src/**/*'],
	// https://eslint.org/docs/rules/
	rules: {
		'no-unused-vars': 'warn',
		'no-debugger': 'warn',
		'arrow-body-style': 'off',
		'react/prop-types': 'off',
		'react/destructuring-assignment': 'warn',
		'react/prefer-stateless-function': 'warn',
		'react/jsx-fragments': 'off',
		'react/jsx-filename-extension': 'off',
		'import/no-unresolved': 'off',
		'import/extensions': 'on',
	},
};
