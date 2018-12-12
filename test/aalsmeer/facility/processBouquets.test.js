'use strict';
const expect = require('chai').expect;
const processBouquets = require('../../../aalsmeer/facility/processBouquets');
const expectedValidInput = {'validBouquets':
[{'bouquetName':'A','sizeCode':'L','size':'large','totalQuantity':30,'padding':0,'initialDesign':'AL10a15b5c30','input':'10a15b5c',
	'flowersList':[{'total':10,'type':'a'},{'total':15,'type':'b'},{'total':5,'type':'c'}]}],
'invalidBouquets':[]};

describe('processBouquets valid only bouquets', () => {
	it('should return an object having array of valid bouquets and  empty invalid bouquets', () => {
		const res = processBouquets([ 'AL10a15b5c30']);
		expect(res).to.deep.equal(expectedValidInput);
	});
});

describe('processBouquets having invalid bouquets', () => {
	it('should return an object having array of empty valid and value for invalid bouquets', () => {
		const res = processBouquets([ 'CL20a15c33']);
		expect(res.invalidBouquets[0].error.code).to.equal('rules/invalid-flower-sumatory');
		expect(res.invalidBouquets[0].error.message).to.equal('Rule total flowers is larger than bouquet max flower allocation');
	});
});