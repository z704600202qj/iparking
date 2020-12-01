module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  rules: {
    'function-whitespace-after': 'always',  //要求或禁止在函数之后有空白。
    'number-leading-zero': 'always',  //要求或禁止小于 1 的小数的前导 0。
    'length-zero-no-unit': true,  //长度为0时，禁止使用单位 。
    'property-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'string-quotes': 'double', //指定字符串使用单引号还是双引号 。
    "indentation": 4,
    "no-duplicate-selectors": true,
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['box-orient'],
      },
    ],
  }
};
// http://stylelint.cn/user-guide/rules/