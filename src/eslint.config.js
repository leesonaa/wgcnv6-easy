// eslint.config.js (CommonJS 格式)
module.exports = [
  {
    ignores: ['**/vendor/*.js'], // 忽略规则
    languageOptions: {
      ecmaVersion: 2021,         // ECMAScript 版本
      sourceType: 'module',      // ECMAScript 模块
    },
    // 将规则直接放在顶层
    rules: {
      'consistent-return': 'off',
      'no-shadow': 'off',
      'max-len': 'off',
    },
    extends: ['athom'], // 扩展配置
  },
];


