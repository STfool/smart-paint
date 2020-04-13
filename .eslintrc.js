module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
		sourceType: 'module',
	},
	parser: 'babel-eslint',
  plugins: [
    'react',
  ],
  rules: {
		"no-console": 0,
		"linebreak-style": 0,
		"import/no-extraneous-dependencies": ["error",  {"devDependencies": true}],
		"import/newline-after-import": 0
  },
};
