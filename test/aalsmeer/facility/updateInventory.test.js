const expect = require('chai').expect;
const updateInventory = require('../../../aalsmeer/facility/updateInventory');

describe('updateInventory with no initial values', () => {
	it('should return an object of type inventory filled with respective value passed', () => {
		let inventory = {large:{}, small: {}};
		let result = updateInventory('a','large', inventory);
		expect(result).deep.equal({large:{a: 1}, small:{}});
	});
});

describe('updateInventory with existing data', () => {
	let inventory = {large:{a: 10}, small: {}};

	before(() => {
		updateInventory('a','large', inventory);
	});

	it('should update the value of existing species (a) which will be 11 by 1 when it is encountered again', () => {
		let result = updateInventory('a','large', inventory);
		expect(result).deep.equal({large:{a: 12}, small:{}}, 'successfully updated');
	});
});

describe('updateInventory should throw an error', () => {
	it('should throw an error when invoked by not passing parameters', () => {
		const res = () => { updateInventory();};
		expect(res).to.throw('unable to update inventory. Please verify species and sizes');
	});
});