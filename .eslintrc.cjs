module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint-config-prettier',
    'eslint:recommended',
    'prettier',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jest/recommended',
    'plugin:react/recommended',
  ],

  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', 'prettier', 'jest'],
  rules: {
    'import/no-unresolved': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    'import/no-named-as-default': 'off',
    'import/named': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
