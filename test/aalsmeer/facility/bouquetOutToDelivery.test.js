'use strict';
const expect = require('chai').expect;
const bouquetOutToDelivery = require('../../../aalsmeer/facility/bouquetOutToDelivery');
const inputBoquetItem = {bouquetName: 'b', sizeCode: 'L'};
describe('bouquetOutToDelivery', () => {
	it('pass', () => {
		const res = bouquetOutToDelivery(inputBoquetItem, 'D');
		expect(res).to.deep.equal({'bouquetName':'b','sizeCode':'L','output':'D','bouquetToDeliver':'bLD'});
	});
});