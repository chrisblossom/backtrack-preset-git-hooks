'use strict';

function noop() {}

module.exports = {
    files: [{ src: 'files/husky.js', dest: '.huskyrc.js' }],

    'git-pre-commit': [noop],
    'git-pre-push': [noop],
};
