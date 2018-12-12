'use strict';
const {
	INVALID_RULE,
	RuleException,
	INVALID_FLOWER_ARGUMENTS,
	INVALID_FLOWER_SUMATORY
} = require('../utils/exceptions');
const {
	BOUQUET_REGEX,
	FLOWER_REGEX
} = require('../utils/constants');
const getFlowersList = require('./getFlowersList');
const validateItem = (bouquet) => {

	if (!BOUQUET_REGEX.test(bouquet)) {
		throw new RuleException(INVALID_RULE);
	}
	const parsedBouquet = BOUQUET_REGEX.exec(bouquet);

	if (!parsedBouquet || parsedBouquet.length < 5) {
		throw new RuleException(INVALID_RULE);
	}

	const parsedList = parsedBouquet[3]
		.split(FLOWER_REGEX)
		.filter(r => r.length);

	// Flower species are identified by a single, small letter: a - z .
	// The flowers are listed in alphabetic order, and they are listed only once in a bouquet.
	const flowersList = getFlowersList(parsedList);
	if (parsedList.length > flowersList.length) {
		throw new RuleException(Object.assign({}, INVALID_FLOWER_ARGUMENTS, {
			data: {
				flowersList,
				parsedList
			}
		}));
	}
	const bouquetName = parsedBouquet[1];
	const size = parsedBouquet[2] === 'S' ? 'small' : 'large';
	const totalQuantity = parseInt(parsedBouquet[parsedBouquet.length - 1], 10);


	/*
        The total quantity can be bigger than the the sum of the flower quantities, 
        allowing extra space in the bouquets that can consist of any kind of flowers.
        */
	const totalRequestFlowers = flowersList.reduce((c, n) => {
		return c + n.total;
	}, 0);

	if (totalRequestFlowers > totalQuantity) {
		throw new RuleException(INVALID_FLOWER_SUMATORY);
	}
    
	if (flowersList.length) {
		return {
			bouquetName,
			sizeCode: parsedBouquet[2],
			size,
			totalQuantity,
			padding: totalQuantity - totalRequestFlowers,
			initialDesign: parsedBouquet[0],
			input: parsedBouquet[3],
			flowersList
		};
	}
};

module.exports = validateItem;