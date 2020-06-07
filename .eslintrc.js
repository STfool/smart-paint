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
		window: true,
		document: true,
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
		"import/no-extraneous-dependencies": 0,
		"import/newline-after-import": 0,
		"react/no-danger": 0,
		"global-require": 0,
		'import/no-dynamic-require': 0
	},
	settings: {
		'import/resolver': {
			webpack: {
				config: './webpack/webpack.base.js'
			}
		}
	}
};
