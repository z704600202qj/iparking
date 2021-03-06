module.exports = {
  root: true,
  parserOptions: {
    project: './tsconfig.json'
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  rules: {
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'global-require': 0,
    'eol-last': 0,
    'consistent-return': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/interactive-supports-focus': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'comma-dangle':[2, "never"],
    'max-len': ["error", { "code": 180 }],
    "linebreak-style": [0, "error", "windows"],
  }
}
