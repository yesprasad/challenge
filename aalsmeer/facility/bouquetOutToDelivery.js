'use strict';
const bouquetOutToDelivery = (bouquetItem, finalClientBouquet) => {
	return Object.assign(bouquetItem, {
		output: finalClientBouquet,
		bouquetToDeliver: `${bouquetItem.bouquetName}${bouquetItem.sizeCode}${finalClientBouquet}`
	});
};

module.exports = bouquetOutToDelivery;