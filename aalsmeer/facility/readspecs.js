'use strict';
let isOrdersSelection = true;
let bouquets = [];
let inventory = require('./inventory');
const updateInventory = require('./updateInventory');

const readSpecs = (lineReader) => {
	try {
		return new Promise((resolve) => {
			lineReader.on('line', line => {
				if (line != '' && isOrdersSelection) {
					bouquets.push(line);
				} else {
					isOrdersSelection = false;
					// species and sizes are read from string ex:'aL' or 'cS'
					const species = line.charAt(0);
					const sizes = line.charAt(1) === 'L' ? 'large' : 'small';
					inventory = updateInventory(species, sizes, inventory);
				}
			}).on('close', () => {
				return resolve({
					bouquets,
					inventory
				});
			});
		});

	} catch (err) {
		lineReader.on('close', () => {
			return new Promise.reject({
				error: err,
				message: 'Error while reading input stream'
			});
		});
	}
};

module.exports = readSpecs;