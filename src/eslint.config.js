// eslint.config.js
const athomConfig = require('eslint-config-athom');  // 引入扩展的配置

module.exports = [
  athomConfig,  // 包含扩展配置
  {
    ignores: ['**/vendor/*.js'],  // 忽略模式
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: require('some-custom-parser'),  // 将 parser 放在 languageOptions 下
    },
    rules: {
      'consistent-return': 'off',
      'no-shadow': 'off',
      'max-len': 'off',
    },
  },
];




