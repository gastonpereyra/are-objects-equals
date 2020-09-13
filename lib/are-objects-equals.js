'use strict';

const assert = require('assert');
const objectNormalizer = require('objects-normalizer');
const F = require('press-f');

const ERROR_NAME = 'AreObjectsEquals';

const areObjectsEquals = (objectBase, objectToCompare, options) => {

	if(!objectBase || !objectToCompare)
		throw new F('No objects to compare', ERROR_NAME);

	const [objectFormatted1, objectFormatted2] = objectNormalizer([objectBase, objectToCompare], options);

	try {
		assert.deepStrictEqual(objectFormatted1, objectFormatted2);
		return true;
	} catch(error) {
		return false;
	}
};

module.exports = areObjectsEquals;
