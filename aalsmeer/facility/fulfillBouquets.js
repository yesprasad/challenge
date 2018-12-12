'use strict';
const {
	StreamException, INVENTORY_NOT_ENOUGH
} = require('../utils/exceptions');
const adjustBouqetFlowers = require('./adjustBouqetFlowers');
const bouquetOutToDelivery = require('./bouquetOutToDelivery');

const fulfillBouqets = (bouquets = [], inventory = {}) => {
	return bouquets.map((bouquetItem, idx) => {
		// check if we can fuilfill the bouquet request from the inventory we have
		const availableChoices = inventory[bouquetItem.size];
		const canFullfillOrder = bouquetItem.flowersList.reduce((c, item) => {
			return availableChoices[item.type] && availableChoices[item.type] > item.total ? 1 : 0;
		}, 0);
		if(canFullfillOrder) {
			// Update flower quantity in the final bouquet that goes to assembly line for the extra flower count we received
			const finalClientBouquet = adjustBouqetFlowers(bouquetItem, availableChoices);
			return bouquetOutToDelivery(bouquetItem, finalClientBouquet);
		} else {
			return bouquetItem.error = new StreamException(Object.assign({}, INVENTORY_NOT_ENOUGH, {
				data: { bouquet: bouquetItem, index: idx }
			})); 
		}
	});
};

module.exports = fulfillBouqets;