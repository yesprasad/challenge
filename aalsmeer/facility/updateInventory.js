'use strict';

const updateInventory = (species, sizes, inventory) => {
	try{
		inventory[sizes][species] ? inventory[sizes][species]++ : inventory[sizes][species] = 1;
		return inventory;
	} catch(err) {
		throw new Error('unable to update inventory. Please verify species and sizes');
	}
};

module.exports = updateInventory;