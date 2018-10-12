const namePattern = '[a-z]+([a-z0-9-]+[a-z0-9]+)?$';
const publicNamePattern = `^${namePattern}`;
const privateNamePattern = `^[_]?${namePattern}`;

module.exports = {
  'plugins': ['stylelint-scss'],
  'rules': {
    'scss/media-feature-value-dollar-variable': 'always',
    // comments
    // 'scss/double-slash-comment-whitespace-inside': 'never',
    // 'scss/double-slash-comment-empty-line-before': 'never',
    // 'scss/double-slash-comment-inline': 'never',
    // scss declarations
    'scss/declaration-nested-properties': 'never',
    'scss/declaration-nested-properties-no-divided-groups': true,
    // scss variables
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-pattern': privateNamePattern,
    // 'scss/dollar-variable-empty-line-before': 'never',
    // 'scss/dollar-variable-default': null,
    'scss/no-duplicate-dollar-variables': [true, {
      'ignoreInsideAtRules': ['if', 'mixin', 'function'],
    }],
    // 'scss/no-dollar-variables': 'always',
    // 'scss/dollar-variable-colon-newline-after': 'never',
    // scss placeholders
    'scss/percent-placeholder-pattern': publicNamePattern,
    'scss/at-extend-no-missing-placeholder': true,
    // scss mixins
    // 'scss/at-mixin-named-arguments': 'never',
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/at-mixin-argumentless-call-parentheses': 'never',
    'scss/at-mixin-pattern': publicNamePattern,
    // scss functions
    // 'scss/at-function-named-arguments': 'always',
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-function-pattern': publicNamePattern,
    // scss operators
    'scss/operator-no-newline-before': true,
    'scss/operator-no-newline-after': true,
    'scss/operator-no-unspaced': true,
    // 'scss/selector-no-redundant-nesting-selector': true,
    'scss/at-rule-no-unknown': true,
    // scss imports
    'scss/at-import-no-partial-leading-underscore': true,
    // 'scss/at-import-partial-extension-whitelist': [],
    'scss/at-import-partial-extension-blacklist': ['scss'],
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    'scss/at-else-empty-line-before': 'never',
    'scss/at-else-if-parentheses-space-before': 'always',
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-if-closing-brace-space-after': 'always-intermediate',
    // 'scss/partial-no-import': true,
  },
};
