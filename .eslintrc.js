// Configuration for EsLint
// See: https://eslint.org/docs/user-guide/configuring

module.exports = {
  'root': true,

  'extends': [
    '@wemake-services/javascript',
    'plugin:@typescript-eslint/recommended',
    '@wemake-services/typescript/recommended',
  ],
  'env': {
    'node': true
  },
  'parserOptions': {
    'project': './tsconfig.json',
  },
}
