module.exports = {
  'ignorePatterns': ['vendor/'],
  'env': {
    'jest': true
  },
  parser: '@typescript-eslint/parser',
  'extends': [
    'airbnb-base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:promise/recommended',
    'plugin:import/typescript'
  ],
  'settings': {
    'react': {
      'pragma': 'React',
      'version': '16.10'
    },
    'import/resolver': {'typescript': {}}
  },
  'plugins': ['@typescript-eslint', 'promise'],
  'rules': {
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'quote-props': ['error', 'as-needed', {'numbers': true}],
    'no-cond-assign': ['error', 'always'],
    'no-else-return': ['error', {allowElseIf: true}],
    'react/jsx-fragments': [0],
    'react/jsx-one-expression-per-line': [0],
    'react/prefer-stateless-function': [0],
    'react/prop-types': [0],
    'react/button-has-type': [0],
    'import/no-extraneous-dependencies': ['error', {'devDependencies': ['**/*.spec.js']}],
    'import/extensions': ['error', 'never']
  },
  'globals': {
    'document': false,
    'describe': false,
    'it': false,
    'beforeEach': false,
    'afterEach': false,
    'fetch': false,
    'sinon': false,
    'window': false,
    'Headers': false,
    'Image': false,
    'MutationObserver': false,
    'TimeoutID': true,
    'IntervalID': true,
    'Audio': true,
    'URL': true,
    'jest': true,
    'FormData': true,
    'localStorage': false,
    '$': false,
    'File': false
  }
};
