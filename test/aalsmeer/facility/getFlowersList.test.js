'use strict';
const inputFlowers = ['10a', '15b'];
const expect = require('chai').expect;
const getFlowersList = require('../../../aalsmeer/facility/getFlowersList');
const { DUPLICATED_FLOWER_DEFINITION} = require('../../../aalsmeer/utils/exceptions');

describe('getFlowersList', () => {
	it('should return an object length equal to input array length', () => {
		const responseFlowersList = getFlowersList(inputFlowers);
		expect(responseFlowersList).to.deep.equal([{ total: 10, type: 'a' }, { total: 15, type: 'b' }]);
	});

	it('should throw error for duplicate records', () => {
		const responseFlowersList = () => { getFlowersList(['10a', '15a']);};
		expect(responseFlowersList).to.throw(DUPLICATED_FLOWER_DEFINITION.message);
	});
});