module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'function-whitespace-after': 'always',  //要求或禁止在函数之后有空白。
    'number-leading-zero': 'always',  //要求或禁止小于 1 的小数的前导 0。
    'length-zero-no-unit': true,  //长度为0时，禁止使用单位 。
    'max-nesting-depth': 3, //限制允许嵌套的深度。
    'property-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'string-quotes': 'double', //指定字符串使用单引号还是双引号 。
  }
};
// http://stylelint.cn/user-guide/rules/