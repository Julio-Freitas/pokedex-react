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
        'plugin:react/jsx-runtime ',
    ],

    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'prettier'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
    },
};
