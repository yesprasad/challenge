'use strict';
const expect = require('chai').expect;
const fulfillBouquets = require('../../../aalsmeer/facility/fulfillBouquets');

const bouquets = [{
	'bouquetName': 'A',
	'sizeCode': 'L',
	'size': 'large',
	'totalQuantity': 30,
	'padding': 0,
	'initialDesign': 'AL10a15b5c30',
	'input': '10a15b5c',
	'flowersList': [{
		'total': 10,
		'type': 'a'
	}, {
		'total': 15,
		'type': 'b'
	}, {
		'total': 5,
		'type': 'c'
	}]
}];
const expected = [ { bouquetName: 'A',
	sizeCode: 'L',
	size: 'large',
	totalQuantity: 30,
	padding: 0,
	initialDesign: 'AL10a15b5c30',
	input: '10a15b5c',
	flowersList: [ {total: 10, type: 'a'}, {total: 15, type: 'b'}, {total: 5, type: 'c'} ],
	output: '10a15b5c',
	bouquetToDeliver: 'AL10a15b5c' } ];
const inventory = {'small':{'a':303,'c':45,'b':150},'large':{'c':129,'b':123,'a':249}};

describe('fulfillBouquets', () => {
	it('should return the bouquet object', () => {
		const res = fulfillBouquets(bouquets, inventory);
		expect(res).to.deep.equal(expected);
	});
});