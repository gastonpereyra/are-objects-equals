'use strict';

const assert = require('assert');
// const sandbox = require('sinon');

const { AreObjectsEquals } = require('../lib/index');

describe('are-objects-equals', () => {

    context('When Some condition', () => {
        
        it('Should return something', () => {
            const areObjectsEquals = new AreObjectsEquals();
            assert(areObjectsEquals);
        })
    })

    context('When Other condition', () => {
        
        it('Should reject otherthing', () => {

        })
    })
})