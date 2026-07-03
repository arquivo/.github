export default {
  extends: ['@commitlint/config-conventional'],
  helpUrl: 'https://www.conventionalcommits.org/',
  rules: {
    'type-enum': [2, 'always', [
      'feat', 'fix', 'perf', 'revert',
      'docs', 'test', 'ci', 'refactor', 'style', 'chore',
    ]],
    'header-max-length':      [2, 'always', 110],
    'body-leading-blank':     [0, 'always'],
    'body-max-line-length':   [0, 'always'],
    'footer-max-line-length': [0, 'always'],
    'subject-case':           [0, 'always', []],
    'subject-full-stop':      [0, 'never',  '.'],
  },
  ignores: [
    message => /^Revert ".*"( \(#\d+\))?/.test(message),
  ],
};
