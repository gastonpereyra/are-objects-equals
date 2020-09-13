'use strict';

const assert = require('assert');

const areObjectsEquals = require('../lib/are-objects-equals');

describe('are-objects-equals', () => {

	context('When Errors found', () => {

		it('Should throw if no objects are passed', () => {

			assert.throws(() => areObjectsEquals());
		});

		it('Should throw if one objects are passed', () => {

			assert.throws(() => areObjectsEquals({ name: 'first' }));
			assert.throws(() => areObjectsEquals(null, { name: 'first' }));
		});

		it('Should throw if items are not objects', () => {

			assert.throws(() => areObjectsEquals({ name: 'first' }, 'first'));
			assert.throws(() => areObjectsEquals('first', { name: 'first' }));
			assert.throws(() => areObjectsEquals({ name: 'first' }, ['first']));
			assert.throws(() => areObjectsEquals(['first'], { name: 'first' }));
		});

		it('Should throw if options are invalid', () => {

			assert.throws(() => areObjectsEquals({ name: 'first' }, { name: 'first' }, 'options'));
		});

	});

	const sameObject = {
		name: 'same',
		quantity: 100,
		items: ['door', 'glass'],
		place: {
			city: 'Central',
			country: 'Fake'
		}
	};

	const sameObjectLess = {
		name: 'same',
		quantity: 100,
		items: ['door', 'glass']
	};

	const sameObjectMore = {
		name: 'same',
		quantity: 100,
		items: ['door', 'glass'],
		place: {
			city: 'Central',
			country: 'Fake'
		},
		isActive: true
	};

	context('When Compare Objects without Normalize', () => {

		it('Should return true if both objects are equals', () => {

			assert(areObjectsEquals(sameObject, sameObject));
			assert(areObjectsEquals(sameObjectLess, sameObjectLess));
			assert(areObjectsEquals(sameObjectMore, sameObjectMore));
		});

		it('Should return false if objects are differents', () => {

			assert(!areObjectsEquals(sameObject, sameObjectMore));
			assert(!areObjectsEquals(sameObjectLess, sameObject));
			assert(!areObjectsEquals(sameObjectMore, sameObjectLess));
		});
	});

	context('When Compare Objects with Normalize', () => {

		it('Should return false if both objects remove equals fields', () => {

			assert(!areObjectsEquals(sameObject, sameObjectMore, { fieldsToRemove: ['name', 'quantity', 'items'] }));
			assert(!areObjectsEquals(sameObjectLess, sameObject, { fieldsToRemove: ['name', 'quantity', 'items'] }));
			assert(!areObjectsEquals(sameObjectMore, sameObjectLess, { fieldsToRemove: ['name', 'quantity', 'items'] }));
		});

		it('Should return false if objects keep differents fields', () => {

			assert(!areObjectsEquals(sameObject, sameObjectMore, { fieldsToKeep: ['isActive'] }));
			assert(!areObjectsEquals(sameObjectLess, sameObject, { fieldsToKeep: ['place'] }));
			assert(!areObjectsEquals(sameObjectMore, sameObjectLess, { fieldsToKeep: ['place', 'isActive'] }));
		});

		it('Should return true if both objects keep equals fields', () => {

			assert(areObjectsEquals(sameObject, sameObjectMore, { fieldsToKeep: ['name', 'quantity'] }));
			assert(areObjectsEquals(sameObjectLess, sameObject, { fieldsToKeep: ['name', 'quantity'] }));
			assert(areObjectsEquals(sameObjectMore, sameObjectLess, { fieldsToKeep: ['name', 'quantity'] }));
		});

		it('Should return true if objects remove differents fields', () => {

			assert(areObjectsEquals(sameObject, sameObjectMore, { fieldsToRemove: ['isActive'] }));
			assert(areObjectsEquals(sameObjectLess, sameObject, { fieldsToRemove: ['place'] }));
			assert(areObjectsEquals(sameObjectMore, sameObjectLess, { fieldsToRemove: ['place', 'isActive'] }));
		});
	});
});
