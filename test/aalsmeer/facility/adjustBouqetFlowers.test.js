'use strict';
const expect = require('chai').expect;
const adjustBouqetFlowers = require('../../../aalsmeer/facility/adjustBouqetFlowers');
const bouquetItem = {
	flowersList:  [ { total: 20, type: 'a' }, { total: 15, type: 'c' } ] ,
	padding: 10
};
const availableChoices = { a: 290, c: 45, b: 138 };
describe('adjustBouqetFlowers', () => {
	it('should return the bouquet details that finally gets delivered to client', () => {
		const res = adjustBouqetFlowers(bouquetItem, availableChoices);
		expect(res).to.equal('25a20c');
	});
});
