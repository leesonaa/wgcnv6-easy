export default [
  {
    ignores: ['**/vendor/*.js'], // 忽略规则
    languageOptions: {
      ecmaVersion: 2021,         // 可根据项目需要设置 ECMAScript 版本
      sourceType: 'module',      // ECMAScript 模块
    },
    linterOptions: {
      rules: {
        'consistent-return': 'off',
        'no-shadow': 'off',
        'max-len': 'off',
      },
    },
    // 扩展规则集
    extends: ['athom'], // 需要确保 "athom" 这个扩展依然可用
  },
];
