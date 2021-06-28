const chalk = require('chalk');
const saveById = require('../utils/saveById');

module.exports = args => {
	const id = args.id;
	if (!id || id === undefined || id === true) {
		console.log(
			chalk.red`Something went wrong! Type 'gbooks-cli help' for valid commands.\nYour id flag should be followed by the pasted ID for the corresponding book you would like to save to your reading list.\nExample: 'gbooks-cli save --id GXeODwAAQBAJ'. \nPlease check your commands and/or the ID of the book to ensure it is correct.`
		);
		return;
	}
	try {
		saveById(id);
	} catch (err) {
		console.log(`An error occurred: ${err}`);
	}
};
