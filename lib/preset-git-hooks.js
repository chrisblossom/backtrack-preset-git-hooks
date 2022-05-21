'use strict';

const path = require('path');
const { existsSync } = require('fs');

/**
 * Install husky. Might need to be initiated more than once
 */
try {
	const huskyFilePath = path.resolve('.husky/_/husky.sh');
	if (existsSync(huskyFilePath) === false) {
		const husky = require('husky');
		husky.install();
	}
	// eslint-disable-next-line no-empty
} catch (error) {}

function noop() {}

module.exports = {
	files: [
		{ src: 'files/pre-commit', dest: '.husky/pre-commit' },
		{ src: 'files/pre-push', dest: '.husky/pre-push' },
	],

	'git-pre-commit': [noop],
	'git-pre-push': [noop],
};
