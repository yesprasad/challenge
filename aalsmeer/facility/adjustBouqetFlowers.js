'use strict';
/**
 *
 *
 * @param {*} bouquetItem valid item in the input bouquet
 * @param {*} availableChoices the options from inventory that can be used to
 * adjust the extra flowers to be filled in the bouquet
 * @returns the final bouquet that will go out for delivery to the client
 */
const adjustBouqetFlowers = (bouquetItem, availableChoices) => {
	const finalClientBouquet = [];
	const itemList =bouquetItem.flowersList;
	if (bouquetItem.padding) {
		const limit = itemList.length;
		let adjustedFlowerType = 0;
        
		for (let i = 0; i < bouquetItem.padding; i++) {
			if (adjustedFlowerType >= limit) {
				adjustedFlowerType = 0;
			}
			itemList[adjustedFlowerType].total += 1;
			adjustedFlowerType += 1;
		}
	}
	itemList.forEach((item) => {
		availableChoices[item.type] -= item.total;
		finalClientBouquet.push(`${item.total}${item.type}`);
	});
	return finalClientBouquet.join('');
};

module.exports = adjustBouqetFlowers;