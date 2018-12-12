'use strict';
const expect = require('chai').expect;
const validInput = 'AL8d10r5t30';
const validOutput = { bouquetName: 'A',
	sizeCode: 'L',
	size: 'large',
	totalQuantity: 30,
	padding: 7,
	initialDesign: 'AL8d10r5t30',
	input: '8d10r5t',
	flowersList:
 [ { total: 8, type: 'd' }, { total: 10, type: 'r' }, { total: 5, type: 't' } ] };
const parseBouquet = require('../../../aalsmeer/facility/parseBouquet');
const {INVALID_RULE, INVALID_FLOWER_SUMATORY} = require('../../../aalsmeer/utils/exceptions');

describe('parseBouquet', () => {
	it('should throw INVALID_RULE error for empty input', () => {
		const res = () => { parseBouquet('');};
		expect(res).to.throw(INVALID_RULE.message, INVALID_RULE.code);
	});
	it('should throw INVALID_RULE error for not a proper input', () => {
		const res = () => { parseBouquet('afas');};
		expect(res).to.throw(INVALID_RULE.message, INVALID_RULE.code);
	});
	it('should pass are return bouquet object', () => {
		const res = parseBouquet(validInput);
		expect(res).to.deep.equal(validOutput);
	});
	it('should throw invalid flower collection error for not a proper input', () => {
		const res = () => { parseBouquet('AL8d10r5t3');};
		expect(res).to.throw(INVALID_FLOWER_SUMATORY.message);
	});
});

