const assert = require('assert');
const eslint = require('eslint');
const conf = require('../');

// Source files to lint
const sourceFiles = [
  'index.js',
  '__test__/test.js',
];

// Test against rules defined in this repo
const eslintOpts = {
  overrideConfig: {
    env: {
      browser: true,
      commonjs: true,
      es2021: true,
    },
    extends: './index.js',
    overrides: [
      {
        env: {
          node: true,
        },
        files: [
          '.eslintrc.{js,cjs}',
        ],
        parserOptions: {
          sourceType: 'script',
        },
      },
    ],
    parserOptions: {
      ecmaVersion: 'latest',
    },
    rules: conf.rules,
  },
};

// Run the linter
new eslint.ESLint(eslintOpts).lintFiles(sourceFiles)
  .then((report) => {
    sourceFiles.forEach((file, index) => {
      const fileReport = report[index];
      assert.equal(fileReport.errorCount, 0);
      assert.equal(fileReport.warningCount, 0);
    });
  });
