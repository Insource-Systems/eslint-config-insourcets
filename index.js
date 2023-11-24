module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin'
  ],
  rules: {
    // The rules below are listed in the order they appear on the
    // @typescript-eslint rules page. All rules are listed to remain in sync.
    // https://typescript-eslint.io/rules/

    // - This config is meant to be used as an extension of the base Insource
    // ESLint config when using typescript.
    // - Rules that are already covered in the base Insource ESLint config
    // using @stylistic are commented out as to not overwrite.
    
    // '@typescript-eslint/adjacent-overload-signatures': 'off',
    // '@typescript-eslint/array-type': 'off',
    // '@typescript-eslint/await-thenable': 'error', // @typescript-eslint:recommended
    // **'@typescript-eslint/ban-ts-comment': 'error', // @typescript-eslint:recommended
    // '@typescript-eslint/ban-tslint-comment': 'off',
    '@typescript-eslint/ban-types': 'error', // @typescript-eslint:recommended
    // '@typescript-eslint/block-spacing': 'off',
    // '@typescript-eslint/brace-style': 'off',
    // '@typescript-eslint/class-literal-property-style': 'off',
    // '@typescript-eslint/class-methods-use-this': 'off',
    // '@typescript-eslint/comma-dangle': 'off',
    // '@typescript-eslint/comma-spacing': 'off',
    // '@typescript-eslint/consistent-generic-constructors': 'off',
    // '@typescript-eslint/consistent-indexed-object-style': 'off',
    // '@typescript-eslint/consistent-type-assertions': 'off',
    // '@typescript-eslint/consistent-type-definitions': 'off',
    // '@typescript-eslint/consistent-type-exports': 'off',
    // '@typescript-eslint/consistent-type-imports': 'off',
    // '@typescript-eslint/default-param-last': 'off',
    // '@typescript-eslint/dot-notation': 'off',
    // '@typescript-eslint/explicit-function-return-type': 'off',
    // '@typescript-eslint/explicit-member-accessibility': 'off',
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/func-call-spacing': 'off',
    // '@typescript-eslint/indent': 'off',
    // '@typescript-eslint/init-declarations': 'off',
    // '@typescript-eslint/key-spacing': 'off',
    // '@typescript-eslint/keyword-spacing': 'off',
    // '@typescript-eslint/lines-around-comment': 'off',
    // '@typescript-eslint/lines-between-class-members': 'off',
    // '@typescript-eslint/max-params': 'off',
    // '@typescript-eslint/member-delimiter-style': 'off',
    // '@typescript-eslint/member-ordering': 'off',
    // '@typescript-eslint/method-signature-style': 'off',
    // '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-array-constructor': 'error', // @typescript-eslint:recommended
    // '@typescript-eslint/no-base-to-string': 'error', // @typescript-eslint:recommended
    // '@typescript-eslint/no-confusing-non-null-assertion': 'off',
    // '@typescript-eslint/no-confusing-void-expression': 'off',
    // '@typescript-eslint/no-dupe-class-members': 'off',
    // '@typescript-eslint/no-duplicate-enum-values': 'error', // @typescript-eslint:recommended
    // '@typescript-eslint/no-duplicate-type-constituents': 'error', // @typescript-eslint:recommended
    // '@typescript-eslint/no-dynamic-delete': 'off',
    // **'@typescript-eslint/no-empty-function': 'off',
    // '@typescript-eslint/no-empty-interface': 'off',
    // **'@typescript-eslint/no-explicit-any': 'error', // @typescript-eslint:recommended
    // '@typescript-eslint/no-extra-non-null-assertion': 'error', // @typescript-eslint:recommended
    // '@typescript-eslint/no-extra-parens': 'off',
    // '@typescript-eslint/no-extra-semi': 'off',
    // '@typescript-eslint/no-extraneous-class': 'off',
    // '@typescript-eslint/no-floating-promises': 'error', // @typescript-eslint:recommended
    // '@typescript-eslint/no-for-in-array': 'error', // @typescript-eslint:recommended
    // '@typescript-eslint/no-implied-eval': 'error', // @typescript-eslint:recommended
    // '@typescript-eslint/no-import-type-side-effects': 'off',
    // '@typescript-eslint/no-inferrable-types': 'off',
    // '@typescript-eslint/no-invalid-this': 'off',
    // '@typescript-eslint/no-invalid-void-type': 'off',
    // '@typescript-eslint/no-loop-func': 'off',
    // '@typescript-eslint/no-loss-of-precision': 'error', // @typescript-eslint:recommended
    // '@typescript-eslint/no-magic-numbers': 'off',
    // '@typescript-eslint/no-meaningless-void-operator': 'off',
    '@typescript-eslint/no-misused-new': 'error', // @typescript-eslint:recommended
    // '@typescript-eslint/no-misused-promises': 'error', // @typescript-eslint:recommended
    // '@typescript-eslint/no-mixed-enums': 'off',
    // '@typescript-eslint/no-namespace': 'error', // @typescript-eslint:recommended
    // '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'off',
    // '@typescript-eslint/no-non-null-asserted-optional-chain': 'error', // @typescript-eslint:recommended
    // '@typescript-eslint/no-non-null-assertion': 'off',
    // '@typescript-eslint/no-redeclare': 'off',
    // '@typescript-eslint/no-redundant-type-constituents': 'error', // @typescript-eslint:recommended
    // '@typescript-eslint/no-require-imports': 'off',
    // '@typescript-eslint/no-restricted-imports': 'off',
    // '@typescript-eslint/no-shadow': 'off',
    // '@typescript-eslint/no-this-alias': 'error', // @typescript-eslint:recommended
    // '@typescript-eslint/no-throw-literal': 'off',
    // '@typescript-eslint/no-type-alias': 'off',
    // '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
    // '@typescript-eslint/no-unnecessary-condition': 'off',
    // '@typescript-eslint/no-unnecessary-qualifier': 'off',
    // '@typescript-eslint/no-unnecessary-type-arguments': 'off',
    // '@typescript-eslint/no-unnecessary-type-assertion': 'error', // @typescript-eslint:recommended
    // '@typescript-eslint/no-unnecessary-type-constraint': 'error', // @typescript-eslint:recommended
    // '@typescript-eslint/no-unsafe-argument': 'error', // @typescript-eslint:recommended
    // '@typescript-eslint/no-unsafe-assignment': 'error', // @typescript-eslint:recommended
    // '@typescript-eslint/no-unsafe-call': 'error', // @typescript-eslint:recommended
    '@typescript-eslint/no-unsafe-declaration-merging': 'error', // @typescript-eslint:recommended
    // '@typescript-eslint/no-unsafe-enum-comparison': 'error', // @typescript-eslint:recommended
    // '@typescript-eslint/no-unsafe-member-access': 'error', // @typescript-eslint:recommended
    // '@typescript-eslint/no-unsafe-return': 'error', // @typescript-eslint:recommended
    // '@typescript-eslint/no-unsafe-unary-minus': 'off',
    // '@typescript-eslint/no-unused-expressions': 'off',
    // '@typescript-eslint/no-unused-vars': 'error', // @typescript-eslint:recommended
    // '@typescript-eslint/no-use-before-define': 'off',
    // '@typescript-eslint/no-useless-constructor': 'off',
    // '@typescript-eslint/no-useless-empty-export': 'off',
    // **'@typescript-eslint/no-var-requires': 'error', // @typescript-eslint:recommended
    // '@typescript-eslint/non-nullable-type-assertion-style': 'off',
    // '@typescript-eslint/object-curly-spacing': 'off',
    // '@typescript-eslint/padding-line-between-statements': 'off', 
    // '@typescript-eslint/parameter-properties': 'off',
    '@typescript-eslint/prefer-as-const': 'error', // @typescript-eslint:recommended
    // '@typescript-eslint/prefer-destructuring': 'off',
    // '@typescript-eslint/prefer-enum-initializers': 'off',
    // '@typescript-eslint/prefer-for-of': 'off',
    // '@typescript-eslint/prefer-function-type': 'off',
    // '@typescript-eslint/prefer-includes': 'off',
    // '@typescript-eslint/prefer-literal-enum-member': 'off',
    // '@typescript-eslint/prefer-namespace-keyword': 'off',
    // '@typescript-eslint/prefer-nullish-coalescing': 'off',
    // '@typescript-eslint/prefer-optional-chain': 'off',
    // '@typescript-eslint/prefer-readonly': 'off',
    // '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    // '@typescript-eslint/prefer-reduce-type-parameter': 'off',
    // '@typescript-eslint/prefer-regexp-exec': 'off',
    // '@typescript-eslint/prefer-return-this-type': 'off',
    // '@typescript-eslint/prefer-string-starts-ends-with': 'off',
    // '@typescript-eslint/prefer-ts-expect-error': 'off',
    // '@typescript-eslint/promise-function-async': 'off',
    // '@typescript-eslint/quotes': 'off',
    // '@typescript-eslint/require-array-sort-compare': 'off',
    // '@typescript-eslint/require-await': 'error', // @typescript-eslint:recommended
    // '@typescript-eslint/restrict-plus-operands': 'error', // @typesript-eslint:recommended
    // '@typescript-eslint/restrict-template-expressions': 'error', // @typescript-eslint:recommended
    // '@typescript-eslint/return-await': 'off',
    // '@typescript-eslint/semi': 'off',
    // '@typescript-eslint/sort-type-contituents': 'off',
    // '@typescript-eslint/space-before-blocks': 'off',
    // '@typescript-eslint/space-before-function-paren': 'off',
    // '@typescript-eslint/space-infix-ops': 'off',
    // '@typescript-eslint/strict-boolean-expressions': 'off',
    // '@typescript-eslint/switch-exhaustiveness-check': 'off',
    '@typescript-eslint/triple-slash-reference': 'error', // @typescript-eslint:recommended
    // '@typescript-eslint/type-annotation-spacing': 'off',
    // '@typescript-eslint/typedef': 'off',
    // '@typescript-eslint/unbound-method': 'error', // @typesript-eslint:recommended
    // '@typescript-eslint/unified-signatures': 'off',
  },
};
