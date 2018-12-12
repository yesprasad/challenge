'use strict';
const validBouquets = [];
const invalidBouquets = [];
const processItem = require('./parseBouquet');

const ProcessBouquets = (bouquets) => {
	bouquets.map(item => {
		try {
			validBouquets.push(processItem(item));
		}catch(err) {
			invalidBouquets.push({ initialDesign: item, error: err});
		}
        
	});
	return {validBouquets, invalidBouquets};
};

module.exports = ProcessBouquets;