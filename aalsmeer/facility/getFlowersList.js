'use strict';
const {RuleException, DUPLICATED_FLOWER_DEFINITION} = require('../utils/exceptions');
const flowersList = (parsedList) => {
	const typesFound = {};
	return parsedList
		.filter(r => {
			const type = r.substr(r.length-1);
			const validType = type.toLowerCase();
			if (typesFound[validType]) {
				throw new RuleException(
					Object.assign({}, DUPLICATED_FLOWER_DEFINITION, {
						data: type
					})
				);
			} else {
				typesFound[validType] = true;
			}
    
			return type.toLowerCase() === type;
		})
	// All flower quantity values have to be bigger than 0.
		.map((r) => {
			const flowerTotal = parseInt(r.substr(0, r.length - 1), 10);
			const flowerType = r.substr(r.length-1);
			if (flowerTotal > 0) {
				return {
					total: flowerTotal,
					type: flowerType
				};
			} else {
				return {
					total: 0,
					type:flowerType
				};
			}
		});
}; 

module.exports = flowersList;