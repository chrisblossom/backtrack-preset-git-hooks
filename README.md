# @backtrack/preset-git-hooks

[![npm](https://img.shields.io/npm/v/@backtrack/preset-git-hooks.svg?label=npm%20version)](https://www.npmjs.com/package/@backtrack/preset-git-hooks)
[![Linux Build Status](https://img.shields.io/circleci/project/github/chrisblossom/backtrack-preset-git-hooks/master.svg?label=linux%20build)](https://circleci.com/gh/chrisblossom/backtrack-preset-git-hooks/tree/master)
[![Windows Build Status](https://img.shields.io/appveyor/ci/chrisblossom/backtrack-preset-git-hooks/master.svg?label=windows%20build)](https://ci.appveyor.com/project/chrisblossom/backtrack-preset-git-hooks/branch/master)
[![Code Coverage](https://img.shields.io/codecov/c/github/chrisblossom/backtrack-preset-git-hooks/master.svg)](https://codecov.io/gh/chrisblossom/backtrack-preset-git-hooks/branch/master)

## About

[`backtrack`](https://github.com/chrisblossom/backtrack) preset that adds git hooks via [`husky`](https://github.com/typicode/husky).

## Features

-   Adds git hooks

## Installation

`npm install --save-dev @backtrack/preset-git-hooks`

## Usage

```js
// backtrack.config.js

'use strict';

module.exports = {
    presets: ['@backtrack/git-hooks'],

    // pre-commit hook
    'git-pre-commit': [],
    // pre-commit hook
    'git-pre-push': [],

    /**
     * add custom hooks
     */
    'git-commit-msg': [],
    config: {
        husky: {
            hooks: {
                'commit-msg': 'npm run git-commit-msg',
            },
        },
    },
};
```
