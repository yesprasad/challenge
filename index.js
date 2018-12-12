/*eslint-disable no-console*/
'use strict';
const readline = require('readline');
const readSpecs = require('./aalsmeer/facility/readspecs');
const processBouquets = require('./aalsmeer/facility/processBouquets');
const fulfillBouquets = require('./aalsmeer/facility/fulfillBouquets');
const chalk = require('chalk');
(async () => {
	const lineReader = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});

	try {
		const {
			bouquets,
			inventory
		} = await readSpecs(lineReader);
		const {validBouquets, invalidBouquets} = processBouquets(bouquets);
		const _bouquets_ = fulfillBouquets(validBouquets, inventory);
		if(_bouquets_) {
			const finalBouquetsOutForDelivery = _bouquets_.map(item => {
				return {
					inputBouquetSpecification: item.initialDesign,
					ClientBouquetToDeliver: item.bouquetToDeliver,
					extraFolwersUsedInBouquet: `extra Flowers used in the bouquet: ${item.padding}`
				};
			});
			/*console.log invokes process.stdout internally. 
            So, to have a greater flexibility in printing the output data
            We shall use console.log. chalk is used to colorize the content.
            console has a feature to print an object as a table using .table function
            we shall use it to make things readable to the human eye*/
			console.log(chalk.green('ORDERS FINISHED SUCCESSFULLY:'));
			console.table(finalBouquetsOutForDelivery);
		}
		if(invalidBouquets.length) {
			console.log(chalk.red('ORDERS THAT COULD NOT BE PROCESSED: '));
			const errBouquet = invalidBouquets.map(item => {
				return{
					inputBouquetSpecification: item.initialDesign,
					errorMessage:item.error.message
				};
			});
			chalk.red(console.table(errBouquet));
		}

	} catch (err) {
        
		console.log(err.message);
		lineReader.close();
		process.exit(1);
	}
})();