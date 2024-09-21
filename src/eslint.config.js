// eslint.config.js
const athomConfig = require('eslint-config-athom'); // 如果 `athom` 是通过 npm 安装的

module.exports = [
  athomConfig,  // 直接引入扩展配置
  {
    ignores: ['**/vendor/*.js'], // 忽略模式
    languageOptions: {
      ecmaVersion: 2021,         // ECMAScript 版本
      sourceType: 'module',      // 源代码类型
    },
    rules: {
      'consistent-return': 'off',  // 自定义规则
      'no-shadow': 'off',
      'max-len': 'off',
    },
  },
];



